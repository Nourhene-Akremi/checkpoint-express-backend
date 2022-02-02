//import expresse 
const express=require("express");
const res = require("express/lib/response");
const app=express();
const PORT=5000;

//middleware
const verifDate=(req,resp,next)=>{
    let days =['sunday','monday','tuesday','wednessdday','thursday','friday','saturday'];
    let hours=new Date().getHours();
    days[new Date().getDay()]!=="saturday" && days[new Date().getDay()]!=="sunday" && hours>9 && hours<=20 ? next()
     :resp.send('come back later') 
}

app.use(verifDate) 
//create the server
app.listen(PORT,(err)=>err? console.log(err):console.log(`welcome to my server ${PORT}`))

//routing miideleware
app.use(express.static('public'))
