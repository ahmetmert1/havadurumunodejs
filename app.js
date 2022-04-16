const express = require("express")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
var app = express()

const port = process.env.PORT||3000

////ANASAYFA
app.get("/",(req,res)=>{
    res.send("<p>Merhaba istediginiz sehrin hava durumunu ogrenmek icin /havadurumu/istenilensehir  url'de istenilensehir kismina istediginiz sehri giriniz. </p>")
})

/////İSTENİLEN ŞEHİR
app.get("/havadurumu/:sehir",(req,res)=>{
    
    geocode.geocode(req.params.sehir, (error,data)=>{
        
        if(error){
            return res.send(error)
        }else{
            const enlem = data.features[0].center[1]
            const boylam = data.features[0].center[0]
            return forecast.forecast(enlem,boylam,(error,data)=>{
                if(error){
                    return res.send(error)
                }else{
                    const konum = data.location.region
                    const timezone = data.location.timezone_id
                    const saat = data.location.localtime

                    const sicaklik = data.current.temperature
                    const desc = data.current.weather_descriptions[0]
                    
                    return res.send({konum,timezone,saat,sicaklik,desc})
                    //return res.send(data)
                }
            })
            //return res.send({enlem : enlem, boylam : boylam})
        }

    })
})








app.listen(port, ()=> {
    console.log("Server is running on 3000 port");
})

