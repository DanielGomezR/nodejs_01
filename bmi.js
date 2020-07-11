
const bmi = (w,h) =>{
    return h == 0? "-1": w/(h*h)
}
 
//console.log(bmi(80,1.8));

module.exports = bmi;