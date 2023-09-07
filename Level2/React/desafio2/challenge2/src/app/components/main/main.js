import 'bootstrap/dist/css/bootstrap.css';
import Crear from './crear';
import Cards from './cards';

// requerimiento 1 
// keys: nameAccount, linkFeed, description, imgFeed, likes,
//  timestamp. Colocar valores a esos keys que puede tomar como ejemplo de algunas publicaciones de la aplicacion Threads de Meta.

// para el objeto users se implementara con el api de github para practicar 
const users = ['AvilaPro', 'CH19'];
// para la creacion de los dos usuarios no se va a utilizar en lugar de crear dos variables la creacion y recorrido de dos usarios en la app de github
// esto se hara en cuestion ya que se plantea el desafio como el inicio de una aplicacion que siga el principio "DRY" (Don't Repeat Yourself) 
// // y en el planteamiento de solucione sy creaciones de usario sea mas facil y mantinible cambiando solo los datos de la api 
const usariosThreads = new Map();
users.forEach((user, index)=>{
    fetch(`https://api.github.com/users/${user}`)
    .then(response => {if(response.ok) return response.json()})
    .then(json =>{ usariosThreads.set(json.login, {
        nameAccount: json.login,
        linkFeed: json.html_url,
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'.repeat(Math.floor(Math.random() * 3)),
        imgFeed: json.avatar_url, 
        likes: Math.floor(Math.random() * 1000).toString(),
        timestamp: json.updated_at,
    })
}).catch(error=> console.error(error));

})

const estaLogeado = true;

export default function Main(){
    // se pone solo este condicional porque si la condicion es falsa ya retornara lo que esta entre corchetes por lo tanto no es necesario anidar un else 
        if(!estaLogeado){
            return <h2 className='login-error'>Necesitas registrarte</h2>
        }
        return (
            <>
            <div className='main my-5 my-5'>
                <Crear></Crear>
                <hr/>
                <Cards user={usariosThreads.get(users[0])}></Cards>
                {/* <hr></hr> */}
                <Cards user={usariosThreads.get(users[1])}></Cards>
    
    
            </div>
    
            <style
    
    />
    
            </>
        )
    
}