// import "../style/Home.css"
import { Link } from 'react-router-dom';

function SideBar(){
    return(
    
          <div className="sidebar">


<div className="hsy">
  <div className="spot">
      <a href="#"><i className="fa-brands fa-spotify fa-2xl" style={{color: "rgb(4, 182, 4)"}}></i>
         <span className="spotify">Spotify</span>
      </a>
   
  </div>

  <div className="hs">
  <div>
      <Link to="/">
          <i className="fa-solid fa-house " style={{color: "#fcfcfd"}}></i>
         <span> Home</span>
      </Link>
  </div>
  <div>
      <Link to="/Search">
          <i className="fa-solid fa-search " style={{color: "#fcfcfd"}}></i>
          <span>Search</span>
      </Link>
  </div>

  </div>
 
  </div>

  
  <div className="ycb">
  <div className="library">
    <a href="#">
        <i className="fa-solid fa-book " style={{color:" #f9fafa"}}></i>  
        <span>Your Library</span>
        <span className="plus"><i className="fa-solid fa-plus" style={{color:"#b7b7b8"}}></i></span>
    </a>
</div>

<div className="scroll">
<div className="createplaylist">
  <div><small>Create your first playlist</small></div>
  <div><small> it's easy, we'll help you</small></div>
  <div>
  <button> Create playlist</button>
  </div>
</div>


<div className="createplaylist">
  <div><small>Let's find some podcasts to follow</small></div>
  <div><small>we will keep you updated on new episodes</small></div>
  <div>
  <button>Browse prodcasts</button>
  </div>
</div>
</div>


  <div className="legal">
    <div>
    <span>Legal</span>
    <span>Privacy Center</span>
    <span>Privacy Policiy</span>
    <span>Cookies</span>
    </div>
  
  <div>
    <span>About Ads</span>
    <span>Accessibiity</span>
    <span>Notice At Collection</span>
    
    </div>

    <div>
      <span>Your Privacy Choices</span>
    </div>

    <div>
      <span>Cookies</span>
    </div>
  </div>


  <div className='engdiv'>
    <button className="english">
      <span><i className="fa-solid fa-globe" style={{color: "#ffffff"}}></i></span>
       <span> English</span>
      </button>
  </div>

  </div>


  </div>


    );
}

export default SideBar;