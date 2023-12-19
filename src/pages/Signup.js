import "../style/Signup.css";
import { Link } from 'react-router-dom';
function Signup(){
    return(
        <>
     <div className="side">
        <Link to="/"><i className="fa-brands fa-spotify fa-2xl" style={{color: "rgb(4, 182, 4)"}}></i>
            <span className="spotify">Spotify</span>
         </Link>
    </div>

    {/* <!--next--> */}
    <div className="container">
        <div className="box">
            <h1>Sign up to start</h1>
            <h1>listening</h1>
            <div>Email Address</div>
            <input type="text" placeholder="name@domain.com"/>
            <h5 ><a className="phone" href="#" >use phone number instead.</a></h5>
            <button className="next">Next</button>
            <div className="linediv">
                <span className="line"></span>
                <span style={{marginInline: "5px"}}> or</span>
                <span className="line"></span>
            </div>
            <button className="google"><img src="https://cdn-icons-png.flaticon.com/128/300/300221.png"/> Sign up with Google</button>
            <button className="facebook"><img src="https://as1.ftcdn.net/v2/jpg/04/19/08/48/1000_F_419084895_QQMFVPfChIrMNMbNC9xpOzqGXOK02HgJ.jpg"/> Sign up with Facebook</button>
            <div className="linediv"><span className="line2"></span></div>
            <h4 className="already">Already have an account? <Link to="/" className="login">Log in here</Link></h4>
            <div className="site"><small>This site is protected by reCAPTCHA and the Google</small>
                <small><a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</small>
            
                </div>
        </div>
    </div>
        </>
    )
}
export default Signup;