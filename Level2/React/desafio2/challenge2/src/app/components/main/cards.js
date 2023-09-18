// import Card from '@/app/components/main/card';
// const users = ['AvilaPro', 'CH19'];
// // para la creacion de los dos usuarios no se va a utilizar en lugar de crear dos variables la creacion y recorrido de dos usarios en la app de github
// // esto se hara en cuestion ya que se plantea el desafio como el inicio de una aplicacion que siga el principio "DRY" (Don't Repeat Yourself) 
// // // y en el planteamiento de solucione sy creaciones de usario sea mas facil y mantinible cambiando solo los datos de la api 
// const usariosThreads = new Map();
// let arr1;
// const arr = users.forEach((user, index)=>{
//     fetch(`https://api.github.com/users/${user}`)
//     .then(response => {if(response.ok) return response.json()})
//     .then(json => usariosThreads.set(json.login, {
//         nameAccount: json.login,
//         linkFeed: json.html_url,
//         description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'.repeat(Math.floor(Math.random() * 3)),
//         imgFeed: json.avatar_url, 
//         likes: Math.floor(Math.random() * 1000).toString(),
//         timestamp: json.updated_at,
//     }))
//     return usariosThreads
//     // .catch(error=> console.error(error));
// }).then(map => arr1 = Array.from(map.values).map(data => <Card user={data}></Card>))
// window.addEventListener('load',()=>{
//     console.log(arr1);
// })

// export default function Cards(){
//     return (
//         <div>
//             {arr1}
//         </div>
//     )
// }