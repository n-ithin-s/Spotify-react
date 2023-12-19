import Footer from '../components/Footer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import React, { useEffect, useRef, useState } from 'react';
import '../style/Song.css';


function Song(){

      function Playbutton(){
        document.getElementById("songplay").style.display="flex";
      
    }
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();
  
    function togglePlay() {
      
      setIsPlaying(!isPlaying);
      
   
    }
  useEffect(()=>{
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause()

      // .catch(error => {
      //   console.log(error);
      //   audioRef.current.pause();
      //   audio.currentTime = 0;
      //   setIsPlaying(false);
      // });
    }
  },[isPlaying])
 
    return(
      
        <div className='test'>
          <SideBar/>
         <Header/>
        <div className="song">
               
           
            <img className="dua" src="https://i.scdn.co/image/ab67616d00001e022172b607853fa89cefa2beb4"/>
            <span className="song-details">
                <div className="songdiv">Song</div>
                <h1 className="levi">Levitating</h1>
                <div style={{marginTop: "22px", display: "flex", alignItems: "center"}}><img className="lipa" src="https://64.media.tumblr.com/e463a1ced916c31788ab607926d88a55/tumblr_inline_p444t4n1gJ1urqydq_250.gif" />
                    <span >Dua Lipa . Future Nostalgia . 2020 . 3:23 . 863,015,061</span>
                
                </div>

            </span>
        </div>

            {/* <!--next--> */}

            <div className="song-footer">

                {/* <!--child starts--> */}

                <span className="button-icon">
                    
                <span className="play"> <button className="fa fa-play" onClick={Playbutton}></button></span>
                <span className="heart"><h3><i className="fa-regular fa-heart fa-2xl" style={{color:"#dbdbdc"}}></i> </h3></span>
                <span className="ellipsis"><i className="fa-solid fa-ellipsis fa-2xl" style={{color: "#e9eaec"}}></i></span>
                </span>

                {/* <!--next--> */}

                <div className="blue-log">
                    <div>Sign in to see lyrics and listen to the full track</div>
                    <div className="sign-log"> <a href="#">Sign Up</a>
                       <span> <button type="button">Log In</button></span>
                    </div>

                </div>
{/* 
                <!--next--> */}
                <span className="artist">
                    <img className="lipa2" src="https://64.media.tumblr.com/e463a1ced916c31788ab607926d88a55/tumblr_inline_p444t4n1gJ1urqydq_250.gif" />
                    <span className="art"><div>Artist</div><span>Dua Lipa</span></span>
                   

                </span>

                {/* <!--next--> */}

                
        <div className="spotify-playlists">
            <h2>Poppular Releases by Dua Lipa</h2>
    
            <div className="list">
              <div className="item">
                <img src="https://i.scdn.co/image/ab67616d0000b273bec629aed28e34c5e59380c6" />
                <div className="play">
                  <span className="fa fa-play"></span>
                </div>
                <h4>Today's Top Hits</h4>
                <p>Rema & Selena Gomez are on top of the...</p>
              </div>
    
              <div className="item">
                <img src="https://i.scdn.co/image/ab67616d0000b273a22a7b828934f83ed9901354" />
                <div className="play">
                  <span className="fa fa-play"></span>
                </div>
                <h4>RapCaviar</h4>
                <p>New Music from Lil Baby, Juice WRLD an...</p>
              </div>
    
              <div className="item">
                <img src="https://i.scdn.co/image/ab67706c0000da84249e4a65c503a5beab2a0c88" />
                <div className="play">
                  <span className="fa fa-play"></span>
                </div>
                <h4>All out 2010s</h4>
                <p>The biggest spmgs pf tje 2010s. Cover:...</p>
              </div>
    
              <div className="item">
                <img src="https://i.scdn.co/image/ab67706c0000da84105b96dd14812e10e21431d3" />
                <div className="play">
                  <span className="fa fa-play"></span>
                </div>
                <h4>Rock classNameics</h4>
                <p>Rock Legends & epic songs that continue t...</p>
              </div>
    
              <div className="item">
                <img src="https://i.scdn.co/image/ab67616d0000b273ab48c87fed41f2634c013a10" />
                <div className="play">
                  <span className="fa fa-play"></span>
                </div>
                <h4>Chill Hits</h4>
                <p>Kick back to the best new and recent chill...</p>
              </div>
    
              <div className="item">
                <img src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/03/17/22363a3f-997f-48c1-aeae-1b7dfab42fbc_11447408.jpg?itok=A97_0a77&v=1615972333" />
                <div className="play">
                  <span className="fa fa-play"></span>
                </div>
                <h4>Viva Latino</h4>
                <p>Today's top Latin hits elevando nuestra...</p>
              </div>
    
          
    
           
            </div>
          </div>

                
        <div className="spotify-playlists">
          <h2>Poppular Albums by Dua Lipa</h2>
  
          <div className="list">
            <div className="item">
              <img src="https://lastfm.freetls.fastly.net/i/u/500x500/e2d24c781e9143d52d5c016bcc8e0969.jpg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Today's Top Hits</h4>
              <p>Rema & Selena Gomez are on top of the...</p>
            </div>
  
            <div className="item">
              <img src="https://media.zenfs.com/en/video.instyle.time.com/c51fccb848e4ab21418c1813153a41f4" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>RapCaviar</h4>
              <p>New Music from Lil Baby, Juice WRLD an...</p>
            </div>
  
            <div className="item">
              <img src="https://images.genius.com/c367608d10675463cf0303e806f4e23a.800x800x1.png" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>All out 2010s</h4>
              <p>The biggest spmgs pf tje 2010s. Cover:...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e02f4af24a6a74254812742000d" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Rock classNameics</h4>
              <p>Rock Legends & epic songs that continue t...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e02ccdddb2e5349ea0608c3e016" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Chill Hits</h4>
              <p>Kick back to the best new and recent chill...</p>
            </div>
  
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e025d6741e869c0a1731141f487" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Viva Latino</h4>
              <p>Today's top Latin hits elevando nuestra...</p>
            </div>
  
        
  
         
          </div>
        </div>

        

            </div>


               
        <div className="songplay" id="songplay">
        <audio ref={audioRef} >
        <source src="Dua-Lipa---Levitating(musicdownload.cc).mp3" type="audio/mp3" />
      </audio>

        
            <img  className="duafooter" src="https://i.scdn.co/image/ab67616d00001e022172b607853fa89cefa2beb4"/>
            <div className="levitatingdua">
              <div><small>Levitating</small></div>
              <div><small>Dua Lipa</small></div>
            </div>
            <i className="fa-regular fa-heart" style={{color: "#f2f2f3"}}></i>

            <div className="playsong">
              <div className="playsongtop">
                <span><i className="fa-solid fa-shuffle fa-lg" style={{color: "#f7f7f8"}}></i></span>
               <span> <i className="fa-solid fa-backward fa-lg" style={{color: "#f7f7f8"}}></i></span>

               <span>  <button onClick={togglePlay}>
        <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} fa-xl`} style={{ color: '#030303' }}></i>
      </button></span>

               <span><i className="fa-solid fa-forward fa-lg" style={{color: "#fcfcfc"}}></i></span>
               <span><i className="fa-solid fa-repeat fa-lg" style={{color: "#f7f9fc"}}></i></span>
              </div>

              <div>
                <div className="progress-bar" >
                  <div className="progress-indicator"></div>
                </div>
              </div>

            </div>

            <div className="playsongright">
              <span><i className="fa-solid fa-play " style={{color: "#fcfcfd"}}></i></span>
              <span><i className="fa-solid fa-music " style={{color: "#ffffff"}}></i></span>
              <span><i className="fa-brands fa-connectdevelop " style={{color: "#fbfcfe"}}></i></span>
              <span><i className="fa-solid fa-volume-high " style={{color: "#ffffff"}}></i></span>
              <div className="progress-bar-small"></div>
             
             
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
    

      
 
        <Footer/>
      
    
    
      </div>
    
                
           
    
        
    )
}

export default Song;