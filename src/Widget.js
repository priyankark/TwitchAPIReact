import React,{Component} from 'react';
//var fetchJsonp=require('fetch-jsonp');
//var jsonp=require('jsonp');
import $ from 'jquery';
import List from './List';
import Button from './Button';

export default class Widget extends Component
{
  state={
    online:[],
    offline:[],
    all:[],
    present:[],
    value:""
   };
  list = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  
  baseUrl ="https://wind-bow.gomix.me/twitch-api/streams/"
  lastUrl="?callback=?";

  handleSubmit = () => {
    const data = "";
    //console.log(this);
    const ref=this;
    this.list.map((li, index) => {
      $.getJSON(this.baseUrl+li+this.lastUrl,(d)=>{
      console.log(d);
      let onlineAr =ref.state.online;
      let allAr = ref.state.all;
      let offlineAr = ref.state.offline;
     
     
      if (d.stream === null) {
        offlineAr.push({ name: li, data: d,status:"offline" });
        allAr.push({ name: li, data: d,status:"offline" });
        ref.setState({ all: allAr, present: allAr,offline:offlineAr });
      }
      else {
        

        onlineAr.push({ name: li, data: d,status:"online" });
        allAr.push({ name: li, data: d, status: "online" });
        ref.setState({ all: allAr, present: allAr,online:onlineAr });

      }
      //console.log(ref.state.all); 

      /*
      let allAr=ref.state.all;
      allAr.push(d);
      console.log(allAr); */
      //ref.setState({all:allAr});
      //console.log(ref.state.all);
    
    });
    });
    
  }
  




  componentWillMount()
  {
    //const url=this.baseUrl + 'freecodecamp' + this.lastUrl;
    /*fetchJsonp(url)
      .then(function (response) {
        return response.text()
      }).then(function (json) {
        console.log('parsed json', json)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
    })
  */
    this.handleSubmit();
    //const { all } = this.state;
    //this.setState({ present: all });
    

  }

  /*
  $.getJSON(url,function(d)
  {
    console.log(d);
    //data=d;
  })
   console.log(data); 

  }*/

handleChange=(event)=>{
  const val=event.target.value;
  this.setState({value:val});
  //console.log(this.state.all);
  var ref=this;

  const result=this.state.all.filter(r=>r.name.toLowerCase().startsWith(val.toLowerCase()));
  this.setState({ present: result });
  //console.log(result);
  //this.setState({present:result});
  //console.log(event.target.value);
} 
  
  render()
  {
    const style={
      backgroundColor:"black",
      height:"1000px",
      border:"10px solid",
      color:"white"
    }
    return(
      <div style={style} align="center">

        <div className="col-sm-offset-1" style={{marginTop:"10px"}}>
          <div className="row">
          <div className="col-sm-offset-4 col-sm-4">
          <input className="form-control" type="text" onChange={this.handleChange}  />
          </div>
          </div>
          <div className="row">
          <Button value="All" name="btn btn-info" onClick={() => { this.setState({ present: this.state.all }) }} />
          <Button value="Online" name="btn btn-success" onClick={() => { this.setState({ present: this.state.online }) }} />
          <Button value="Offline" name="btn btn-danger" onClick={() => { this.setState({ present: this.state.offline }) }} />
          </div>
        </div>
        <div>
          <List items={this.state.present} />
        </div>
      </div>
    );
  }
}