import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Who is dafuq ?",
      answers: [
        {
          text: "Gamer",
          correct: true,
        },
        {
          text: "Boxer",
          correct: false,
        },
        {
          text: "Athelete",
          correct: false,
        },
        {
          text: "Singer",
          correct: false,
        }
      ]
    },
    {
      id: 2,
      question: "Full Form of PUBG ?",
      answers: [
        {
          text: "Professional Underage Battle Ground",
          correct: false,
        },
        {
          text: "Play Until Become Gamer",
          correct: false,
        },
        {
          text: "Player Unknown's Battle Ground",
          correct: true,
        },
        {
          text: "Please Use Big Gun",
          correct: false,
        }
      ]
    },
    {
      id: 3,
      question: "From where was the Prince in classic video game 'Prince of' …?",
      answers: [
        {
          text: "Paris",
          correct: false,
        },
        {
          text: "Pachalam",
          correct: false,
        },
        {
          text: "Pathalam",
          correct: false,
        },
        {
          text: "Persia",
          correct: true,
        }
      ]
    }, 
    {
      id: 4,
      question: "Which developer produces the Starcraft, Hearthstone and Overwatch games?",
      answers: [
        {
          text: "Kodumkattu",
          correct: false,
        },
        {
          text: "Spring",
          correct: false,
        },
        {
          text: "Bliazzard",
          correct: true,
        },
        {
          text: "Rockstar Games",
          correct: false,
        }
      ]
    },
    {
      id: 5,
      question: "Which word completes the name of this huge selling video game series, 'Call of' …?",
      answers: [
        {
          text: "Duty",
          correct: true,
        },
        {
          text: "Booty",
          correct: false,
        },
        {
          text: "Doody",
          correct: false,
        },
        {
          text: "Ooty",
          correct: false,
        }
      ]
    },
    {
      id: 6,
      question: "In the game ‘Mortal Kombat’ which character was renowned for freezing his opponents in place?",
      answers: [
        {
          text: "Subway",
          correct: false,
        },
        {
          text: "Sub-One",
          correct: false,
        },
        {
          text: "Sumesh",
          correct: false,
        },
        {
          text: "Sub-Zero",
          correct: true,
        }
      ]
    },
    {
      id: 7,
      question: "The original designer behind the game “Tetris” is from which nation?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "Tokyo",
          correct: false,
        },
        {
          text: "USA",
          correct: false,
        }
      ]
    },
    {
      id: 8,
      question: "Solid Snake Is A Hero In Which Famous Videogame Franchise?",
      answers: [
        {
          text: "Plastic Gear",
          correct: false,
        },
        {
          text: "Grand Theft Auto",
          correct: false,
        },
        {
          text: "Metal Gear",
          correct: true,
        },
        {
          text: "Assassin's Creed",
          correct: false,
        }
      ]
    },
    {
      id: 9,
      question: "Mario Originated As A Character In Which Classic Videogame",
      answers: [
        {
          text: "Mario",
          correct: false,
        },
        {
          text: "Road Rash",
          correct: false,
        },
        {
          text: "Tetris",
          correct: false,
        },
        {
          text: "Donkey Kong",
          correct: true,
        }
      ]
    },
    {
      id: 10,
      question: "Which Is The Original First-Person Shooter Video Game",
      answers: [
        {
          text: "Wolfenstein 3D",
          correct: true,
        },
        {
          text: "DOOM",
          correct: false,
        },
        {
          text: "Halo",
          correct: false,
        },
        {
          text: "Call Of Duty",
          correct: false,
        }
      ]
    },
    {
      id: 11,
      question: "The Umbrella Corporation is a fictitious pharmaceutical company in what game?",
      answers: [
        {
          text: "Dishonored",
          correct: false,
        },
        {
          text: "Dying Light",
          correct: false,
        },
        {
          text: "Resident Evil",
          correct: true,
        },
        {
          text: "Fallout",
          correct: false,
        }
      ]
    },
    {
      id: 12,
      question: "Which company released and designed Pacman?",
      answers: [
        {
          text: "Nintendo",
          correct: false,
        },
        {
          text: "Sony",
          correct: false,
        },
        {
          text: "Namco",
          correct: true,
        },
        {
          text: "Ubisoft",
          correct: false,
        }
      ]
    },
    {
      id: 13,
      question: "What was the video game character Mario’s original profession?",
      answers: [
        {
          text: "Pizza Delivery Boy",
          correct: false,
        },
        {
          text: "Driver",
          correct: false,
        },
        {
          text: "Carpenter",
          correct: true,
        },
        {
          text: "Secret Agent",
          correct: false,
        }
      ]
    },
    {
      id: 14,
      question: "What is the name of the main character in the “Legend of Zelda” series?",
      answers: [
        {
          text: "Link",
          correct: true,
        },
        {
          text: "Legend",
          correct: false,
        },
        {
          text: "Saurav",
          correct: false,
        },
        {
          text: "Laser",
          correct: false,
        }
      ]
    },
    {
      id: 15,
      question: "Shroud became popular by palying which game first?",
      answers: [
        {
          text: "PUBG",
          correct: false,
        },
        {
          text: "CSGO",
          correct: true,
        },
        {
          text: "Day Z",
          correct: false,
        },
        {
          text: "Call Of Duty",
          correct: false,
        }
      ]
    }
  ]

  const moneyPyramid = useMemo(() => 
  [
    {id:1, amounnt:"$ 100"},
    {id:2, amounnt:"$ 200"},
    {id:3, amounnt:"$ 300"},
    {id:4, amounnt:"$ 500"},
    {id:5, amounnt:"$ 1000"},
    {id:6, amounnt:"$ 2000"},
    {id:7, amounnt:"$ 4000"},
    {id:8, amounnt:"$ 8000"},
    {id:9, amounnt:"$ 16000"},
    {id:10, amounnt:"$ 32000"},
    {id:11, amounnt:"$ 64000"},
    {id:12, amounnt:"$ 125000"},
    {id:13, amounnt:"$ 250000"},
    {id:14, amounnt:"$ 500000"},
    {id:15, amounnt:"$ 1000000"}
  ].reverse(),
  []); 

  useEffect(() =>{
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amounnt);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="App">
      {username ? (
        <>
        <div className="main">
        {stop || questionNumber > 15 ? ( <h1 className="endText">You earned: {earned}</h1> ) : (
      <>   
      <div className="top">
      <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
      </div>
      <div className="bottom">
        <Trivia 
        data = {data}
        setStop = {setStop}
        questionNumber = {questionNumber}
        setQuestionNumber = {setQuestionNumber}
         />
      </div>
      </> 
      )}
      </div>
      <div className="pyramid">
      <ul className="moneyList">
      {moneyPyramid.map((m) =>(
        <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amounnt}</span>
        </li>
            )
            )}
      </ul>
      </div>
        </>
      ) : <Start setUserName={setUserName} />}
    </div>
  );
}
export default App;
