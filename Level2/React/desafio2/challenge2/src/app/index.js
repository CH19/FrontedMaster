import Header from 'next/head';
import styles from '../styles/Home.module.css';
// para visualizar los estilos es necesario instalar la dependencia de bootstrap por npm
// npm install bootstrap 
import Header from './components/header/header';
import Main from './components/main/main';
export default function Home() {
  return (
   <div>
      <Header></Header>
      <hr></hr>
      <Main></Main>
   </div>
  )
}
