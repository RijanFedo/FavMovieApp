// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import {Switch, Route, Link, Redirect } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
export default function App() {
  // const users = [{name :"Rijan", pic : "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{name : "Rino", pic : "https://wallpaperaccess.com/full/2213424.jpg"},{name : "Dafini", pic : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}]
  const movies=[
    {
      name: "RRR",
      pic:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      name: "Iron man 2",
      pic:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      name: "No Country for Old Men",
      pic:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      name: "Jai Bhim",
      pic:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      pic:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      name: "Interstellar",
      pic: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      name: "Baahubali",
      pic: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      name: "Ratatouille",
      pic:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];
  
    const [movielist ,setMovielist]=useState(movies);
    const [name ,setName]=useState("")
    const [pic ,setPic]=useState("")
    const [rating ,setRating]=useState()
    const [summary ,setSummary]=useState("");
    const history=useHistory("");
    return (
      <><nav className='nav_bar'>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/addmovie">Add Movie</Link>
        <Link to="/colorgame">Color Game</Link>
        <Link to="/moviedetail/:id">Movie Detail</Link>
      </nav>
    
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/addmovie">
      <div className='add_movie'>
      <TextField id="filled-basic" label="Movie Name" variant="filled" value={name} onChange={(event) => setName(event.target.value)} placeholder='Movie Name'/>
      
        <TextField id="filled-basic" label="Poster URL" variant="filled" value={pic} onChange={(event) => setPic(event.target.value)} placeholder='Poster URL' />
        <TextField id="filled-basic" label="Movie Rating" variant="filled" value={rating} onChange={(event) => setRating(event.target.value)} placeholder='Rating' />
        <TextField id="filled-basic" label="Movie Summary" variant="filled" value={summary} onChange={(event) => setSummary(event.target.value)} placeholder='Summary' />
        <Button onClick={() => {
          const newMovie = { name, pic, rating, summary };
          // console.log(newMovie);
          setMovielist([...movielist, newMovie])
          setName("")
          setRating("")
          setPic("")
          setSummary("")
          history.push("/movies")
        } } variant="outlined">Add Movie</Button>

      </div>
      </Route>
      <Route path="/movies">
        <div className='movie_list'>
          {/* <ColorBox /> */}
          {movielist.map((movie,index) => (
            <Movie deleteButton={<IconButton onClick={()=>{
              const deleteIndex = index;
              const remainingMovies = movielist.filter((mv,idx)=> {
                return deleteIndex!==idx;
              })
              setMovielist(remainingMovies);
            }} variant="outlined" color="error"><DeleteIcon /></IconButton>} id={index} name={movie.name} poster={movie.pic} rating={movie.rating} summary={movie.summary} />
          ))}
          
        </div>
        </Route>
        <Route path="/films">
         <Redirect to="/movies"/>
        </Route>
        <Route path="/colorgame">
          <ColorBox />
        </Route>
        <Route path="/moviedetail/:id">
         <MovieDetail movies={movielist}/>
        </Route>
        <Route path="**">

        </Route>
      </Switch></>
  );
}
// function Users({ name, picture }) {
//   return (
//     <div>
//       <img className="image" src={picture} />
//       <h1>{name}</h1>
//     </div>
//   );
// }
function Movie({name,rating,summary,poster,deleteButton,id}) {
  const styles={color : rating >= 8.5 ? "green" : "red"}
  const [show, setShow]=useState(true);
  const history=useHistory("")
  return (
  <Card  className="movie_container">
  
  <img className="movie_poster" src={poster} alt='movie poster'/>
  <CardContent>
  <CardContent className="movie_specs">
  <div className='expand_more'>
  <h3 className="movie_name">{name}</h3>
  <IconButton color="primary" onClick={()=> history.push(`moviedetail/${id}`)}><InfoIcon /></IconButton>
  <IconButton color="primary" onClick={()=>setShow(!show)}>{!show ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton>
  </div>
  <p style={styles} className="movie_rating">⭐<b>{rating}</b></p>
  </CardContent>
  <p  style={{display :show? "block":"none"}} className="movie_summary">{summary}</p>
  <CardActions className='movie_actions'><Counter />
  {deleteButton}
  </CardActions>
  </CardContent>
  
</Card>
  )
}
function Counter() {
  const [like, setLike]=useState(0);
  const [dislike, setDislike]=useState(0);
  return(
    <div className="counter_container">
      <IconButton variant="outlined" onClick={()=>setLike(like+1)} aria-label="delete" color="primary"><Badge badgeContent={like} color="primary">👍</Badge></IconButton>
      <IconButton variant="outlined" onClick={()=>setDislike(dislike+1)} aria-label="delete" color="error"><Badge badgeContent={dislike} color="error">👎</Badge></IconButton>
    </div>
  )
}

function ColorBox() {
  const [color, setColor]=useState("");
  const styles={background: color}
  return(
    <div>
      <input style={styles} onChange={(event)=>setColor(event.target.value)} placeholder='Enter a color'/>
      <button>Add Color</button>
    </div>
  )
}
function Home() {
  return (
    <div>
      <h2>Welcome to My Fav Movielist</h2>
    </div>
  )
}
function MovieDetail({movies}){
  const {id}=useParams();
 const movie=movies[id];
  return (
    <div className='trailer_info'>
      <iframe width="853" height="480" src={movie.trailer}></iframe>
      <h1>{movie.name}</h1>
      <p>⭐<b>{movie.rating}</b></p>
      <h3>{movie.summary}</h3>
    </div>
  )
}