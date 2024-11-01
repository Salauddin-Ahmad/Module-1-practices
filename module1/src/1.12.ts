// nullable type | unknown type


const searchName = (value: string | null) => {
   if (value) {
    console.log('searching')
   } else {
    console.log('nothing to search')
   }
}

searchName(null)


// unknown 


const getSpeedInMeterPerSecond = (value: unknown)  => {
    if(typeof value === 'number'){
        const convertedSpeed = (value * 1000) / 3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
    else if (typeof value === 'string'){
        const [result, unit] = value.split(' ')
        const convertedSpeed = (parseFloat(result) * 1000) / 3600;

        console.log(`The speed is ${convertedSpeed} ms^-1`)
        console.log(result)
    }
    else {
        console.log('Invalid input')
    }
}

getSpeedInMeterPerSecond('100 kmh^-1')


// never 

function throwError(msg: string): never{
    throw new Error(msg)
}
throwError('mushkil error')