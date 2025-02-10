import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

const connections = new Set<WebSocket>();

wss.on('connection', (ws: WebSocket) => {
  connections.add(ws);
  
  ws.on('message', (message: string) => {
    // Broadcast updates to all family members
    connections.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => connections.delete(ws));
}); 