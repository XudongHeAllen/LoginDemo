/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
//import App from './scene/App';
import RegisterScene from './scene/registerScene.js'
import {name as appName} from './app.json';

//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => RegisterScene);