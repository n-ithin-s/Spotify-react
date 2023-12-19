import "../style/Login.css";
import { Link } from 'react-router-dom';
function Login(props){

    function submitForm(e){
        e.preventDefault()
        window.location=props.url
    }
    

 
    return(
        <>
         <header>
        <div class="side">
            <Link to="/"><i className="fa-brands fa-spotify fa-2xl" style={{color: "rgb(4, 182, 4)"}}></i>
                <span className="spotify">Spotify</span>
             </Link>
        </div>
    </header>
    <section>
        <div className="main">
            <h1>Log in to Spotify</h1>
           <div className="connect">
              <button className="con-btn" id="g"><img src="https://wallpapercave.com/wp/wp2860517.jpg" alt="google"/><span>Continue with Google</span></button>
              <button className="con-btn" id="f"><img src="https://as1.ftcdn.net/v2/jpg/04/19/08/48/1000_F_419084895_QQMFVPfChIrMNMbNC9xpOzqGXOK02HgJ.jpg" alt="facebook"/><span>Continue with Facebook</span></button>
              <button className="con-btn" id="a"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Apple_Store_logo.svg/768px-Apple_Store_logo.svg.png?20230922160751" alt="apple"/><span>Continue with Apple</span></button>
              <button className="con-btn" id="g"><span>Continue with Phone Number</span></button>
            </div>
        <hr/>
        <div className="log-in">
            <form action="" onSubmit={submitForm}>
                <label for="">Email or username</label>
                <input type="text" placeholder="Email or username"/>
                <label for="">Password</label>
                <input type="text" placeholder="Password"/>
             <div className="switch">
                <input type="checkbox" id="switch" checked/>
                <label for="switch"></label>
                <span>Remember me</span>
             </div>
             <a href={props.url}><button type="submit">Log In</button></a>
             <a href="#">Forgot your password</a>
            </form>
        </div>
        
             <hr/>
             <div className="last">
                <span>Don't you have an account</span>
                <Link to="/Signup">Sign up for Spotify</Link>
            
           </div>
    </div>
   </section>
        </>
    );
}
export default Login;