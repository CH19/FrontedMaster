import { useState } from "react"

export default function Likes({like}){
    const [likee, setLikes] = useState(like);
    const changeColor = ()=>{
     const newLikes = {...likee};
    }
    const aumentarLikes = ()=>{
        if(String(likee).localeCompare(like) == 0){
            return Number(likee) + 1;
        }else if(String(likee).localeCompare(like) == 1){
            return Number(likee) - 1
        }
    }

    return (
        <>
        <button onClick={()=>{setLikes(aumentarLikes());}} className={ `${likee > like ? 'bg-danger': ''}`}> likes {likee}</button>
        </>
    )
}