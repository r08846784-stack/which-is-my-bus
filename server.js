const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose');
const Bus = require("./models/model");
const Comment=require("./models/feedbackmodel");
mongoose.connect(process.env.MONGO_URI);//mongodb://127.0.0.1:27017/bus

const app = express()
//const port = 3000
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('index', { foo: 'FOO' });
})

app.post('/generate', async (req, res) => {

  // console.log(req.body);
  try {
    let e = await Bus.create({
      busname: req.body.busname,
      regno: req.body.regno,
      img: req.body.imgsrc,
      stops: req.body.stops
    })
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.json({ success: false });
  }


}) 

app.post('/createcomment', async (req, res) => {

  // console.log(req.body);
  try {
    let e = await Comment.create({
      busname:req.body.busname,
    regno:req.body.regno,
   username:req.body.name,
   comment:req.body.comment
    })
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.json({ success: false });
  }


}) 


app.post('/delete', async (req, res) => {

  // console.log(req.body);
  try {
    let e = await Bus.deleteOne({busname:req.body.busname,regno:req.body.regno });
      
   
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.json({ success: false });
  }


})




app.get('/show', async (req, res) => {
  let data = await Bus.find({});
  res.send(data);

 // res.render('index', { foo: 'FOO' });
})

app.get('/commentshow', async (req, res) => {
  let data = await Comment.find({});
  res.send(data);

})


app.get('/forms', async (req, res) => {
  res.render('form', { foo: 'FOO' });
})
app.get('/feedback', async (req, res) => {
 // console.log(req.params.slug1)
 res.render('feedback', { foo: 'FOO' });

})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
