const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send(`<h1>Hello Node.js!!!</h1>
<h2>Hello world</h2>
<p>Hello world</p>`);
});

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
