import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import {useState, useEffect} from 'react';
import axios from 'axios'
import Moviecard from './Moviecard';
import "./NavStyle.css";
import InfiniteScroll from 'react-infinite-scroll-component';

const Home=()=> {
    const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [page ,setPage]=useState();
	const [total,setTotal]=useState(0);



    const getMovieRequest = async (searchValue) => {
	const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=ef3ac6ad`);
    console.log(response.data);
	if (response.data.Search) {
		setMovies(response.data.Search);
	   setTotal(response.data.totalResults);
        console.log(movies);		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
		setPage(2);
        if(searchValue==="")
        setMovies([]);
		
	}, [searchValue]);


    const fetchData= async()=>{
	
		const response = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=ef3ac6ad&page=${page}`);
		 const data=response.data.Search;
		 console.log(data);
		 if(data){
		 setMovies([...movies,...data]);
		 setPage(prevpage=>prevpage+1);
		 console.log(movies);

        
	  }

		 }
		
	  
   console.log(movies);

    return (
        <div>
         <SearchForm  searchValue={searchValue} movies={movies}
		 setSearchValue={setSearchValue} statChanger={setSearchValue}/>
         <InfiniteScroll
		dataLength={movies.length} //This is important field to render the next data
		next={fetchData}
		hasMore={movies.length!==total}
		loader={<h4>Next Movie</h4>}
		>
         <div className='row mov'>
         {movies.map((movie, index) => (
             
                <Moviecard key={index} movie={movie}/>
                
                ))}
                </div>
                </InfiniteScroll>
        </div>
    )
}

export default Home
