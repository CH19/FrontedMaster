import 'bootstrap/dist/css/bootstrap.css';
import Crear from './crear';
import Cards from './cards';

export default function Main(){
    return (
        <>
        <div className='main my-5 my-5'>
            <Crear></Crear>
            <hr/>
            <Cards></Cards>
            {/* <hr></hr> */}
            <Cards></Cards>


        </div>

        <style
  dangerouslySetInnerHTML={{
    __html:
      "\n.main{\n  width: 100vw;\n  height: fit-content;\n  align-items: center;\n  justify-content: space-around;\n  display: flex;\n flex-direction: column;\n}\n\n"
  }}
/>

        </>
        
    )
}