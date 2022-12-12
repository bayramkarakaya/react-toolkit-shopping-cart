import Money from "./components/Money";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import User from "./components/User";


function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 0">
            <User/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 p-0">
            <Money/>
          </div>
        </div>
        <div className="row mb-5">
         <ProductList/>
        </div>
        <div className="row mb-5">
         <ShoppingCart/>
        </div>
      </div>
       
    </div>
  );
}

export default App;
