const express = require('express');
const app = express();

app.use(express.static('public'));

app.use("/",(req,res)=>res.send("hello"));

app.listen(4000, () => {
  console.log('Sub mobile app is running on port 4000');
});

// 172.16.13.122:4000
//ngrok authtoken 2ldgxjCyEn157AOkkCjwdTtQKZw_HHPyUkHVbs6RQN53apUa
