/**
 * Template Node.js Business Logic Server
 * For Clinc AI Platform
 */
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    // Perform custom business logic here
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
