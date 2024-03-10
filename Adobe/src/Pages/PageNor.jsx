import { useParams } from "react-router-dom"
export default function PageNot(){
    let a=useParams()
        
    return (<>
            <h1> Page Not Fund .............{a["*"]}</h1>
    </>)
}