import React, { useRef } from 'react'
import classes from './Search.module.css'

function Search({handleParam,handleSearchText}) {
    console.log("ser")
    const bref = useRef(null);

    function handleSubmit(event){
        if(event.keyCode===13){
            handleSearchText();
        }
    }


  return (
    <div>
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input ref={bref} 
                type='search' 
                placeholder='Location...' 
                id={classes.search} 
                onChange={(e)=>{handleParam(e.target.value)}} 
                onKeyDown={handleSubmit}>
            </input>
        </form>
    </div>
  )
}

export default React.memo(Search);