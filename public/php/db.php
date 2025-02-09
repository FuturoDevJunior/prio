<?php
// db.php - Exemplo de script para integração com banco de dados MySQL

// Configurações - customize conforme necessário
$host = 'localhost';
$db   = 'nome_do_banco';
$user = 'usuario';
$pass = 'senha';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    echo json_encode(['success' => false, 'message' => 'Conexão falhou: ' . $e->getMessage()]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    // Exemplo: retorna todas as tarefas
    $stmt = $pdo->query("SELECT * FROM tasks ORDER BY updatedAt DESC");
    $tasks = $stmt->fetchAll();
    echo json_encode(['success' => true, 'tasks' => $tasks]);
} elseif ($method == 'POST') {
    // Exemplo: insere uma nova tarefa
    $data = json_decode(file_get_contents("php://input"), true);
    if (!isset($data['text']) || !isset($data['priority'])) {
        echo json_encode(['success' => false, 'message' => 'Dados inválidos!']);
        exit;
    }
    $stmt = $pdo->prepare("INSERT INTO tasks (text, priority, updatedAt) VALUES (:text, :priority, NOW())");
    $stmt->execute([
        ':text' => $data['text'],
        ':priority' => $data['priority']
    ]);
    echo json_encode(['success' => true, 'message' => 'Tarefa adicionada!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Método não suportado.']);
}
?> 