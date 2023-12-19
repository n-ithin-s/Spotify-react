
// import "../style/Home.css";
import { Link } from 'react-router-dom';

function Header(props){

  const logout = () => {
    props.setToken("")
    window.localStorage.removeItem("token")
}
    function Funbar(){
        document.getElementById('hide').style.display="block";
        document.getElementById("bar").style.display="none";
        document.getElementById("close").style.display="block";
      }
      function Funclose(){
        document.getElementById('hide').style.display="none";
        document.getElementById("close").style.display="none";
        document.getElementById("bar").style.display="block";
        
      }
      
    return(
        <>
        <div className="topbar">
          <div className="prev-next-buttons">
            <button type="button" className="fa fas fa-chevron-left"></button>
            <button type="button" className="fa fas fa-chevron-right"></button>
          </div>


  
          <div className="navbar">
            <ul>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li className="divider">|</li>
              <li>
                <Link to="/Signup">Sign Up</Link>
              </li>
            </ul>
           
            <Link to="/"><button  onClick={logout}>Logout</button> </Link>
          </div>
        </div>

         {/* <!--repeat--> */}
         <div className="topbarnew">


          <div id="hide">
        
  
          <div className="navbar">
           
            <ul>
              
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
           
              <li>
                <Link to="/Signup">Sign Up</Link>
              </li>
              
              <Link to="/" className="loginbtnlink" onClick={logout}> <button >Log Out</button></Link>
              
            </ul>
            
            
          </div>
          </div>

          <div className="barclose">
          
          <i className=" fa-solid fa-bars fa-lg  " style={{color: "#f1f2f4"}} id="bar" onClick={Funbar}></i>
          <i className="fa-solid fa-x  " style={{color: "#ffffff"}} id="close" onClick={Funclose}></i>
          </div>
       
        </div>
        </>
    )
}
export default Header;