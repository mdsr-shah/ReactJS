
import "./styles/App.css";
// import ProductGroup from "./components/productGrp.jsx";
// import Car from "./components/cars.jsx";
// import Button from "./components/Button.jsx";
// import Form from "./components/Form.jsx";
// import Counter from "./components/Counter.jsx";
// import LikeButton from "./components/LikeButton.jsx";
// import TodoList from "./components/TodoList.jsx";
//  import CommentForm from "./components/CommentForm.jsx";
// import CounterEffect from "./components/CounterEffect.jsx";
// import SearchBox from "./weatherApi/SearchBox.jsx";
// import InfoBox from "./weatherApi/InfoBox.jsx";
// import WeatherApp from "./weatherApi/WeatherApp.jsx";
import {Counter,Login} from "./components/Hooks.jsx";


// function Title(){
//   let name = "React";
//   return  (
//   <> 
//     <div>
//       <p>2+2 = {2+2}</p>
//       <p>Hello {name}!</p>
//     </div>
//   </>
//   );
// }

// function Description(){
//   return <h1>This is my first React Description </h1>;
// }


function App() {
  return  (
  <>
    {/* <h1>This is my heading</h1> */}
    {/* <Title/>
    <Description/> */}
   { /* <ProductGroup/>
    <Car brand="Toyota" model="Camry"/> Destrcuting props
    <Car brand="Honda" model="Civic"/> */ }

    {/* <Button/> */}
    {/* <Form/> */}

    {/* <Counter/> */}

    {/* <LikeButton/> */}

    {/* <TodoList/> */}

    {/* <Form/> */}

    {/* <CommentForm /> */}

    {/* <CounterEffect/> */}

    {/* <SearchBox/>
    <InfoBox/> */}

      {/* <WeatherApp/> */}

      <Counter/>
      <Login/>
  </>
  );
}

export default App
