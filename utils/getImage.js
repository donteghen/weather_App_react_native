const Cloud = require('../assets/cloud.jpg')
const  Clear = require('../assets/clear.jpg')
const Rain = require('../assets/rain.jpg')

const getImage = (name) =>{
    switch(name){
        case 'clear' : 
            return Clear

        case 'cloud' : 
            return Cloud;

        case 'rain' :
            return Rain
         
        default: 
            return Rain    
    }
}
export default getImage