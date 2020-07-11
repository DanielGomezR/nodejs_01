
const bmi = (w,h) =>{
    return h === 0? "Error": w/(h*h)
}
 
console.log(bmi(80,1.8));