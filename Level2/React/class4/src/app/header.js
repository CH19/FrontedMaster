import NavComponent from './nav'

export default function HeaderComponent(){
    return(
        <>
        
            <div>
                <img src='https://seeklogo.com/images/T/threads-logo-E9BA734BF6-seeklogo.com.png?v=638252100960000000'></img>
                <NavComponent />
                <button>#</button>
            </div>

            <style jsx>{`
                
                div{
                    display: flex;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    height: 3rem;

                    & > img{
                        height: 70%;
                        margin-left: 0.8rem;

                    }
                    & > button{
                        border: 0;
                        background-color: #00000000;
                        height: 70%;
                        padding: 0 0.8rem;
                        margin-right: 0.8rem;
                    }
                }

                `}</style>

        </>
    )
}
