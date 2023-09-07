import './cardsStyles.css'

export default function Cards({user}){
    return (
        // se trabajara en el componente card para mejorar su estilo esto solo es una prueba prototipo 
        <>
          {/* <div className="card my-2" style={{ width: "20rem", height: "20rem" }}>
  <img src="#" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div> */}
{/* // keys: nameAccount, linkFeed, description, imgFeed, likes,
//  timestamp */}
    <div className="card-container">
    <div className="card-header">
    <div className="cad-information">
      <figure className="card-porfile-photo"><img src={user.imgFeed} alt=""></img></figure>
      <div className="card-childs">
      <span className="card-username">{user.nameAccount}</span>
      <a href={user.linkFeed} className="card-link">{user.linkFeed}</a>
      </div>
      </div>
      <div className="card-timer"><span>{user.timestamp}</span></div>
    </div>
    <div className="card-body">
      <span>{user.description}</span>
      <figure className="card-photo"><img src={user.imgFeed} alt=""></img></figure>
    </div>
    <div className="card-footer"><figure><img height="32" width="32" src="https://cdn.simpleicons.org/undertale/black" />{user.likes} likes</figure>
      <div>#</div>
      <div>#</div>
      <div>#</div>
    </div>
    </div>

        </>
    )
}