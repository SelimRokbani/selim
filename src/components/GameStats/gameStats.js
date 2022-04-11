import React, { useEffect, useState } from "react";
import { LargeLogo } from "../logos";
import { Link } from "react-router-dom";
import "./gameStats.css";
import Main from "../Main"

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const GameStats = props => {
  // console.log(props.location.state.id)
  const gameId = props.location.state ? props.location.state.id : "";
  const visitor = props.location.state ? props.location.state.visitorTeam : "";
  const home = props.location.state ? props.location.state.homeTeam : "";
  const status = props.location.state ? props.location.state.status : "";
  const visitorScore = props.location.state
    ? props.location.state.visitorScore
    : "";
  const homeScore = props.location.state ? props.location.state.homeScore : "";

  const [allStats, setAllStats] = useState([]);
  const [teams, setTeams] = useState([]);
  const [team, setTeam] = useState([]);
  

  useEffect(() => {
    const getGameStats = async () => {
      const res = await fetch(
        `https://www.balldontlie.io/api/v1/stats?game_ids[]=${gameId}`
      );
      const data = await res.json();
      setAllStats(data.data);
    };
    const getAllTeams = async () => {
      const res = await fetch(`https://www.balldontlie.io/api/v1/teams`);
      const data = await res.json();
      setTeams(data.data);
    };

    getGameStats();
    getAllTeams();
    teams.map(team => setAllStats(team));
  }, []);
  let d = allStats.map(stats => (
    <div>
      <div className="gameStats-players">
        <p>
       
          {" "}
          <span className="gameStats-player-team">
            {stats.team.abbreviation}
          </span>
          {stats.player.first_name} {stats.player.last_name}{" "}
          {stats.player.height_feet}' {stats.player.height_inches}" {"  "}
          {stats.player.position}
        
        </p>
        
        <div className="gameStats-stats">
        
          <div className="stats stats-mins">
            <h5>MIN</h5>
            <span>{stats.min}</span>
          </div>
          <div className="stats stats-pts">
            <h5>PTS</h5>
            <span>{stats.pts}</span>
          </div>
          <div className="stats stats-ast">
            <h5>AST</h5>
            <span>{stats.ast}</span>
          </div>
          <div className="stats stats-reb">
            <h5>REB</h5>
            <span>{stats.reb}</span>
          </div>
          <div className="stats stats-stls">
            <h5>STLS</h5>
            <span>{stats.stl}</span>
          </div>
          <div className="stats stats-blk">
            <h5>BLKS</h5>
            <span>{stats.blk}</span>
          </div>
          <div className="stats stats-to">
            <h5>TO</h5>
            <span>{stats.turnover}</span>
          </div>
          <div className="stats stats-fgm">
            <h5>FGM</h5>
            <span>{stats.fgm}</span>
          </div>
          <div className="stats stats-fga">
            <h5>FGA</h5>
            <span>{stats.fga}</span>
          </div>
          <div className="stats stats-fg_pct">
            <h5>FG%</h5>
            <span>{stats.fg_pct}%</span>
          </div>
          <div className="stats stats-fg3">
            <h5>FG3M</h5>
            <span>{stats.fg3m}</span>
          </div>
          <div className="stats stats-fg3m">
            <h5>FG3A</h5>
            <span>{stats.fg3a}</span>
          </div>
          <div className="stats stats-fg_pct">
            <h5>FG%</h5>
            <span>{stats.fg3_pct}%</span>
          </div>
          
        </div>
      </div>
      <hr />
    </div>
  ));
  
  return (
    
    <div className="n-font">
     
      <div className="gameStats-status">
        <span className="logos">
          {visitorScore}
          <Link
            to={{
              pathname: "/teams/" + visitor,
              state: {
                teams: team
              }
            }}
          >
            <LargeLogo logo={visitor} className="team-logo" />
          </Link>
        </span>
        {status}
        <span className="logos">
          <Link
            to={{
              pathname: "/teams/" + home,
              state: {
                teams: teams
              }
            }}
          >
            <LargeLogo logo={home} className="team-logo" />
          </Link>
          {homeScore}
        </span>
        
      </div>
      <div className="gameStats">{d}</div>
      <div className="container-fluid">
            <div className="Row" >
              <main role="main"  >
            
              
              { 
                
                 <Main createBet = {Main.createBet} teamWinDistribution = {Main.teamWinDistribution} />
              }
            </main>
            
              
           
          </div>
          </div>
    </div>
    
    
  );
};

export default GameStats;
