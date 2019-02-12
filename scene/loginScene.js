import React, {Component} from 'react';
import{
	TouchableOpacity,
	StyleSheet,
	TextInput,
	View,
	Text,
	Alert,
	Button
}from 'react-native';

export default class LoginScene extends Component{

	userName= '';
	passWord='';

	/**when value in inputBox changed, save changed value
	*/
	onUserNameChanged = (newUserName) => {
		console.log(newUserName);
		this.userName = newUserName;
	};

	onPasswordChanged = (newPassword) => {
		console.log(newPassword);
		this.passWord = newPassword;
	};

	// click background to let input box lose fources
	blurTextInput =() => {
		this.refs.userName.blur();
		this.refs.passWord.blur();
	}
	//login button, check whether user id and passWord correct
	login =() =>{
		if(this.userName == 'Admin' && this.passWord == '123456'){
			this.refs.userName.blur();
			this.refs.passWord.blur();
			const {navigate} = this.props.navigation;
			navigate('Home');
		}else{
			Alert.alert("Wrong Name or Password");
		}
	};

	register = () => {
		const {navigate} = this.props.navigation;
		navigate('Register');
	}

	render(){
		return (
			<TouchableOpacity	//using touchable opacity as background
				activeOpacity={1.0}	//when clicked change active 
				onPress={this.blurTextInput} //add click event
				style={styles.container}>
				<View
					style={styles.inputBox}>
					<TextInput
						ref="username"
						onChangeText={this.onUserNameChanged} //add value changing event
						style={styles.input}
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						placeholderTextColor ={'#ccc'}
						placeholder={'User ID'}
					/>
				</View>
				<View
					style={styles.inputBox}>
					<TextInput
						ref="password"
						onChangeText={this.onPasswordChanged} //add value changing event
						style={styles.input}
						autoCapitalize='none' //cancel first letter capital
						underlineColorAndroid={'transparent'} //cancel under line
						secureTextEntry={true}
						placeholderTextColor ={'#ccc'}
						placeholder={'Password'}
					/>
				</View>
				<TouchableOpacity
				onPress={this.login} //add click event
					style={styles.button}>
					<Text
						style={styles.btText}>Login In</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}>
					<Text
						style={styles.btText}>Regist</Text>
				</TouchableOpacity>
			</TouchableOpacity>
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
	input:{
		width:200,
		height:40,
		fontSize:20,
		color: '#fff',
	},
	inputBox:{
		flexDirection:'row',
		justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginBottom: 8,
    },
    button:{
    	height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#58812F',
        marginTop: 20,
    },
    btText:{
    	color: '#fff',
    	fontSize: 20,
    }
});
