import express from 'express';
const app = express();
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

app.use(express.json());
// app.use(cors());

 
//http://localhost:3000/weather/karachi?units=matric&age=23&side=west

app.get('/weather/:cityName', (req, res) => {

    console.log('This is Weather!'  , new Date)



    console.log('req.params.cityName',req.params.cityName )
          
         console.log("req.query.side ",  req.query.side) 
         console.log("req.query.units  ",  req.query.units) 
        



        console.log('req.body.name',req.body.name) ;
        console.log('req.body.name',req.body.age) ;
        console.log('req.body.name',req.body.university) ;





   

    let weatherdata ={
karachi :
{
    city : "Karachi",
    tempInCel:50,
    humidity:20,
    high:60,
    low:12
           
},
london :
{
    city : "London",
    tempInCel:20,
    humidity:10,
    high:30,
    low:3          
}
}
 

let userInputCityName = req.params.cityName.toLowerCase();
console.log("userInputCityName: ", userInputCityName);
let weatherToSend = weatherdata[userInputCityName]; 

if(weatherToSend ){
  res.send(   weatherToSend)
}

else{
    res
    .status(404)
    .send(`Weather data Is not available for ${req.params.cityName}!`)

    
}

})
 




app.get('/contact', (req, res) => {

    console.log('This is contact !'  , new Date)
  res.send('This is contact !' + new Date)
})







app.use( express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT ||3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})