import WebSocket from 'ws';
const wss = new Server({ port: 8080 });
const connections = new Set();
wss.on('connection', (ws) => {
    connections.add(ws);
    ws.on('message', (message) => {
        // Broadcast updates to all family members
        connections.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
    ws.on('close', () => connections.delete(ws));
});
