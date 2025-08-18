import http from 'http';
import serverHandle from '../app.js';

const PORT = 8000;

const server = http.createServer(serverHandle);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
