
const Card = (props) => {
    console.log(props.user, props.role);
  return (
      <div className='card'>
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <h3>{props.role}</h3>
        <button>View Profile</button>
      </div>
    
  )
}

export default Card
