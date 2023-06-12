const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;

app.get('/', (req,res) => {
    res.sendFile('./views/index.html',{root:__dirname})
});

app.get('/login', (req,res) => {
    res.sendFile('./views/login.html',{root:__dirname})
});

app.get('/signup', (req,res) => {
    res.sendFile('./views/signup.html',{root:__dirname})
});

app.get('/menu', (req,res) => {
    res.sendFile('./views/menu.html',{root:__dirname})
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });