import React,{Component} from 'react';
import ListItem from './ListItem';

const List=(props)=>{
  return props.items.map((li)=>{
  //console.log('found');
  return(
    <div style={{color:'black'}} >
      <br/>
      <ListItem name={li.name} data={li.data} status={li.status} />
    </div>
  );
  });
};


export default List;