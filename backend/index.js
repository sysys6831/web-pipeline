const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

// 프론트엔드에서의 요청을 허용하기 위한 CORS 설정
app.use(cors());

// 기본 경로 라우팅
app.get('/', (req, res) => {
  res.json({ message: 'Express 백엔드 서버가 정상적으로 동작 중입니다!' });
});

// 서버 실행
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});