import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenu from '../components/main-menu';

const AppNavigator = createStackNavigator(
    {
        Home: MainMenu,
    },
    {
        initialRouteName: "Home",
        headerMode: 'none' 
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;