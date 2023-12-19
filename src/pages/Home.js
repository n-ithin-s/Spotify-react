import { Link } from 'react-router-dom';
import "../style/Home.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
function Home(props){
    
    return(
      
   

          <div className='test2'>
              
         <div class="main-container">
          <SideBar />
         <Header token={props.token} setToken={props.setToken}/>
           
        
{/* 
      <!--next content--> */}


        <div className="spotify-playlists">
          <h2>Spotify Playlists</h2>
  
          <div className="list">
            <div className="item">
              <Link to="/Song"> <img src="https://i.scdn.co/image/ab67616d0000b273da5d5aeeabacacc1263c0f4b" /></Link>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Today's Top Hits</h4>
              <p>Rema & Selena Gomez are on top of the...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d0000b273b5a0ee94e2741374ce5c71a2" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>RapCaviar</h4>
              <p>New Music from Lil Baby, Juice WRLD an...</p>
            </div>
  
            <div className="item">
              <img src="https://i.discogs.com/oYPMM4J-R7iARVP2vrNNlSA_anjiygBZkhHbUr-F3lo/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNTAx/ODE4LTE1MjU3Mjc5/ODMtMzcyNy5qcGVn.jpeg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>All out 2010s</h4>
              <p>The biggest spmgs pf tje 2010s. Cover:...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d0000b2733d2fd46e2a968652b486d7ae" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Rock classNameics</h4>
              <p>Rock Legends & epic songs that continue t...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d0000b273b627441824c5d0748c8cb077" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Chill Hits</h4>
              <p>Kick back to the best new and recent chill...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Viva Latino</h4>
              <p>Today's top Latin hits elevando nuestra...</p>
            </div>

          </div>
        </div>
  
        <div className="spotify-playlists">
          <h2>Focus</h2>
          <div className="list">
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e02d969ad6fcaca272d9dbc44ee" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Peaceful Piano</h4>
              <p>Relax and indulge with beautiful piano pieces</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d0000b273bb0294951067dd0a1840b295" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Deep Focus</h4>
              <p>Keep calm and focus with ambient and pos...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e025d9126f72b4a06c9b9abe2e5" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Instrumental Study</h4>
              <p>Focus with soft study music in the...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d0000b273b84d1fd47e2a42778df2505a" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>chill lofi study beats</h4>
              <p>The perfect study beats, twenty four...</p>
            </div>
  
            <div className="item">
              <img src="https://pbs.twimg.com/media/Ezj3XHyXoAECIXu.jpg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Coding Mode</h4>
              <p>Dedicated to all the programmers out there.</p>
            </div>
            
            <div className="item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Billie_Eilish_Spotify_2_December_2019.jpg/456px-Billie_Eilish_Spotify_2_December_2019.jpg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Focus Flow</h4>
              <p>Uptempo instrumental hip hop beats.</p>
            </div>
  

        
          </div>
        </div>
  
        <div className="spotify-playlists">
          <h2>Mood</h2>
          <div className="list">
            <div className="item">
              <img src="https://i.scdn.co/image/ab67706c0000da848868236736598bbddddf3751" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Mood Booster</h4>
              <p>Get happy with today's dose of feel-good...</p>
            </div>
  
            <div className="item">
              <img src="https://upload.wikimedia.org/wikipedia/en/c/c2/BobMarley-Legend.jpg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Feelin' Good</h4>
              <p>Feel good with this positively timeless...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab676161000051740c8eb928813cd06614c0710d" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Dark & Stormy</h4>
              <p>Beautifully dark, dramatic tracks.</p>
            </div>
  
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUo9zwrBGI3-PyfJe84mLTcKrap-1YmPZew&usqp=CAU" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Feel Good Piano</h4>
              <p>Happy vibes for an upbeat morning.</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67706c0000da84105b96dd14812e10e21431d3" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Feelin' Myself</h4>
              <p>The hip-hop playlist that's a whole mood...</p>
            </div>
  
            <div className="item">
              <img src="https://pbs.twimg.com/media/EQ6eLcdXUAAUZGU.jpg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Chill Tracks</h4>
              <p>Softer kinda dance</p>
            </div>
  
         
          </div>

          
  
      </div>

      
      <div className="preview">
          <div className="text">
            <h6>Preview of Spotify</h6>
            <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
          </div>
          <div className="button">
            <button type="button">Sign up free</button>
          </div>
        </div>

      {/* <!--sidebardown--> */}
      <div className="side-bar-down">
        <div>
          <i className="fa-solid fa-house fa-lg" style={{color: "#ffffff"}}></i>
          <div><small>Home</small></div>
        </div>
        <div>
          <i className="fa-solid fa-search fa-lg" style={{color: "#ffffff"}}></i>
          <div><small>Search</small></div>
        </div>
        <div>
          <i className="fa-solid fa-book fa-lg" style={{color: "#ffffff"}}></i>
          <div><small>Library</small></div>
        </div>
        <div>
          <i className="fa-brands fa-spotify fa-lg" style={{color: "#ffffff"}}></i>
          <div><small>Spotify</small></div>
        </div>

      </div>
      <Footer />
     
      </div>
     
      </div>

      
    
    )
}
export default Home;