import Nav from './nav';
import HamburguerMenu from './hamburguerMenu';
import Porfile from './porfile'
export default function Header(){
    return (
        <>
            <div className='header'>
                <Porfile></Porfile>
            <Nav></Nav>
            <HamburguerMenu></HamburguerMenu>
            </div>
            <style
  dangerouslySetInnerHTML={{
    __html:
      "\n\n  .header{\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  \n}\n"
  }}
/>

        </>
    )
}