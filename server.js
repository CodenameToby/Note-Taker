const express = require('express');
const path = require('path');
const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/html", htmlRoutes);
app.use("/api", apiRoutes);
app.listen(PORT, () => {
    console.log(`Note-Taker now listening
     at http://localhost:${PORT}`);
});