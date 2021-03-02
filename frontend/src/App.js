import Header from './Components/Header'
import Footer from './Components/Footer'
import {BrowserRouter as Router,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import SingleProduct from './Pages/SingleProduct'
import Contact from './Pages/Contact'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Commande from './Pages/Commande'
import Profile from './Pages/profile'
import Historique from './Pages/Historique'
import FirstPage from './Pages/FirstPage'
import userList from './Pages/userList'
import UserEditScreen from './Pages/userEdit'
import Register from './Pages/Register'
import productList from './Pages/adminProducts'


function App() {
  return (
    <Router >
      <Header/>
      <main className='pb-5'>
       <Route path='/' component={Home} exact/>
       <Route path='/Commande' component={Commande}/>
              <Route path='/Register' component={Register}/>

       <Route path='/FirstPage' component={FirstPage}/>
       <Route path='/History' component={Historique}/>
       <Route path='/profile' component={Profile}/>
       <Route path='/admin/userlist' component={userList}/>
        <Route path='/admin/productlist' component={productList}/>
       <Route path='/admin/user/:id/edit' component={UserEditScreen} />
       <Route path='/About' component={About} />
       <Route path='/Products' component={Products} />
       <Route path='/Product/:id' component={SingleProduct} />
       <Route path='/Contact' component={Contact} />
       <Route path='/SignIn' component={SignIn} />
       <Route path='/SignUp' component={SignUp} />


        
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
