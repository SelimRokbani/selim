import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Logos from "../logos";
import { MiniLogos } from "../logos";
import "./team.css";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getAllTeams = async () => {
      const res = await fetch(`https://www.balldontlie.io/api/v1/teams`);
      const data = await res.json();
      setTeams(data.data);
    };

    getAllTeams();
  }, []);

  let eastTeams = teams.map(team =>
    team.conference === "East" ? (
      <Link
        to={{
          pathname: "/teams/" + team.abbreviation,
          state: {
            teams: team
          }
        }}
      >
        <div className="team-east">
          <MiniLogos className="logo" logo={team.abbreviation} />
          <span>{team.abbreviation}</span>
        </div>
      </Link>
    ) : null
  );
  let westTeams = teams.map(team =>
    team.conference === "West" ? (
      <Link
        to={{
          pathname: "/teams/" + team.abbreviation,
          state: {
            teams: team
          }
        }}
      >
        <div className="team-West">
          <MiniLogos className="logo" logo={team.abbreviation} />
          <span>{team.abbreviation}</span>
        </div>
      </Link>
    ) : null
  );

  return (
    <div className="teams">
      <div className="west">
        <h3>West</h3>
        {westTeams}
      </div>
      <hr />
      <div className="east">
        <h3>East</h3>

        {eastTeams}
      </div>
    </div>
  );
};

export default Team;
