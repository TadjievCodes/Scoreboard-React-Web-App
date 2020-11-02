 {/* Array containing Objects*/}



const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>

      <Counter />
    </div>
  );
}

{/*State created through a Class first state Component instead of props */}

class Counter extends React.Component {
   
  state = {
        score: 0
      };


  incrementScore = () => {
     this.setState( prevState => ({

      score: prevState.score + 1
     }));
  }
 
 
  decrementScore = () => {
     this.setState( prevState => ({
    
      score: prevState.score - 1
     }));
  }


  render(){
    return (
    <div className="counter">
      <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
      <span className="counter-score">{this.state.score}</span>
      <button className="counter-action increment" onClick={this.incrementScore}> + </button>
    </div>
   );
  }
}

 {/* Turned the method into an arrow function so that we dont need code like " onClick={this.incrementScore.bind(this)  "  */}
{/* We're not calling this.incrementScore() as in JS as we just need a reference to it not a call */}

class App extends React.Component {
   
   state = {
     players: [
        {
    name: "Guil",
    id: 1
  },
  {
    name: "Treasure",
    id: 2
  },
  {
    name: "Ashley",
    id: 3
  },
  {
    name: "James",
    id: 4
  }
      ]
   };


  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return{
      players: prevState.players.filter()   
    }
      
    });
  } 


 render() {
  return (
    <div className="scoreboard">
      
      <Header title= "My Scoreboard" totalPlayers={this.state.palyers.length} />

      {/*(First we passed the Props to the Player which are name and score then passed props argumetn to Player Component above)*/}
      {/* Players list*/}
      {/* Now we're looping through an array through map and getting the object values */}

      {this.state.players.map( player =>
        <Player 
        name={player.name}
        key={player.id.toString()}
        />
      )}  

      
    </div>
  );
 }
}

{/* We're passing props of initialPlayers and giving it the players array declared above*/}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);