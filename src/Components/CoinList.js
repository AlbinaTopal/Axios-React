import React from 'react';
import axios from 'axios';

export default class CoinList extends React.Component{
	
constructor(){
	super();
	this.state = {
		search: '',
		coins:[]
	}
}
updateSearch(event){
	this.setState({
		search:event.target.value.substr(0,20).toUpperCase()
	})
}

	componentDidMount(){
		axios.get('https://api.coinmarketcap.com/v1/ticker/')
			.then(res =>{
				console.log(res);
				this.setState({coins: res.data})
			})
		 .catch(function (error) {
		    console.log(error);
		  });
	}


render() {
	return(
	<div>
	<input type="text"  value={this.state.search} 
	onChange={this.updateSearch.bind(this)}/>
	 	<ul>{this.state.coins.filter(x => x.symbol.includes(this.state.search)).map(x => <li>{"COIN SYMBOL: " + x.symbol}{" COIN PRICE: " + x.price_usd +"$"}</li>)} </ul>
	</div>
	
		)
	}

	
		
}