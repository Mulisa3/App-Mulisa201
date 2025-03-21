const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;

