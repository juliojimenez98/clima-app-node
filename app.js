const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');

const argv = require('yargs').option({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener clima',
        demand:true
    }
}).argv;

console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

// clima.getClima(40.68908,-73.95861)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion)=>{

    try {

        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat,coords.lng);
        // const clima = await clima.getAspClima(coords.lat,coords.lng);

        return `El clima de ${coords.direccion} es de ${temperatura}°C`

        
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }

    


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)