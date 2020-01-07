const path = require('path');
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/tables', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/tables.html'));
    });

    app.get('/reserves', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/reserves.html'));
    });

};