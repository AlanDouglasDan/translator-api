const express = require("express");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 8000;

app.use("/translate", routes); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});