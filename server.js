const express =  require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4484;
const mongoose = require('mongoose');
const User = require("./model");

const db = "mongodb+srv://survey:survey@cluster0.cvkw6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


app.use(cors());
app.use(express.json());

mongoose.connect(db).then(() => console.log("Mongo Database successfully connected"))
.catch(err => console.log(err));

app.get("/",(req, res)=>{
    User.find()
    .then(foundUserDetails => res.json(foundUserDetails))
});

app.post('/', (req, res)=>{
    const newUser = new User({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        sadLink: req.body.sadLink,
        happyLink: req.body.happyLink,
        contemptLink: req.body.contemptLink,
        fearLink: req.body.fearLink,
        angerLink: req.body.angerLink,
        diLink: req.body.diLink,
        suLink: req.body.suLink,
    });

    newUser.save()
      .then(data =>{
        res.json(data)
      })
      .catch(error=>{
        res.json(error)
      })
});

app.listen(port, () => console.log('Connection to api successful'));