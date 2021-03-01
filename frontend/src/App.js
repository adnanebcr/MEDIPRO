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

function App() {
  return (
    <Router >
      <Header/>
      <main className='py-2'>
       <Route path='/' component={Home} exact/>
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
