import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

import Forecast from "./Forecast";
import OpenWratherMap from "./open_weathe_map";

class WeatherProject extends Component {
	constructor(props) {
		super(props);
		this.state = {zip:"",forecast:null}
	}
	
	_handleTextChange = event => {
		let zip = event.nativeEvent.text;
		OpenWeatherMap.fetchForecast(zip).then(forecast => {
			this.setState({forecast : forecast}) ;
		});
	};

render() {
	let content = null;
	if(this.state.forecast != null){
		content = (
		<Forecast
			main={this.state.forecast.main}
			description={this.state.forecast.description}
			temp={this.state.forecast.temp}
			></Forecast>
		);
	}
	
	return (
		<View>
			<Image 
				source={require("./flowers.png")}
				resizeMode="cover"
				style={styles.backdrop}
				
		</View>
	)
}
}