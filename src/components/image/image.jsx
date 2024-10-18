import { Image } from "react-bootstrap"


export const CustomImage=(props)=>{
    const {source=("https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="),width=(200),height}=props
    return(
        <>
        <img src={source} width={width} height={height}/>
        </>
    )
}

export const Images=(prop)=>{
    const {source=("https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="),width=(200),height}=prop
    return(
        <>
        {/* <img src={source} width={width} height={height} /> */}
        <Image src={source} width={width} height={height} roundedCircle />
        
        </>
    )

}