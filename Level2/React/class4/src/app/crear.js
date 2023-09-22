import { useEffect, useRef, useState } from "react";

export default function CrearComponent(q){

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const postInput = useRef('')
    const [inContent, setInContent] = useState(0)
    // console.log(postInput.current.value == undefined)
    
    function updateInContent(){
        if (postInput.current.value.length == undefined){
            setInContent(0)
        }else{
            setInContent(postInput.current.value.length)
            // console.log(inContent)
        }
    }

    function queryChange(){
        q.setQ(inContent)
    }

    return(
        <>

            <div>
                <img src="https://depor.com/resizer/dhx7nd9Fz4kDHKmIm7_BjpbAKSc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DUONUMKYINCQ3GG6MJAXAOM6OQ.png">

                </img>
                <input type="text" placeholder="Inicia un hilo..." data-bs-toggle="modal" data-bs-target="#exampleModal"></input>
                <button className="fs-6 fw-5">Publicar</button>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog border-0">
                    <div className="modal-content border-0">
                        <div className="modal-body border-0">
                            <img className="logo" src="https://depor.com/resizer/dhx7nd9Fz4kDHKmIm7_BjpbAKSc=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DUONUMKYINCQ3GG6MJAXAOM6OQ.png"></img>
                            <div className="d-block ms-3 border-0">
                                <p className="m-0">Yo</p>
                                <input className="p-0" type="text" placeholder="Inicia un hilo..." ref={postInput} onChange={updateInContent}></input>
                            </div>
                            </div>
                        <div className="modal-footer px-4 py-1 border-0">
                            <p style={{fontSize: '0.8rem', color: 'grey'}}>Cualquiera puede responder</p>
                            { inContent > 0 ?
                            <button type="button" onClick={queryChange} className="btn btn-primary" style={{fontSize: '1rem', fontWeight: '700', color: 'grey'}}>Publicar</button> :
                            <button type="button" onClick={queryChange} className="btn btn-primary" style={{fontSize: '1rem', fontWeight: '500', color: 'lightgrey'}}>Publicar</button>}

                            
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                div{
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    border-bottom: solid 1px #dbdbdb;
                    padding-bottom: 1rem;

                    & > img{
                        background-color: black;
                        height: 2.6rem;
                        width: 2.6rem;
                        border-radius: 50%;
                        background-size:
                    }

                    & > input{
                        width: 70%;
                        border: 0;
                        padding: 0 5px
                    }
                    & > button{
                        border-radius: 15px;
                        padding: 0 18px;
                        height: 2.4rem;
                        background-color: white;
                        border: solid 1px #9d9d9d;
                        color: #9d9d9d;
                        font-weight: 600;
                    }
                }
            `}</style>
        </>
    )
}