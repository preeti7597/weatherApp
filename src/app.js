const express= require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 8000;

//-----------public static path---------------------------//
const staticPath = (path.join(__dirname,"../public"));
const templates_path = (path.join(__dirname,"../templates/views"));
const partials_path = (path.join(__dirname,"../templates/partials"));

app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

//--------------------------Routing------------------------//
app.get("", (req,res) => {
    res.render("index.hbs");
});
app.get("/about", (req,res) => {
    res.render("about.hbs");
});
app.get("/weather", (req,res) => {
    res.render("weather.hbs");
});
app.get("*", (req,res) => {
    res.render("error.hbs");
});
app.listen(port,() => {
    console.log(`listenting to the port ${port}`);
});