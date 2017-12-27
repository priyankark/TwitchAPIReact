import React,{Component} from 'react';

const ListItem=(props)=>{
  let imgUrl="";
  let game="";
  if(props.status==="offline")
  {
    imgUrl ="https://pbs.twimg.com/media/B6gU8VKIIAAE-1E.jpg";

  }
  else
  {
    imgUrl=props.data.stream.preview.small;
    game = "Playing "+props.data.stream.game;
  }
  let url ="https://www.twitch.tv/"+props.name;
return(
  <div align="center" className="row" >
  <div className="media" className="col-sm-offset-5 col-sm-3" style={{border:"5px solid maroon",borderRadius:"5px"}}>    

    <div className="media-body" style={{color:'white'}}>
      <div className="row">
        <div className="col-sm-4">
            <img src={imgUrl} style={{height:"50px",width:"auto",verticalAlign:"center",marginTop:"10px"}} className="img-responsive img-rounded"  />
        </div>
        <div className="col-sm-4">
          <div className="media-heading">
            <h5> {props.name} </h5>
          </div>
          <div>
            <p>
                {props.status === "online" ? <label  className="label label-success"><a target="_blank" style={{color:'white'}} href={url}>Online </a></label> : <label className="label label-danger">Offline</label>}
            </p>
            <p>
                {game}
            </p>
          </div>  
        </div>  

      </div>
    </div>
  </div>
  <div className="row">
    <br/>
    <br/>
    <br/>
  </div>
  </div>
);

};

export default ListItem;