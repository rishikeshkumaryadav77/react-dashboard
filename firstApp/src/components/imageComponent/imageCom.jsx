//props
const ImageCompunt = (props) =>{
  return (
    <>
    <h1>{props.name}</h1>
    <h1>{props.age}</h1>
    <img src={props.src} alt="imag" width={100} height={100}/>
    
    </>
  )
}

export default ImageCompunt