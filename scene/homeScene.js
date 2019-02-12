import React, {Component} from 'react';
import{
	StyleSheet,
	View,
	Text,
	Button
}from 'react-native';

export default class HomeScene extends Component{

	backToLogin =() =>{
		const {goBack} = this.props.navigation;
		goBack();
	}

	render(){
		return(
			<View
				style={styles.container}>
				<Text
					style ={styles.content}
				>LoginIn Successfully! This is main page!</Text>
				<Button
					onPress={this.backToLogin}
					style={styles.button}
					title='Log Out'/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	content:{
		fontSize:40,
	},
});