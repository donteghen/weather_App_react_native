const Cloud = require('../assets/cloud.jpg')
const  Clear = require('../assets/clear.jpg')
const Rain = require('../assets/rain.jpg')

const getImage = (name) =>{
    console.log(name)
    if(!name){
        return Clear
    }
    if(name.indexOf('ain') !== -1 || name.indexOf('ower') !== -1){
        return Rain
    }
    if(name.indexOf('oud') !== -1){
        return Cloud
    }
    if(name.indexOf('ear') !== -1){
        return Clear
    }
}
export default getImage