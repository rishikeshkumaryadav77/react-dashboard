const Bootstrap = () =>{
  return (
    <>
    <div className="container-fluid p-5 bg-primary text-white text-center">
      <h1>My First Bootstrap Page</h1>
      <p>Resize this responsive page to see the effect!</p>
    </div>
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4">
          <h3>Column 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>
        <div className="col-sm-4">
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>
        <div className="col-sm-4">
          <h3>Column 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
          </p>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Bootstrap