//Enlem ve boylam bilgileri değerlendirilir

const request = require("request")



const forecast = (enlem,boylam,callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=d769d873bba3609c98530c8c51487303&query=' + enlem + ',' + boylam + '&units=m'

        request({url: url,json: true},(err,res)=>{
                if(err){
                    return callback(err,undefined)
                }else{
                    callback(undefined,res.body)
                }
        })

}

module.exports = {
    forecast : forecast
}