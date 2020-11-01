 {/* Array containing Objects*/}
const players = [ 
   {
    name: "Guil",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }
];




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


  incrementScore() {
     console.log("Hi, from inside of  incrementScore!");
  }
  

  render(){
    return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{this.state.score}</span>
      <button className="counter-action increment" onClick={this.incrementScore}> + </button>
    </div>
   );
  }
}


{/* We're not calling this.incrementScore() as in JS as we just need a reference to it not a call  */}

const App = (props) => {
  return (
    <div className="scoreboard">
      
      <Header title= "My Scoreboard" totalPlayers={props.intialPlayers.length} />

      {/*(First we passed the Props to the Player which are name and score then passed props argumetn to Player Component above)*/}
      {/* Players list*/}
      {/* Now we're looping through an array through map and getting the object values */}

      {props.intialPlayers.map( player =>
        <Player 
        name={player.name}
        key={player.id.toString()}
        />
      )}  

      
    </div>
  );
}

{/* We're passing props of initialPlayers and giving it the players array declared above*/}

ReactDOM.render(
  <App intialPlayers={players} />,
  document.getElementById('root')
);