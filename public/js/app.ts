interface Task {
  id: string;
  text: string;
  priority: string;
  updatedAt: Date;
  dragging: boolean;
}

let tasks: Task[] = [];
let currentPriority: string = "media";
let dragSrcIndex: number | null = null;
const authPassword: string = "familia"; // Senha padrão (altere conforme desejar)

// Elementos do DOM
const authTerminal = document.getElementById("authTerminal") as HTMLDivElement;
const authInput = document.getElementById("authPassword") as HTMLInputElement;
const authButton = document.getElementById("authButton") as HTMLButtonElement;
const authError = document.getElementById("authError") as HTMLParagraphElement;
const appContainer = document.getElementById("appContainer") as HTMLElement;
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskButton = document.getElementById("addTaskButton") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;
const priorityBtns = document.querySelectorAll(".priority-btn") as NodeListOf<HTMLButtonElement>;
const testConnectionBtn = document.getElementById("testConnection") as HTMLButtonElement;
const saveConfigBtn = document.getElementById("saveConfig") as HTMLButtonElement;
const syncTasksBtn = document.getElementById("syncTasks") as HTMLButtonElement;
const dbTypeSelect = document.getElementById("dbType") as HTMLSelectElement;
const dbEndpointInput = document.getElementById("dbEndpoint") as HTMLInputElement;
const syncStatus = document.getElementById("syncStatus") as HTMLParagraphElement;

// Função de autenticação
function handleAuth(): void {
  const input = authInput.value.trim();
  if (input === authPassword) {
    authTerminal.style.display = "none";
    appContainer.hidden = false;
  } else {
    authError.textContent = "Senha incorreta. Tente novamente.";
  }
}

authButton.addEventListener("click", handleAuth);
authInput.addEventListener("keyup", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    handleAuth();
  }
});

// Adicionar tarefa
function addTask(): void {
  const text = taskInput.value.trim();
  if (text === "") return;
  const newTask: Task = {
    id: generateId(),
    text,
    priority: currentPriority,
    updatedAt: new Date(),
    dragging: false
  };
  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keyup", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Seleção de prioridade
priorityBtns.forEach(button => {
  button.addEventListener("click", () => {
    currentPriority = button.getAttribute("data-priority") || "media";
    // Aqui você pode adicionar indicação visual para o botão selecionado
  });
});

// Renderiza as tarefas na tela
function renderTasks(): void {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = `task-item ${task.priority}`;
    li.setAttribute("draggable", "true");
    li.dataset.index = index.toString();

    li.innerHTML = `
      <span class="task-text">${task.text}</span>
      <button class="delete-btn">🗑️</button>
    `;

    // Eventos de Drag & Drop
    li.addEventListener("dragstart", () => {
      dragSrcIndex = index;
      task.dragging = true;
      li.classList.add("dragging");
    });

    li.addEventListener("dragend", () => {
      task.dragging = false;
      li.classList.remove("dragging");
    });

    li.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    li.addEventListener("drop", () => {
      if (dragSrcIndex === null) return;
      const targetIndex = Number(li.dataset.index);
      if (dragSrcIndex !== targetIndex) {
        reorderTasks(dragSrcIndex, targetIndex);
      }
      dragSrcIndex = null;
      renderTasks();
    });

    // Botão para deletar tarefa
    const deleteBtn = li.querySelector(".delete-btn") as HTMLButtonElement;
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskList.appendChild(li);
  });
}

// Reordena as tarefas
function reorderTasks(fromIndex: number, toIndex: number): void {
  const task = tasks.splice(fromIndex, 1)[0];
  tasks.splice(toIndex, 0, task);
}

// Gera um ID único para cada tarefa
function generateId(): string {
  return "_" + Math.random().toString(36).substr(2, 9);
}

// Handlers para o painel de sincronização (DB Sync)
testConnectionBtn.addEventListener("click", () => {
  const endpoint = dbEndpointInput.value.trim();
  if (!endpoint) {
    syncStatus.textContent = "Por favor, insira um endpoint válido.";
    return;
  }
  // Teste de conexão fictício
  fetch(endpoint)
    .then(response => {
      syncStatus.textContent = response.ok ? "Conexão bem-sucedida!" : "Falha na conexão.";
    })
    .catch(err => {
      syncStatus.textContent = "Erro ao conectar: " + err;
    });
});

saveConfigBtn.addEventListener("click", () => {
  const config = {
    type: dbTypeSelect.value,
    endpoint: dbEndpointInput.value.trim()
  };
  localStorage.setItem("dbConfig", JSON.stringify(config));
  syncStatus.textContent = "Configuração salva com sucesso!";
});

syncTasksBtn.addEventListener("click", () => {
  // Simulação de sincronização
  syncStatus.textContent = "Tarefas sincronizadas com sucesso!";
});

// Renderiza a lista inicial (vazia)
renderTasks(); 