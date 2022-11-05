import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from "react";

function App() {
  const [movie,setMovie]=useState([]);
    
  const movieapp=()=>{
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=e2986499").then((response)=>{
      // console.log(response)
      setMovie(response.json())
    })
  }

  const handletext=()=>{

  } 


  return (
    <div className="App">
     <nav className='nav'>
      <div>
      <span>
      <h2 className='movie'>Movie</h2>
      </span>
      </div>
     <div>
      <span>
      <input type="text" className='text' onChange={handletext}/>
    
      </span>
<span>
      <button className='search'>Search</button>
      </span>
      </div>
     </nav>
     {
      movie.map((value,index)=>{
        return(
          <img src={movie.Poster}></img>
        )
      })
     }
    
    </div>
   
    
  );
}

export default App;
