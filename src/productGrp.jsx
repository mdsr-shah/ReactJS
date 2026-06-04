import Product from "./product";

function ProductGroup(){
  let options = ["Feature 1", "Feature 2", "Feature 3"];
return (
  <>    
    <Product title="Product 1" price={2000} description="This is the first product" features={options[0]}/>
    <Product title="Product 2" price={3000} description="This is the second product" features={options[1]}/>
    <Product title="Product 3" price={4000} description="This is the third product" features={options[2]}/>
  </>
);

}

export default ProductGroup;