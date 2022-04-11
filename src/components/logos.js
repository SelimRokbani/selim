import React from "react";
import * as NBAIcons from "react-nba-logos";

export const MiniLogos = ({ logo }) => {
  let logos = null;
  switch (true) {
    case logo === "ATL":
      logos = <NBAIcons.ATL size={60} />;
      break;
    case logo === "BKN":
      logos = <NBAIcons.BKN size={60} />;
      break;
    case logo === "BOS":
      logos = <NBAIcons.BOS size={60} />;
      break;
    case logo === "CHA":
      logos = <NBAIcons.CHA size={60} />;
      break;
    case logo === "CHI":
      logos = <NBAIcons.CHI size={60} />;
      break;
    case logo === "CLE":
      logos = <NBAIcons.CLE size={60} />;
      break;
    case logo === "DAL":
      logos = <NBAIcons.DAL size={60} />;
      break;
    case logo === "DEN":
      logos = <NBAIcons.DEN size={60} />;
      break;
    case logo === "DET":
      logos = <NBAIcons.DET size={60} />;
      break;
    case logo === "GSW":
      logos = <NBAIcons.GSW size={60} />;
      break;
    case logo === "HOU":
      logos = <NBAIcons.HOU size={60} />;
      break;
    case logo === "IND":
      logos = <NBAIcons.IND size={60} />;
      break;
    case logo === "LAC":
      logos = <NBAIcons.LAC size={60} />;
      break;
    case logo === "LAL":
      logos = <NBAIcons.LAL size={60} />;
      break;
    case logo === "MEM":
      logos = <NBAIcons.MEM size={60} v />;
      break;
    case logo === "MIA":
      logos = <NBAIcons.MIA size={60} />;
      break;
    case logo === "MIL":
      logos = <NBAIcons.MIL size={60} />;
      break;
    case logo === "MIN":
      logos = <NBAIcons.MIN size={60} />;
      break;
    case logo === "NOP":
      logos = <NBAIcons.NOP size={60} />;
      break;
    case logo === "NYK":
      logos = <NBAIcons.NYK size={60} />;
      break;
    case logo === "OKC":
      logos = <NBAIcons.OKC size={60} />;
      break;
    case logo === "ORL":
      logos = <NBAIcons.ORL size={60} />;
      break;
    case logo === "PHI":
      logos = <NBAIcons.PHI size={60} />;
      break;
    case logo === "PHX":
      logos = <NBAIcons.PHX size={60} />;
      break;
    case logo === "POR":
      logos = <NBAIcons.POR size={60} />;
      break;
    case logo === "SAC":
      logos = <NBAIcons.SAC size={60} />;
      break;
    case logo === "SAS":
      logos = <NBAIcons.SAS size={60} />;
      break;
    case logo === "TOR":
      logos = <NBAIcons.TOR size={60} />;
      break;
    case logo === "UTA":
      logos = <NBAIcons.UTA size={60} />;
      break;
    case logo === "WAS":
      logos = <NBAIcons.WAS size={60} />;
      break;
    default:
      logos = null;
  }
  return <span>{logos}</span>;
};

export const LargeLogo = ({ logo }) => {
  let LargeLogo = null;
  switch (true) {
    case logo === "ATL":
      LargeLogo = <NBAIcons.ATL size={120} />;
      break;
    case logo === "BKN":
      LargeLogo = <NBAIcons.BKN size={120} />;
      break;
    case logo === "BOS":
      LargeLogo = <NBAIcons.BOS size={120} />;
      break;
    case logo === "CHA":
      LargeLogo = <NBAIcons.CHA size={120} />;
      break;
    case logo === "CHI":
      LargeLogo = <NBAIcons.CHI size={120} />;
      break;
    case logo === "CLE":
      LargeLogo = <NBAIcons.CLE size={120} />;
      break;
    case logo === "DAL":
      LargeLogo = <NBAIcons.DAL size={120} />;
      break;
    case logo === "DEN":
      LargeLogo = <NBAIcons.DEN size={120} />;
      break;
    case logo === "DET":
      LargeLogo = <NBAIcons.DET size={120} />;
      break;
    case logo === "GSW":
      LargeLogo = <NBAIcons.GSW size={120} />;
      break;
    case logo === "HOU":
      LargeLogo = <NBAIcons.HOU size={120} />;
      break;
    case logo === "IND":
      LargeLogo = <NBAIcons.IND size={120} />;
      break;
    case logo === "LAC":
      LargeLogo = <NBAIcons.LAC size={120} />;
      break;
    case logo === "LAL":
      LargeLogo = <NBAIcons.LAL size={120} />;
      break;
    case logo === "MEM":
      LargeLogo = <NBAIcons.MEM size={120} v />;
      break;
    case logo === "MIA":
      LargeLogo = <NBAIcons.MIA size={120} />;
      break;
    case logo === "MIL":
      LargeLogo = <NBAIcons.MIL size={120} />;
      break;
    case logo === "MIN":
      LargeLogo = <NBAIcons.MIN size={120} />;
      break;
    case logo === "NOP":
      LargeLogo = <NBAIcons.NOP size={120} />;
      break;
    case logo === "NYK":
      LargeLogo = <NBAIcons.NYK size={120} />;
      break;
    case logo === "OKC":
      LargeLogo = <NBAIcons.OKC size={120} />;
      break;
    case logo === "ORL":
      LargeLogo = <NBAIcons.ORL size={120} />;
      break;
    case logo === "PHI":
      LargeLogo = <NBAIcons.PHI size={120} />;
      break;
    case logo === "PHX":
      LargeLogo = <NBAIcons.PHX size={120} />;
      break;
    case logo === "POR":
      LargeLogo = <NBAIcons.POR size={120} />;
      break;
    case logo === "SAC":
      LargeLogo = <NBAIcons.SAC size={120} />;
      break;
    case logo === "SAS":
      LargeLogo = <NBAIcons.SAS size={120} />;
      break;
    case logo === "TOR":
      LargeLogo = <NBAIcons.TOR size={120} />;
      break;
    case logo === "UTA":
      LargeLogo = <NBAIcons.UTA size={120} />;
      break;
    case logo === "WAS":
      LargeLogo = <NBAIcons.WAS size={120} />;
      break;
    default:
      LargeLogo = null;
  }
  return <span>{LargeLogo}</span>;
};

