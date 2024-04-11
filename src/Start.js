import Nav from "./Components/Header component/Nav";
function Start() {
    const sayme=()=>{
        console.log("i am playing");
        alert('you are not serious')
    }
    return (
      <>
        <Nav />
          <button className='btn btn-primary m-3' onClick={sayme}>Click me</button>
          <h1 className="text-info">Nonsoglobal is coding</h1>
      
      </>
    );
  }
  
  export default Start;