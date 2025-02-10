// Interactive task creation
function createTaskElement(task) {
    const taskEl = document.createElement('div');
    taskEl.className = 'task-item';
    taskEl.draggable = true;
    taskEl.innerHTML = `
    <div class="task-content">
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <div class="task-meta">
        <span>🏷️ ${task.category}</span>
        <span>👤 ${task.assignedTo}</span>
      </div>
    </div>
  `;
    taskEl.addEventListener('dragstart', drag);
    return taskEl;
}

// Decision roulette logic
function spinRoulette() {
    const tasks = Array.from(document.querySelectorAll('.task-item'));
    if (tasks.length === 0) return;

    const spinDuration = 3000;
    const resultElement = document.getElementById('roulette-result');

    let current = 0;
    const interval = setInterval(() => {
        tasks[current].style.backgroundColor = '';
        current = (current + 1) % tasks.length;
        tasks[current].style.backgroundColor = '#ffeb3b';
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        resultElement.innerHTML = `🎉 A prioridade escolhida foi: ${tasks[current].querySelector('h3').textContent}`;
        tasks[current].style.backgroundColor = '#c8e6c9';
    }, spinDuration);
}