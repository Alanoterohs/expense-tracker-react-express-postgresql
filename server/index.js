const express = require('express');
const app = express();
const PORT = 4000;

app.list(PORT, () => {
    console.log(`server connected on port ${PORT}`)
})