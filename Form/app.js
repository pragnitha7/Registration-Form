const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/register');
const port = 8000;
const fs = require("fs");


//Define mongoose schema
const contactSchema = new mongoose.Schema({
	name: String,
	email: String,
	number: Number,
	username: String,
	crpass: String,
  });

  const contact = mongoose.model('contact', contactSchema);
  const bodyparser = require("body-parser");

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded({ extended: true }));

// app.use(express.urlencoded)


// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// END POINTS
app.get('/' , (req,res)=>{
	
	const params = {'title':'Its the title' }
	res.status(200).render('index.pug', params)
});

app.post('/' , (req,res)=>{
	var myData = new contact(req.body);
       myData.save().then(()=>{
       res.send('You have been sucessfully registered..!😊')
       }).catch(()=>{
       res.status(400).send('item was not saved to the databse')
	   })
	
});

// START THE SERVER
app.listen(port , ()=>{
	console.log(`Server is running on http://localhost:${port}`)
});