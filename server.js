const express = require('express');
const fs = require('fs');
const uuid = require('./helpers/uuid');

const app = express();
const PORT = process.env.PORT || 3001;

// Define Routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});