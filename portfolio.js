const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/portfolio', (req, res) => {
    const { project } = req.body;
    // Logic to save project to database
    res.send('Project added to portfolio');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
