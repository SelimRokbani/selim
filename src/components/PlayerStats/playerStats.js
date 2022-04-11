import React, { useEffect, useState } from "react";
import { SuperLogo } from "../logos";
import { Link } from "react-router-dom";
import "./playerStats.css";
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const PlayerStats = props => {
  const id = props.location.state ? props.location.state.id : "";
  const firstName = props.location.state ? props.location.state.firstName : "";
  const lastName = props.location.state ? props.location.state.lastName : "";

  const [playerInfo, setPlayerInfo] = useState([]);
  const [playerStats, setPlayerStats] = useState([]);
  const [abbreviation, setAbbreviation] = useState([]);

  useEffect(() => {
    const getPlayerInfo = async () => {
      const res = await fetch(
        `https://www.balldontlie.io/api/v1/players?search=${firstName}_${lastName}`
      );
      const data = await res.json();
      setPlayerInfo(data.data[0]);
      setAbbreviation(data.data[0].team.abbreviation);
    };

    getPlayerInfo();
  }, []);

  useEffect(() => {
    const getStats = async () => {
      const res = await fetch(
        ` https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${
          playerInfo.id
        }`
      );
      try {
        const data = await res.json();
        setPlayerStats(data.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [playerInfo]);

  return (
    <div className="stats">
      <div className="stats-header">
        <div className="stats-header-logo">
          <Link
            to={{
              pathname: "/teams/" + abbreviation,
              state: {
                teams: abbreviation
              }
            }}
          >
            <SuperLogo logo={abbreviation} />
          </Link>
        </div>
        <div className="stats-header-img">
          <img
            alt="player-pics"
            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${id}.png`}
          />
        </div>
        <p className="stats-header-name n-font">
          {playerInfo.first_name} {playerInfo.last_name} - {""}
          {playerInfo.position ? (
            <span className="stats-position">{playerInfo.position}</span>
          ) : (
            "?"
          )}
        </p>
        <div className="stats-header-height n-font">
          {playerInfo.height_feet ? (
            <div>
              <span className="stats-height_feet">
                {playerInfo.height_feet}'
              </span>{" "}
              <span className="stats-height_inches">
                {playerInfo.height_inches}"
              </span>
              <span> - {playerInfo.weight_pounds} LBS</span>
            </div>
          ) : (
            "Unknown Height"
          )}
        </div>
      </div>
      <div className="stats-basestats n-font">
     
        <div className="stats stats-basestats-min">
          <h5>MIN</h5>
          {playerStats ? playerStats.min : ""}
        </div>
        <div className="stats stats-basestats-PTS">
          <h5>PTS</h5>
          {Math.round(playerStats ? playerStats.pts : "" * 10) / 10}
        </div>
        <div className=" stats stats-basestats-REB">
          <h5>AST</h5>
          {Math.round(playerStats ? playerStats.ast : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-AST">
          <h5>REB</h5>
          {Math.round(playerStats ? playerStats.reb : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-BLKS">
          <h5>BLKS</h5>
          {Math.round(playerStats ? playerStats.blk : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-STLS">
          <h5>STLS</h5>
          {Math.round(playerStats ? playerStats.stl : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-TO">
          <h5>TO</h5>
          {Math.round(playerStats ? playerStats.turnover : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-PF">
          <h5>PFS</h5>
          {Math.round(playerStats ? playerStats.pf : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-OREB">
          <h5>O'REB</h5>
          {Math.round(playerStats ? playerStats.oreb : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-DREB">
          <h5>D'REB</h5>
          {Math.round(playerStats ? playerStats.dreb : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-FGM">
          <h5>FGM</h5>
          {Math.round(playerStats ? playerStats.fgm : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-FGA">
          <h5>FGA</h5>
          {Math.round(playerStats ? playerStats.fga : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-FG%">
          <h5>FG%</h5>
          {Math.round(playerStats ? playerStats.fg_pct : "" * 100 * 10) / 10}%
          {/* {playerStats.fg_pct * 100}% */}
        </div>
        <div className="stats stats-basestats-FG3M">
          <h5>FG3M</h5>
          {Math.round(playerStats ? playerStats.fg3m : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-FG3A">
          <h5>FG3A</h5>
          {Math.round(playerStats ? playerStats.fg3a : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-FG3%">
          <h5>FG3%</h5>
          {Math.round(playerStats ? playerStats.fg3_pct : "" * 100 * 10) / 10}%
          {/* {playerStats.fg3_pct * 100}% */}
        </div>
        <div className="stats stats-basestats-FTM">
          <h5>FTM</h5>
          {Math.round(playerStats ? playerStats.ftm : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-FTA">
          <h5>FTA</h5>
          {Math.round(playerStats ? playerStats.fta : "" * 10) / 10}
        </div>
        <div className="stats stats-basestats-FT%">
          <h5>FT%</h5>
          {Math.round(playerStats ? playerStats.ft_pct * 100 : "" * 10) / 10}%
          {/* {Math.round(playerStats.ft_pct * 10) / 10} */}
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
