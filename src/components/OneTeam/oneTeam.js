import React, { useState, useEffect } from "react";
import "./oneTeam.css";

import { LargeLogo } from "../logos";
import TeamPlayers from "../TeamPlayers/teamPlayers";
import { getMainColor, getSecondaryColor } from "nba-color";
import nba from "nba";

const OneTeam = props => {
  const id = props.match.params;
  const teams = props.location.state;
  const [OneTeam, setOneTeam] = useState(teams);
  const [teamId, setTeamId] = useState([]);

  useEffect(() => {
    setTeamId(nba.teamIdFromName(id.id));
  }, []);
  const player = nba.players.filter(player => player.teamId === teamId);

  const { hex: main } = getMainColor(id.id);
  const { hex: secondary } = getSecondaryColor(id.id);

  return (
    <div className="team">
      <div className="team-header" style={{ background: main }}>
        <div className="team-header-name">
          <LargeLogo
            logo={OneTeam ? OneTeam.teams.abbreviation : ""}
            className="team-logo"
          />
          <div className="team_full-name n-font">
            {OneTeam ? OneTeam.teams.full_name : ""}
          </div>
        </div>
      </div>

      <div className="team-players">
        <h3
          style={{ background: secondary }}
          className="team-players-title n-font"
        >
          Players
        </h3>

        {player.map(player => (
          <TeamPlayers key={player.id} players={player} />
        ))}
      </div>
    </div>
  );
};

export default OneTeam;
