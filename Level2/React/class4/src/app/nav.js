export default function NavComponent(){
    return(
        <>
            <nav>
                <button>#</button>
                <button>#</button>
                <button>#</button>
                <button>#</button>
                <button>#</button>
            </nav>
            <style jsx>{`
                
                nav{
                    display: flex;
                    justify-content: space-between;

                    & > button{
                        background-color: #00000000;
                        padding: 0 1rem;
                        height: 100%;
                        margin: 0.8rem;
                        font-size: 1.1rem;
                        border: 0;
                    }
                }

            `}</style>
        </>
    )
}