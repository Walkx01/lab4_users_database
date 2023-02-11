const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user.js');


const app = express();
app.use(express.json()); // Make sure it comes back as json

mongoose.connect('mongodb+srv://Walker_admin:Helloworld101@cluster0.ij2nvg9.mongodb.net/labs_db_comp3133?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')

}).catch(err => {
  console.log('Error Mongodb connection')
});


app.get("/",async(req,res)=>{
    res.send(" lab3 welcome")
})

app.post("/users",async(req,res)=>{
    const user = new User({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        address: {
          street: req.body.address.street,
          suite: req.body.address.suite,
          city: req.body.address.city,
          zipcode: req.body.address.zipcode,
          geo: {
            lat: req.body.address.geo.lat,
            lng: req.body.address.geo.lng
          }
        },
        phone: req.body.phone,
        website: req.body.website,
        company: {
          name: req.body.company.name,
          catchPhrase: req.body.company.catchPhrase,
          bs: req.body.company.bs
        }
      });
      try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
      } catch (err) {
        res.status(400).send(err);
      }
})
app.listen(3000, () => { console.log('Server is running... at port 3000') });