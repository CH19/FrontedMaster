import Error from "./Error";
import Likes from "./likes";
var TotalLikes = 0;
export default function Card({user}){
   
  
  if(!user){
    return (
      <>
    <Error mensaje={'Error usuario sin cargar'}></Error>

      </>
      )
  }
  return (
        // se trabajara en el componente card para mejorar su estilo esto solo es una prueba prototipo 
        <>
   
    <div onClick={()=> handleClick()} className="card-container" >
    <div className="card-header">
    <div className="cad-information">
      <figure className="card-porfile-photo"><img src={user.imgFeed} alt=""></img></figure>
      <div  className="card-childs">
      <span className="card-username">{user.nameAccount}</span>
      <a href={user.li} className="card-link">{user.linkFeed}</a>
      </div>
      </div>
      <div className="card-timer"><span>{user.timestamp}</span></div>
    </div>
    <div className="card-body">
      <span>{user.description}</span>
      <figure className="card-photo"><img src={user.imgFeed} alt=""></img></figure>
    </div>
    <div className="card-footer"><figure><img height="32" width="32" src="https://cdn.simpleicons.org/undertale/black" /><Likes like={user.likes}></Likes></figure>
      <div>#</div>
      <div>#</div>
      <div>#</div>
    </div>
    </div>

        </>
    )
}
