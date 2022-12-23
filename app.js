const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://<lien_vers_le_serveur_mongodb>", { useNewUrlParser: true, useUnifiedTopology: true });


const reservationSchema = {
  name: String,
  number: String,
  nbpeople: String,
  date: String,
  time: String,
  comment: String
}

const Reservation = mongoose.model("Reservation", reservationSchema);

app.post("/reservation", (req, res) => {
  const NewReservation = new Reservation({
    name: req.body.name,
    number: req.body.number,
    nbpeople: req.body.nbpeople,
    date: req.body.date,
    time: req.body.time,
    comment: req.body.comment
    });
    NewReservation.save();
    res.redirect("/reservation");
});

app.set('view engine', 'ejs');

app.use(express.static("node_modules"));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('pages/index')
});

app.get('/index', (req, res) => {
  res.render('pages/index')
});

app.get('/lacarte', (req, res) => {
    res.render('pages/lacarte')
});

app.get('/reservation', (req, res) => {
  res.render('pages/reservation')
});

app.listen(port, () => {
  console.log(`Port d'écoute : ${port}`)
});