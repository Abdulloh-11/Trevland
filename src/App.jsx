import Cards from "./assets/components/Cards/Cards"
import Add from "./assets/components/Add/Add";
import Login from "./assets/components/Login/Login";
import Blog from "./assets/components/Blog/Blog";
import Footer from "./assets/components/Footer/Footer";


function App() {

 

  return (
    <>
      <div className="row ">
        
          <Add/>
          <Cards/>
          <Login/>
          <Blog/>
          <Footer/>
        
      </div>
    </>
  )
}

export default App; 
