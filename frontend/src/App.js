import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import SingleProduct from "./Pages/SingleProduct";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Commande from "./Pages/Commande";
import Profile from "./Pages/profile";
import Historique from "./Pages/Historique";
import FirstPage from "./Pages/FirstPage";
import userList from "./Pages/Admin/userList";
import UserEditScreen from "./Pages/Admin/userEdit";
import Register from "./Pages/Register";
import productList from "./Pages/Admin/adminProducts";
import productEditScreen from "./Pages/Admin/productEditAdmin";
import Fiches from "./Pages/Fiches";
import SingleFiche from "./Pages/SingleFiche";
import Cart from "./Pages/Cart";
import OrderScreen from "./Pages/orderScreen";
import orderList from "./Pages/Admin/adminOrderList";

function App() {
  return (
    <Router>
      <Header />
      <main className="pb-5">
        <Route path="/" component={Home} exact />
        <Route path="/Commande" component={Commande} />
        <Route path="/Register" component={Register} />
        <Route path="/Fiches" component={Fiches} />

        <Route path="/FirstPage" component={FirstPage} exact />
        <Route path="/History" component={Historique} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin/userlist" component={userList} />
        <Route path="/admin/productlist" component={productList} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/product/:id/edit" component={productEditScreen} />
        <Route path="/admin/orderlist" component={orderList} />
        <Route path="/SingleFiche/:id" component={SingleFiche} />
        <Route path="/About" component={About} />
        <Route path="/Products" component={Products} />
        <Route path="/Products/:keyword" component={Products} exact />
        <Route path="/Gammes/:keyword" component={Products} exact />
        <Route path="/Product/:id" component={SingleProduct} />
        <Route path="/Contact" component={Contact} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/cart" component={Cart} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/order/:id" component={OrderScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