export const SuperLogo = ({ logo }) => {
  let SuperLogo = null;
  switch (true) {
    case logo === "ATL":
      SuperLogo = <NBAIcons.ATL size={200} />;
      break;
    case logo === "BKN":
      SuperLogo = <NBAIcons.BKN size={200} />;
      break;
    case logo === "BOS":
      SuperLogo = <NBAIcons.BOS size={200} />;
      break;
    case logo === "CHA":
      SuperLogo = <NBAIcons.CHA size={200} />;
      break;
    case logo === "CHI":
      SuperLogo = <NBAIcons.CHI size={200} />;
      break;
    case logo === "CLE":
      SuperLogo = <NBAIcons.CLE size={200} />;
      break;
    case logo === "DAL":
      SuperLogo = <NBAIcons.DAL size={200} />;
      break;
    case logo === "DEN":
      SuperLogo = <NBAIcons.DEN size={200} />;
      break;
    case logo === "DET":
      SuperLogo = <NBAIcons.DET size={200} />;
      break;
    case logo === "GSW":
      SuperLogo = <NBAIcons.GSW size={200} />;
      break;
    case logo === "HOU":
      SuperLogo = <NBAIcons.HOU size={200} />;
      break;
    case logo === "IND":
      SuperLogo = <NBAIcons.IND size={200} />;
      break;
    case logo === "LAC":
      SuperLogo = <NBAIcons.LAC size={200} />;
      break;
    case logo === "LAL":
      SuperLogo = <NBAIcons.LAL size={200} />;
      break;
    case logo === "MEM":
      SuperLogo = <NBAIcons.MEM size={200} v />;
      break;
    case logo === "MIA":
      SuperLogo = <NBAIcons.MIA size={200} />;
      break;
    case logo === "MIL":
      SuperLogo = <NBAIcons.MIL size={200} />;
      break;
    case logo === "MIN":
      SuperLogo = <NBAIcons.MIN size={200} />;
      break;
    case logo === "NOP":
      SuperLogo = <NBAIcons.NOP size={200} />;
      break;
    case logo === "NYK":
      SuperLogo = <NBAIcons.NYK size={200} />;
      break;
    case logo === "OKC":
      SuperLogo = <NBAIcons.OKC size={200} />;
      break;
    case logo === "ORL":
      SuperLogo = <NBAIcons.ORL size={200} />;
      break;
    case logo === "PHI":
      SuperLogo = <NBAIcons.PHI size={200} />;
      break;
    case logo === "PHX":
      SuperLogo = <NBAIcons.PHX size={200} />;
      break;
    case logo === "POR":
      SuperLogo = <NBAIcons.POR size={200} />;
      break;
    case logo === "SAC":
      SuperLogo = <NBAIcons.SAC size={200} />;
      break;
    case logo === "SAS":
      SuperLogo = <NBAIcons.SAS size={200} />;
      break;
    case logo === "TOR":
      SuperLogo = <NBAIcons.TOR size={200} />;
      break;
    case logo === "UTA":
      SuperLogo = <NBAIcons.UTA size={200} />;
      break;
    case logo === "WAS":
      SuperLogo = <NBAIcons.WAS size={200} />;
      break;
    default:
      SuperLogo = null;
  }
  return <span>{SuperLogo}</span>;
};
