import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Logos from "./logos";
import { MiniLogos } from "./logos";
import Calendar from "react-calendar";
import "./Games.css";



const Games = () => {
  let d = new Date();

  const [game, setGame] = useState([]);
  const [year, setyear] = useState([d.getFullYear()]);
  const [month, setMonth] = useState([d.getMonth() + 1]);
  const [day, setDay] = useState([d.getDate()]);
  // const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getGames = async () => {
      const res = await fetch(
        ` https://www.balldontlie.io/api/v1/games?dates[]=${year}-${month}-${day}`
      );
      const data = await res.json();

      setGame(data.data);
    };
    getGames();
  }, []);

  let gameList = game.map(g => (
    <Link
      to={{
        pathname: "/games/",
        state: {
          id: g.id,
          homeTeam: g.home_team.abbreviation,
          homeScore: g.home_team_score,
          status: g.status,
          visitorTeam: g.visitor_team.abbreviation,
          visitorScore: g.visitor_team_score
        }
      }}
    >
      <div class="grid grid-cols-auto-fill gap-5">
      <article
                className='flex rounded-lg  border-main bg-glass text-white backdrop-blur-lg duration-300 firefox:bg-slate-750'>
      <div key={g.id} className="game">
        <span className="game-visitor_team">
          <MiniLogos className="logo" logo={g.visitor_team.abbreviation} />
          <span className="n-font score">{g.visitor_team.abbreviation}</span>
          <span className="n-font">{g.visitor_team_score}</span>
        </span>
        <span className="game-status">{g.status}</span>
        <span className="game-home_team">
          <span className="n-font score">{g.home_team_score}</span>
          <span className="n-font">{g.home_team.abbreviation}</span>
          <MiniLogos className="logo" logo={g.home_team.abbreviation} />
        </span>
      </div></article></div>
    </Link>
  ));

  const onClickDay = date => {
    setMonth(date.getMonth() + 1);
    setDay(date.getDate());
    setyear(date.getFullYear());
    const getGames = async () => {
      const res = await fetch(
        ` https://www.balldontlie.io/api/v1/games?dates[]=${year}-${month}-${day}`
      );
      const data = await res.json();
      setGame(data.data);
    };
    getGames();
  };

  return (
    <div className="all-games">
      {/* <span className="game-visitor_team">
        visit()
        <span>{game.visitor_team.abbreviation}</span>
        <span>{game.visitor_team_score}</span>
      </span> 
      <span>{game.status}</span>
      <span className="game-home_team">
        <span>{game.home_team_score}</span>
        <span>{game.home_team.abbreviation}</span>
      </span> */}
      <div className="games-calendar">
        <Calendar value={d} onClickDay={onClickDay} />
      </div>
      <main className="games-list">{gameList}</main>
      
     
    </div>
    
    
  );
};

export default Games;
