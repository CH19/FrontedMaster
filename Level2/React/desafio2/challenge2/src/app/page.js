// para visualizar los estilos es necesario instalar la dependencia de bootstrap por npm
// npm install bootstrap 
'use client'
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
