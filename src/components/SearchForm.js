import React, { useCallback, useState, useEffect }  from 'react';
import "./NavStyle.css";
import {debounce} from 'lodash'
import AsyncSelect from 'react-select/async';
const  SearchForm=(props)=> {
 const [suggestions,setSuggestions]=useState([]);
 const [val,setVal]=useState('');

	const deb=useCallback(
		debounce((text) => props.setSearchValue(text),100)
		,
		[],
	);
const drop=(text)=>{
  let matches=[];

  if (text.length > 0) {
    matches = props.movies.filter(user => {
    const regex = new RegExp(`${text}`, "gi");
    return user.Title.match(regex)
  })
}

setSuggestions(matches);
}

const handleText=(text)=>{
 
  deb(text);
		console.log(props.searchValue)
	
  
}
const onSuggestHandler = (text) => {
  props.setSearchValue(text);
  setVal(text);
  document.getElementById("stuffed").value = text;
setSuggestions([])
}

const remove=()=>{
 
  setVal("");
  document.getElementById("stuffed").value = val;
  props.setSearchValue(val);
}
  
const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
  
    document.getElementById("stuffed").value = props.searchValue;
  
  }
}
 

  // Input Field handler


  // Reset Input Field handler
  

  
    // setEmail("");
    // setPassword("");
    // var el = document.getElementById("stuffed");

    // el.addEventListener("keypress", function(event) {
    //   if (event.key === "Enter") {
    //     alert(event.key  + " " + event.which);
    //     event.preventDefault();
    //   }
    // });


    return (
        <div className="Navstyle">
        <div className=" navcnt">
          <h1 className="display-4 mb-3">
            <i className="fa fa-film" aria-hidden="true" /> My WatchList
          </h1>
          <p>Search To add movies or TV shows to your WatchList</p>
          <form id="searchForm" onSubmit={e => { e.preventDefault(); }}>
          <div class="fontuser">
            <input
              className="form-control in"
             value={props.value}
			    onChange={(event) => {handleText(event.target.value)
            drop(event.target.value)
          
            
          }}
          onKeyDown={handleKeyDown}
         
          id="stuffed"
          autocomplete="off"
              placeholder="Search for a Movies, TV Show ..."
            
            />
           <i className="fa fa-plus" aria-hidden="true" />
           {  props.searchValue!==""?
           <i className='fa fa-times cross-right show' aria-hidden="true"  onClick={(e)=>remove(e)}/>: 
           <i className='fa fa-times cross-right nshow' aria-hidden="true"    />
           }
           {suggestions && suggestions.map((suggestion, i) =>
<div className="suggestion col-md-12 justify-content-md-center" 
onClick={() => onSuggestHandler(suggestion.Title)}>{suggestion.Title}</div>
)}
            </div>
          </form>
        </div>
      </div>
    )
}

export default SearchForm

