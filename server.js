/*
 Thanh Tam Dang - 301393448
*/
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});


app.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});


app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});


const PORT = process.env.PORT || 3107;  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
