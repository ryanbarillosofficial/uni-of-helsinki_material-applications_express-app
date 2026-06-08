const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send(`<h1>Hello Node.js!!!</h1>
<h2>Hello world</h2>
<h3>I'm on Render.com!</h3>
<h4>Look Mom! I'm on TV!</h4>
<p>Hello world</p>`);
});

const PORT = 8000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
