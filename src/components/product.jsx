import '../styles/product.css';

function Product({title, price, description, features}){
// if (price > 3000){

let style ={ backgroundColor:"green"}
// let style ={ backgroundColor: price>3000?"red":"green"}

  return (
    <div className="Product" style={style}>
      <h1>{title}</h1>
      <h3>Price:{price}</h3>
      {price > 3000 ? <p>5% Discount</p> : null}
      <h5>{description}</h5>
      <p>{features}</p>
    </div>
  );
// }
// else {
//   return (
//      <div className="Product">
//       <h1>{title}</h1>
//       <h3>Price:{price}</h3>
//       <h5>{description}</h5>
//       <p>{features}</p>
//     </div>
//       );
// }
}

export default Product;