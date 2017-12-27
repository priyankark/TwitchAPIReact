import React from 'react';

const Header=(props)=>{
  const styles={
    backgroundColor:"maroon",
    color:"floralwhite",
    border:"10px solid",
    borderRadius:"5px"
    
  };
  return(
    <div className="jumbotron" style={styles}>
     <h2 align="center" style={{marginTop:"10px relative"}}> {props.headerText} </h2> 
    </div>
  );
}

export default Header;
