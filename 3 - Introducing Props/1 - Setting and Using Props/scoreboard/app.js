 {/* Array containing Objects*/}
const players = [ 
   {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
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

      <Counter score={props.score} />
    </div>
  );
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      
      <Header title= "My Scoreboard" totalPlayers={1} />

      {/*(First we passed the Props to the Player which are name and score then passed props argumetn to Player Component above)*/}
      {/* Players list*/}
      <Player name="Guil" score={50} />
      <Player name="Treasure" score={90} />
      <Player name="Ashley" score={85} />
      <Player name="James" score={80} />
    </div>
  );
}

{/* We're passing props of initialPlayers and giving it the players array declared above*/}

ReactDOM.render(
  <App intialPlayers={players} />,
  document.getElementById('root')
);