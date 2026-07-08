
const App = () => {
  function btnclicked(){
    console.log("button was clicked");
  }
  function mouseEnter(){
    console.log("mouse is entered");
  }

  function inputChange(elem){
      console.log(elem.target.value);
  }
  return (

    <div onMouseMove={function(elem){
      console.log(elem.clientX);
    }} className="App">
      <h1>Hey Guys, this is Srushti</h1>
      <input onChange={inputChange} type="text" placeholder="Enter your name"></input>
      <br></br>
      <button onClick={btnclicked} onMouseEnter={mouseEnter}>Click me</button>

      
     </div>
  )
}

export default App
