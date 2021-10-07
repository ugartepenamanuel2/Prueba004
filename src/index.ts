import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'

const main = async () => {
    let n: number
    let n1: number, n2: number
    do {

        n = await menuPral()
        switch(n){
          
            case 1:
                    console.log("Estoy en opción 1")
                    n1 =  parseInt( await leerTeclado('Dame un número')) 
                    n2 =  parseInt( await leerTeclado('Dame otro número'))
                    console.log(`El resultado es: ${n1 / n2}`)
                    break

                case 2:
                    console.log("Estoy en opción 2")
                    n1 =  parseInt( await leerTeclado('Dame un número'))                      
                    for (var i = 1; i <= 10; i++) {
                        var multi = n1 * i;
                        console.log(n1 + " X " + i + " = " + multi);
                    }
                break


                case 3:
                    console.log("Estoy en opción 3")
                    let edad : number
                    let falta : number
                    console.log("Inserte tu fecha de cumpleaños")
                    var d1=await(leerTeclado('aaaa-mm-dd'))
                    let date1 = new Date(d1)
                    let date2 = new Date()
                
                    let resta = Math.abs(date2.getTime() - date1.getTime())
                    
                    let solucion = Math.round(resta / (1000*60*60*24))
                    console.log("Usted ha vivido "+solucion+" dias")

                    case 4:
                        console.log("Estoy en opción 4")
                       console.log(await primo())
                        break
                    
                    
                    case 5:
                            console.log("Estoy en opción 5")
                           await menor()
                            break
            case 0:
                console.log('\nQue tengas un buen día')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}




main()


const primo = async () => {
	let numero= parseInt( await leerTeclado('Dame un número')) 

	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return "El numero no es primo";
	}
	
   
   

	return "El numero es primo";
   
}

const menor = async () => {
   
    var n1 =  parseInt( await leerTeclado('Dame un numero')) 
    var n2 =  parseInt( await leerTeclado('Dame un segundo numero'))
    var n3 =  parseInt( await leerTeclado('Dame un tercer numero'))

    var array=[n1,n2,n3]
    var menor = null

    for (let i = 0; i < array.length; i++) {
        if (menor === null || array[i]<menor){
            menor = array [i]
        }
    }


    console.log('El numero menor es ' + menor)
}
