const axios = require('axios');

const getClima = async(lat, lng)=>{


    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9f1c78d33b1d7ab3be0abb8d245c19e4&units=metric`)

    return res.data.main.temp

}

// const getAspClima = async(lat, lng)=>{


//     const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9f1c78d33b1d7ab3be0abb8d245c19e4&units=metric`)

//     return res.data.weather.main

// }

module.exports = {
    getClima
}