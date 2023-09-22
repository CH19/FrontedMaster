import CrearComponent from "./crear"
import Card from "./card"
import { useEffect, useState } from "react"
import { useImmer } from "use-immer"

// requerimiento 5
let estaLogueado = true


export default function MainComponent(){

    //Esto no tenía sentido, no se por qué lo hice al igual que muchas otras cosas
    let [users, updateUsers] = useImmer([
        {
            nameAccount: 'Julian',
            linkFeed: 'https://google.com',
            description: 'Una foto mía hola una foto mía',
            imgFeed: 'https://t2.ea.ltmcdn.com/es/posts/1/6/2/10_curiosidades_del_golden_retriever_21261_orig.jpg',
            likes: '752',
            timestamps: '12',
            logoImg: 'https://www.eltiempo.com/files/image_640_428/uploads/2023/03/01/63ffe059355c3.jpeg'
        },
        {
            nameAccount: 'Nasa',
            linkFeed: 'https://www.semana.com/tecnologia/articulo/se-acerca-el-fin-del-mundo-la-nasa-se-preocupa-por-una-profecia-de-nostradamus/202314/',
            description: 'Se viene el fin del mundo gente preparense',
            imgFeed: 'https://caracol.com.co/resizer/i8jj-CqVdgPJVTWqSF3I814Itws=/650x488/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/N4LZFKTHUJGJRMV5UOSFB7Q3DQ.jpg',
            likes: '80',
            timestamps: '24',
            logoImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/2048px-NASA_Wormball_logo.svg.png'
        },
        {
            nameAccount: 'Carlos',
            linkFeed: 'https://google.com',
            description: 'Soy yo',
            imgFeed: 'https://i.blogs.es/756ce7/ideas-para-hacer-retratos--diferentes-02/450_1000.jpg',
            likes: '5',
            timestamps: '25',
            logoImg: 'https://i.blogs.es/756ce7/ideas-para-hacer-retratos--diferentes-02/450_1000.jpg'
        },
        {
            nameAccount: 'Pablo',
            linkFeed: 'https://google.com',
            description: 'tengo hambre',
            imgFeed: 'https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-1.jpg',
            likes: '2',
            timestamps: '28',
            logoImg: 'https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-1.jpg'
        },

        {
            nameAccount: 'Miguel',
            linkFeed: 'https://google.com',
            description: 'Me llamo miguel',
            imgFeed: 'https://previews.123rf.com/images/gstockstudio/gstockstudio1606/gstockstudio160600349/58716026-joven-apuesto-hombre-feliz-en-camisa-y-corbata-haciendo-gestos-y-mirando-a-la-c%C3%A1mara-mientras-est%C3%A1.jpg',
            likes: '999',
            timestamps: '35',
            logoImg: 'https://previews.123rf.com/images/gstockstudio/gstockstudio1606/gstockstudio160600349/58716026-joven-apuesto-hombre-feliz-en-camisa-y-corbata-haciendo-gestos-y-mirando-a-la-c%C3%A1mara-mientras-est%C3%A1.jpg'
        },
        {
            nameAccount: 'Gato',
            linkFeed: 'https://google.com',
            description: 'Soy un gato',
            imgFeed: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg',
            likes: '501',
            timestamps: '41',
            logoImg: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg'
        },
        {
            nameAccount: 'Yo',
            linkFeed: 'https://google.com',
            description: 'Estoy triste',
            imgFeed: 'https://pbs.twimg.com/profile_images/2637104287/17232c5f96f5f52c620f35256e174507_400x400.jpeg',
            likes: '4',
            timestamps: '50',
            logoImg: 'https://pbs.twimg.com/profile_images/2637104287/17232c5f96f5f52c620f35256e174507_400x400.jpeg'
        },
    ])

    const [likes, setLikes] = useState(0)

    const likeChange = (isLikeUp, userID) => {
        console.log(isLikeUp, userID)
        if (isLikeUp){
            setLikes(likes + 1)
            
        }else{
            setLikes(likes - 1 )
            
        }
    }

    const [userLogos, updateUserLogos] = useState([])
    let logos = []
    const [query, setQuery] = useState('programming')

    const [userVideos, updateUserVideos] = useState([])
    let videos = []

    const [creators, updateCreators] = useState([])
    let creatorsArray = []


    useEffect(function(){

        fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    
                headers:{ Authorization: '6dgCzRLdjOyZNcjhBEfy2ae8eL7eQAVXhTkmFMlY5RPcpRJmED5rvIUz' }
    
            }).then(function(response){

                return response.json()

            }).then(function(json){
                let i
                for (i = 0; i < users.length; i++){
                    logos.push(json.photos[i].src.medium)
                }
                updateUserLogos(logos)
            }).catch(function(error){
                if (error){
                    alert('Hubo un error en la petición')
                }
            })

        fetch(`https://api.pexels.com/videos/search?query=${query}`, {
        
                headers:{ Authorization: '6dgCzRLdjOyZNcjhBEfy2ae8eL7eQAVXhTkmFMlY5RPcpRJmED5rvIUz' }
        
            }).then(function(response){
    
                return response.json()
    
            }).then(function(json){
                let i
                for (i = 0; i < users.length; i++){
                videos.push(json.videos[i].video_files[1].link)
                }
                updateUserVideos(videos)
                for (i = 0; i < users.length; i++){
                creatorsArray.push(json.videos[i].user.name)
            }
            updateCreators(creatorsArray)

            }).catch(function(error){
                if (error){
                    alert('Hubo un error en la petición')
                }
            })
    }, [query])

    console.log(creators)


    return(
        <>
            <main>
                <section>
                    <CrearComponent setQ={setQuery} />
                    
                    {estaLogueado? <Card user={[users[0], likeChange, 0, userLogos[0], userVideos[0], creators[0]]} /> : ''}
                    
                    <Card user={[users[1], likeChange, 1, userLogos[1], userVideos[1], creators[1]]} />
                    <Card user={[users[2], likeChange, 2, userLogos[2], userVideos[2], creators[2]]} />
                    <Card user={[users[3], likeChange, 3, userLogos[3], userVideos[3], creators[3]]} />
                    <Card user={[users[4], likeChange, 4, userLogos[4], userVideos[4], creators[4]]} />
                    <Card user={[users[5], likeChange, 5, userLogos[5], userVideos[5], creators[5]]} />
                    <Card user={[users[6], likeChange, 6, userLogos[6], userVideos[6], creators[6]]} />


                    <div className="parati">{likes} ♥</div>
                </section>

            </main>

            <style jsx>{`
                main{
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    margin: 1rem 0;

                    & > section{
                        position: relative;
                        width: 50%;
                    }

                }
                .parati{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: sticky;
                    bottom: 5rem;
                    box-shadow: 5px 5px 15px -5px;
                    padding: 1rem;
                    width: 6.5rem;
                    background-color: white;
                    border-radius: 3rem;
                }
            `}</style>

        </>
    )
}