import React,{Component} from 'react';

const Button=(props)=>{

return(
  <input className={props.name} type="submit" onClick={props.onClick} value={props.value} />
)

};

export default Button;