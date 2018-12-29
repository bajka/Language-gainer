import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenu from '../components/main-menu';
import LoginPage from '../components/login-page';
import RemindPassword from '../components/remind-password';
import NewAccount from '../components/new-account';

const AppNavigator = createStackNavigator(
    {
        Home: MainMenu,
        Login: LoginPage,
        NewPassword: RemindPassword,
        NewAccount: NewAccount
    },
    {
        initialRouteName: "Login",
        headerMode: 'none' 
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;