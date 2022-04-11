import React from "react";
import { Link } from "react-router-dom";
import "./players.css";

import nba from "nba";

const AllPlayers = () => {
  let List = nba.players.map(p => (
    <Link
      to={{
        pathname: "/players/" + p.playerId,
        state: {
          id: p ? p.playerId : "",
          firstName: p ? p.firstName : "",
          lastName: p ? p.lastName : ""
        }
      }}
    >
      <div key={p.id} className="players n-font">
        {p.fullName}
        <div className="players-img">
          <img
            alt="player-pics"
            src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${
              p.playerId
            }.png`}
          />
        </div>
      </div>
    </Link>
  ));

  return <div className="player-list">{List}</div>;
};

export default AllPlayers;
