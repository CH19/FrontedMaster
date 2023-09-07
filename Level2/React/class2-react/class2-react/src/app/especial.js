const especial = ({condicion, liked})=>{
   if(liked){
    let vida = liked
    if(condicion){
     return (
         <>
         <h1> esta broma funciona cundo es</h1>
         <button>enviar</button>
         <h3>{liked ? 'Le dio like' : 'no le dio like'}</h3>
         </>
     )
    }else{
     return (
         <>
         <h2>dio false  </h2>
         <span>intentalo otra vez</span>
         </>
     )
    }
 
   }
}
export default especial