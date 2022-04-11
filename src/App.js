import React, { Component } from 'react';
import Web3 from 'web3'
import './App.css';
import Datepicker from 'react-datepicker';

import bet from './abis/bet.json'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Games from "./components/Games";
import Teams from "./components/AllTeams/team";
import OneTeam from "./components/OneTeam/oneTeam";
import GameStats from "./components/GameStats/gameStats";
import AllPlayers from "./components/AllPlayers/players";
import PlayerStats from "./components/PlayerStats/playerStats";
import NotFound404 from "./components/404/404";
class App extends Component {

  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  
  async loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
        window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = bet.networks[networkId]
    if (networkData) {
      const Bet = web3.eth.Contract(bet.abi, networkData.address)
      console.log(networkData.address)
      this.setState({ Bet })
    

      this.setState({ loading: false })

    } else {
      window.alert("Bet contract not deployed to detected network")
    }

  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      totalBetMoney: 0,
      loading: true,
    }

    this.createBet = this.createBet.bind(this)
    this.teamWinDistribution = this.teamWinDistribution.bind(this)

  }

  async teamWinDistribution(teamId) {
    this.setState({ loading: true })
    var totalBets = await this.state.Bet.methods.totalBetMoney().call()
    totalBets = Number(totalBets)

    this.state.Bet.methods.teamWinDistribution(teamId).send( { from: this.state.account, value: window.web3.utils.toBN(totalBets)})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  createBet(name, teamId, betAmount) {
    this.setState({ loading: true })
    this.state.Bet.methods.createBet(name, teamId).send( { from: this.state.account, value: betAmount})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  
  render() {
    
    return (
      <Router>
      <div className="App">
      <div>
        
        <Navbar account={this.state.account}  />
        
          
        </div>
        <ul className="links">
            
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/players/">Players</Link>
            </li>
            <li>
              Standings
            </li>
            
            </ul>
       
            
  
            
          <Switch>
            <Route exact path="/" component={Games} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/teams/:id" component={OneTeam} />
            <Route exact path="/games/" component={GameStats } />
            
            <Route exact path="/players/" component={AllPlayers} />
            <Route exact path="/players/:id" component={PlayerStats} />
            <Route component={NotFound404} />
          </Switch>
          
          
      </div>
      
     
   
      </Router>
      
    );
  }
}

export default App;
