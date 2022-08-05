// import logo from './logo.svg';
import './App.css';
import React from 'react';
//import Item from './Myitem';

// class Fillm extends React.Component{
//   render(){
//     return(
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
// }
// }

class Starwar extends React.Component{
  constructor(){
    super();
    this.state = {
      Name : null,
      Height : null,
      Homeworld : null,
      films : []  ,
      loadedright : false ,
      ima : null
    }
  }
  getNewCharacter(){
    const rand = Math.round(Math.random()* 88);
    const url =  `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${rand}.json`;
    fetch(url)
    .then(respones => respones.json())
    .then(data => {
      this.setState({
      Name : data.name,
      Height :data.height , 
      Homeworld : data.homeworld ,
      films : data.films ,
      loadedright : true ,
      ima : data.image
    }) 
    }
    )
    console.log("Get New data" , rand);
        
  }

  render(){

    // const movies = this.state.films.map((url,index) => {
    //   return <Fillm url={url} key={index} / >
    // })

    return(
      <div>
        {
          this.state.loadedright &&
          <div>
            <h1>CHARACTER</h1>
            <img src ={this.state.ima} width ='300px' height= "300px" alt ="character"/>
            <p>{this.state.Name}</p>
            <p>{this.state.Height} m</p>
            <p>{this.state.Homeworld}</p>
            <ul>
              {/* {
                this.state.films.map(film => {
                  return <li>{film}</li>
                })
              } */}

              {/* {movies} */}


            </ul>
            </div>
            }
            <button type="button" className='btn' onClick={ () =>this.getNewCharacter()}>Randomize Character</button>
            
          </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://seeklogo.com/images/S/star-wars-logo-9E8585C340-seeklogo.com.png" className='logo' alt="logo" />
        
          {/* <Item name ="A" />
          <Item name ="B" />
          <Item name ="C" /> */}
          <Starwar />
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
