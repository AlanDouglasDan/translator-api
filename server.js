const express = require("express");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/translate", routes); 

app.get("/", (req, res) => {
    res.send("Alan's translator api");
});

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});