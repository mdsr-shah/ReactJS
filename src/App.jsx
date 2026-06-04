import "./App.css";
import ProductGroup from "./productGrp.jsx";
import Car from "./cars.jsx";

function Title(){
  let name = "React";
  return  (
  <> 
    <div>
      <p>2+2 = {2+2}</p>
      <p>Hello {name}!</p>
    </div>
  </>
  );
}

function Description(){
  return <h1>This is my first React Description </h1>;
}


function App() {
  return  (
  <>
    <h1>This is my heading</h1>
    {/* <Title/>
    <Description/> */}
    <ProductGroup/>
    <Car brand="Toyota" model="Camry"/> /*Destrcuting props*/
    <Car brand="Honda" model="Civic"/>
  </>
  );
}

export default App
