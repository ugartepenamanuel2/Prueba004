import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Dividir')
    console.log('2.- Tablas de multiplicar')
    console.log('3.- ¿Cuántos días has vivido?')
    console.log('4.- Primo')
    console.log('5.- comparar')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}