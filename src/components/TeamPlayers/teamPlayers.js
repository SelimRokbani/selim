import React from "react";
import "./teamPlayers.css";
import { Link } from "react-router-dom";

const TeamPlayers = ({ players }) => {
  return (
    <Link
      to={{
        pathname: "/players/" + players.playerId,
        state: {
          id: players.playerId,
          firstName: players.firstName,
          lastName: players.lastName
        }
      }}
    >
      <div className="players">
        <div className="n-font">
          {players.fullName}
          <div>
            <img
              alt="player-pics"
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${
                players.playerId
              }.png`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamPlayers;
