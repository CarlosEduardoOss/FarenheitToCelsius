//Converts Celsius Temperatures to Fahrenheit   


let Celsius;
let Fahrenheit;
function temp(degree){
    const VerifyCelsius =degree.toUpperCase().includes ('C')
    const VerifyFahrenheit = degree.toUpperCase().includes ('F')
    if(!VerifyCelsius && !VerifyFahrenheit) {
        throw new Error('Invalide Temperature')
        }
    
        try {
          console.log(temp('10C'))
        } catch(Error) {
            console.log(error.message)

    let UpdateDegree=Number(degree.toUpperCase().Replace("C", ""))
    let formula = (fahrenheit) => (fahrenheit - 32)* 5/9
    let DegreeSign = 'C'

    if(VerifyCelsius) {
    UpdateDegree=Number(degree.toUpperCase().Replace("C", ""));
    formula = (fahrenheit) => (Celsius * 9/5 + 32)
    DegreeSign = 'F'

    }


    return formula(UpdateDegree) + DegreeSign  
}
    
}

