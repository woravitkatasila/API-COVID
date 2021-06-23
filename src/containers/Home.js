import React, { Component } from "react";
import Header from "../components/Header";
import Moniter from "../components/Home/Moniter";
import Moniter2 from "../components/Home/Moniter2";
import Load from "../components/Load";
import axios from "axios";

class Home extends Component {
	 
	constructor(props) {
		super(props);
		this.state = {dataCovid:[],dataList:[]};  //state

	}
	componentDidMount() {
		this.getData().then(res =>{ 
			this.setState((state, props) => ({
				dataCovid: res.data,
				dataList:["NewConfirmed","TotalConfirmed","NewRecovered","TotalRecovered","NewDeaths","TotalDeaths"]
			  }));
			});
	}

     getData =()=>axios.get("https://api.covid19api.com/summary")

	render() {
	
		return(

		(this.state.dataCovid.length ===0)?
				<Load />
				: 
			<div>
				<Header />
				<Moniter data={this.state.dataCovid}/> 
				<Moniter2 data={this.state.dataCovid} list={this.state.dataList}/> 
			</div>
		)
	}
}

  export default Home
