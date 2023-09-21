
import React from 'react';
import './App.css';
import axios from 'axios';
// import Child from './Child';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      data: []
    }
//     console.log("constructor - App");
//   }

//   componentDidMount() {
//     console.log("componentDisMount - App")
//   }
//  componentDidUpdate() {
//   console.log("componentDIdUpdate - App")
 }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleSearch = () => {
   axios.get("https://api.github.com/search/users?", {
    params: {
       q: this.state.name
    }
   })
   .then((res) => 
   this.setState({
    data: res.data.items
   })
   )
   .catch((err) => console.log(err))
  };
  componentDidMount() {
    axios.get("https://api.github.com/search/users?q=react")
     .then((res) => 
     this.setState({
      data: res.data.items
     })
     )
     .catch((err) => console.log(err))
  }
  render() {
    console.log(this.state.data,"data")
    // console.log("render - App")
    return (
      <div>
      <h1>Life Cycle Methods</h1>
      {/* <button onClick={this.handleClick}>Change Text</button>
      {
        this.state.name
      } */}
      {/* <Child /> */}
      <input placeholder='search....' onChange={this.handleChange}/>
      <button onClick={this.handleSearch}>Search User</button>
      {
        this.state.data && 
        this.state.data.map((item) => {
          return (
          <div style={{border:"1px solid black", margin:"auto" }}>
            <h2>{item.login}</h2>
            <img width="100" height="100" src={item.avatar_url} alt="img" />
            </div>
          )
        })
      }
      </div> 
    )
  }
}



// API CALLS

//Axios 

 
 