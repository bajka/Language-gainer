import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenu from '../components/main-menu';
import LoginPage from '../components/login-page';

const AppNavigator = createStackNavigator(
    {
        Home: MainMenu,
        Login: LoginPage
    },
    {
        initialRouteName: "Login",
        headerMode: 'none' 
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;