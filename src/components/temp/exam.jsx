import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export const Example=()=>{

    const toastHander=()=>{
        toast.success("successfully complete",{
            position:"top-center",
        })
    }
    return(
        <>
        <h1>hello</h1>
        <button onClick={toastHander}>cllick</button>
        <ToastContainer/>
        </>
    )
}