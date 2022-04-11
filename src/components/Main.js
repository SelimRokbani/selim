import React, { Component } from 'react';


import Web3 from 'web3'
import './Main.css';

import bet from 'C:/Users/selim/Desktop/PROJECT BETTING/src/abis/bet.json'




class Main extends Component {

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
        <div class="login-box">

            <h2>Place Bet</h2>
            
            <br></br>

            <form onSubmit={(event) => {
            event.preventDefault()

            // document.getElementById("betamt").innerHTML = this.getTotalBetAmount("0")

            const name = this.userName.value
            const team1 = this.team1.value.toString()
            // const team = window.web3.utils.toWei(this.team.value.toString(), 'Ether')
            const betAmount = window.web3.utils.toWei(this.betAmount.value.toString(), 'Ether')
            this.props.createBet(name, team1, betAmount)
            console.log(name)
            console.log(team1)
            console.log(betAmount)
            console.log(window.web3.utils.toWei("3.4", 'Ether'))
            
            }}>
            <div className="user-box">
                <input
                id="userName"
                type="text"
                ref={(input) => { this.userName = input }}
                className="form-control"
                placeholder="Your Name"
                required />
            </div>
            <div className="user-box">
                <input
                id="team1"
                type="text"
                min="0"
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                ref={(input) => { this.team1 = input }}
                className="form-control"
                placeholder="Team ID [ 0/1 ]"
                required />
            </div>
            <div className="user-box">
                <input
                id="team1"
                type="text"
                min="0"
                ref={(input1) => { this.betAmount = input1 }}
                className="form-control"
                placeholder="Bet Amount in Ether"
                required />
            </div>
            <button type="submit" className="btn btn-primary">Place Bet</button>
            
            </form>
            <br></br>
            <br></br>

            <h1>Make Team Win</h1>

            <br></br>

            <form onSubmit={(event) => {
            event.preventDefault()
            const team = this.team.value
            console.log(team)
            this.props.teamWinDistribution(team)
            
            }}>
            <div className="form-group mr-sm-2">
                <input
                id="team"
                type="number"
                min="0"
                max="1"
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                    }
                }}
                ref={(input) => { this.team = input }}
                className="form-control"
                placeholder="Team ID [ 0/1 ]"
                required />
            </div>
            <button type="submit" className="btn btn-primary">Make Team Win [Only Owner]</button>
            </form>

            <br></br>
            <br></br>

            
        </div>
        
        
        );
    }
}

export default Main;