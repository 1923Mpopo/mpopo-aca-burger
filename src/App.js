import './App.css';

function showOrderedFood() {
  return (
    <>
  <h1>Selected ingredients:</h1>
  <h1>Bread</h1>
  </>
  )
}

function App() {
  
  return (
    <div className="App">
      <div><header className="App-header">Welcome To Aca Burger</header></div>
       <br></br>
        <button id="btn1"><b>Bread</b></button>
        <br></br>
        <button id="btn2"><b>Tomato</b></button>
        <br></br>
        <button id="btn3"><b>Meat</b></button>
        <br></br>
        <button id="btn4"><b>Lattice</b></button>
        <br></br>
        <button id="btn5"><b>Bread</b></button>
        <br></br>
        <button id="btn6"><b>Order</b></button> 
        <button id="btn7"><b>Cancel</b></button>
        <br></br>
        <div className="footer">About us      | Home                | Terms & Conditions</div>
    </div>
  );
  
}

export default App;