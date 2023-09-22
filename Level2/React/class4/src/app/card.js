import { useState } from "react"
import { useEffect } from "react";
import { useRef } from "react";

export default function Card(user){

    // user.user[1]('eoo')
    const u = user.user[0]
    const uLogo = user.user[3]
    const uVideo = user.user[4]
    const uCreator = user.user[5]
    
    useEffect(() => {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    const [likes, setLikes] = useState(Number(u.likes))
    const [liked, setLiked] = useState(false)
    function likesUp(){
        if (!liked){
            event.srcElement.style.color = 'red'
            setLiked(true)
            setLikes(likes + 1)
            user.user[1](true, user.user[2])
        }else{
            event.srcElement.style.color = 'black'
            setLiked(false)
            setLikes(likes - 1)
            user.user[1](false, user.user[2])
        }
    }

    const [isPlaying, setPlaying] = useState(false)
    const videoRef = useRef()

    function videoStateUpdate(){
        if (!isPlaying){
            videoRef.current.play()
            setPlaying(true)
        }else{
            videoRef.current.pause()
            setPlaying(false)
        }
    }

    return (
        <>
        
            <div className="post">

                <div className="head">
                    <div className="info">
                        <img className="logo" src={ uLogo }></img>
                        <div>
                            <p className="name">{ u.nameAccount }</p>
                        </div>
                    </div>
                    <div className="option">
                        <p>{ u.timestamps } min</p>
                        <button>•••</button>
                    </div>
                </div>
                <p className="desc">
                    { `Creador: ${uCreator}` }
                    <a href={ u.linkFeed }>{ u.linkFeed }</a>
                </p>
                <div className="card-body">
                    <video onClick={videoStateUpdate} ref={videoRef} src={ uVideo } className="postIMG"></video>
                    {!isPlaying ? <span className="playSign" onClick={videoStateUpdate}>▶</span> : ''}
                </div>
                <div className="foot">
                    <nav>
                        <button id={user.user[2]} onClick={likesUp}>♥</button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#commentModal"><img style={{height: '1.5rem', width: '1.5rem'}} src="https://static.thenounproject.com/png/1026792-200.png"></img></button>
                        <button>#</button>
                        <button>#</button>
                    </nav>
                    <p>{likes} Me gusta</p>
                </div>
            </div>

            <div className="modal fade" id="commentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body">

                            <div className="post">
                                <div className="head">
                                    <div className="info">
                                        <img className="logo" src={ u.logoImg }></img>
                                        <div>
                                            <p className="name">{ u.nameAccount }</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="desc">
                                    { u.description }
                                    <a href={ u.linkFeed }>{ u.linkFeed }</a>
                                </p>
                                <div className="card-body">
                                    <img src={ u.imgFeed } className="postIMG"></img>
                                </div>
                                <div className="w-100 d-flex justify-content-start mt-3 ms-4">
                                    <img className="logo" src="https://depor.com/resizer/dhx7nd9Fz4kDHKmIm7_BjpbAKSc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DUONUMKYINCQ3GG6MJAXAOM6OQ.png"></img>
                                    <div>
                                        <p className="m-0">Yo</p>
                                        <p style={{fontSize: '0.8rem', color: 'grey'}}>Responde a { u.nameAccount }</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between border-0 pb-4">
                            <p style={{fontSize: '0.8rem', color: 'grey'}}>cualquiera puede responder</p>
                            <button type="button" className="btn btn-outline-secondary text-body-secondary">Publicar</button>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`

                .playSign{
                    display: flex;
                    position: absolute;
                    top: 25%;
                    color: #ffffffcc;
                    font-size: 10rem;
                    text-shadow: 5px 5px 10px #8b8b8b4f;
                }

                .logo{
                    height: 2.4rem;
                    width: 2.4rem;
                    margin-right: 1rem;
                    border-radius: 50%;
                }

                .post{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-top: solid 0px #dbdbdb;
                    padding-top: 1rem;
                    border-bottom: solid 1px #dbdbdb;
                    padding-bottom: 1rem;

                    & > .head{
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                        & > .info{
                                display: flex;
                                align-items: center;
                                margin: 0 10px;
                            & > 
                            & > div{
                                align-items: center;
                            } 
                        }
                        & > .option{
                            display: flex;
                            & > *{
                                margin: 0 5px;
                                display: flex;
                                align-items: center;
                            }
                            & > p{
                                display: flex;
                                font-size: 0.8rem;
                                color: #9d9d9d;
                                align-items: center;
                            }
                            & > button{
                                background: #00000000;
                                border: 0;
                            }
                        }
                    }
                    & > .desc{
                        width: 80%;
                        margin: 0;
                        & > a{
                            display: block;
                            text-decoration: 0;
                            margin-top: 5px;
                            font-size: 0.9rem;
                        }
                    }
                    & > .card-body{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 80%;
                        margin-top: 10px;
                        position: relative;
                        & > .postIMG{
                            width: 100%;
                            height: 30rem;
                            border-radius: 8px;
                            background-color: #cbcbcb;
                        }
                    }
                    & > .foot{
                        width: 80%;
                        margin-top: 1rem;
                        & > nav{
                            display: flex;
                            & > *{
                                margin-right: 1rem;
                            }
                            & > button{
                                font-size: 1.5rem;
                                padding: 4px 9px;
                                border: 0;
                                background-color: #00000000;
                            }
                        }
                        & > p{
                            color: #9d9d9d;
                            margin: 0.8rem 0 0 0
                        }
                    }

                }
                
                

            `}</style>

        </>
    )
}