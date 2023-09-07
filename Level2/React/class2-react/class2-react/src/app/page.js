import Image from 'next/image'
import Persona from './components/persona'
import Especial from '@/app/especial'
// import styles from './page.module.css'
console.log('page');
const saludo = {
  nombre: 'christian',
  apellido: 'Valdez',
  age: 18,
}

export default function Home() {
  return (
   <>
  <div>
    <h1>{saludo.nombre}</h1>
  </div>

    <Persona mensaje={'hola hijos mios hermosos'}></Persona>

    <Especial condicion={true} liked={true}></Especial>
   </>
  )
}
