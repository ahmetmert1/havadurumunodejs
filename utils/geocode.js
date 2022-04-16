//Enlem ve boylam bilgileri

const request = require("request")


const geocode = (sehir, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(sehir) + '.json?access_token=pk.eyJ1IjoiY2FueWFoeWEiLCJhIjoiY2tucTZ2a3ZlMDI4ZzMzbnQzY29wd24wdiJ9.Stz8gEheY66xXHzzQTVZow&limit=1'

    request({url: url,json: true },(err,res)=>{

        if(err){
            callback(err,undefined);
        }else{
            callback(undefined,res.body)
        }



    })

    
}

console.log(encodeURIComponent("ahmet"));   

module.exports = {
    geocode : geocode
}