const express = require('express');
const fs = require('fs');
const uuid = require('uuid');

const app = express();
const PORT = process.send.PORT || 3001;
 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

