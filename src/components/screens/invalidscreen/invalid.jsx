import { useNavigate } from "react-router-dom"










const Invalid_screen=()=>{
    const navigations=useNavigate()
    const mainPage=()=>{
            navigations("/")
    }
    return(
        <>
        <center>
        <h1>oops!</h1>
            <h6>go to main page</h6>
            <button onClick={mainPage}>main page</button>
        </center>
        </>
    )
}
export default Invalid_screen