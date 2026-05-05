const express = require('express');
const app = express();

// =========================
// MIDDLEWARE (LOGGER)
// =========================
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// =========================
// ROUTES
// =========================

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Route Handling!');
});

// About Route
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1>');
});

// =========================
// DYNAMIC ROUTE (PARAMS)
// =========================
app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Viewing Product ID: ${productId}`);
});

// =========================
// QUERY STRING ROUTE
// =========================
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Searching for: ${query}`);
});

// =========================
// 404 HANDLER
// =========================
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// =========================
// START SERVER
// =========================
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});