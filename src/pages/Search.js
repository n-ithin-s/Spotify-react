import { useState } from "react";
import axios from 'axios';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../style/Search.css"
function Search(props){
    const [search,setSearch]=useState("");
    const [artists, setArtists] = useState([])

    const Searchbarfun = async (e) => {
        e.preventDefault()
        
            const { data } = await axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${props.token}`
                },
                params: {
                    q: search,
                    type: "artist"
                }
            });
    
            setArtists(data.artists.items);
        // } catch (error) {
        //     console.error("Error making Spotify API request:", error.response);
        //     // Add more specific error handling based on the error.response
        // }
    };
    return(
        <div className="test3">
        <SideBar/>
        <Header/>


        
        <div className="searchbar">
            {props.token?
            <form onSubmit={Searchbarfun}>
            <input type="text" placeholder="search" onChange={e=>setSearch(e.target.value)}></input>
            <span><button type="submit">Search</button></span>
            </form>
            : <h2>Please login</h2>
            }
        </div>
        
        
                 
        <div className="d-flex flex-wrap gap-4 p-3 ">
        {artists.map((val)=>(
            
         
    
       <div key={val.id}>
    <div className="card" style={{width:"16rem"}}>
        {val.images.length ? <img width={"100%"} src={val.images[0].url} alt=""/> : <div>No Image</div>}
        <div className="card-body">
          <h5 className="card-title">{val.name}</h5>
         </div>
         
    </div>
    </div>


 
        ))}
        </div> 
      



      

        </div>
    )
}
export default Search;