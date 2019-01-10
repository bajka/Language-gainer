import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainMenu from '../components/main-menu/main-menu';
import LoginPage from '../components/login/login-page';
import RemindPassword from '../components/login/remind-password';
import NewAccount from '../components/login/new-account';
import WordLearnView from '../components/word-learning/word-learn-view';
import QuizMain from '../components/quiz/quiz-main';
import QuizResult from '../components/quiz/quiz-result';
import CourseMenu from '../components/course-creator/course-menu';
import NewWord from './../components/course-creator/new-words';
import WordsList from '../components/course-creator/words-list';

const AppNavigator = createStackNavigator(
    {
        Home: MainMenu,
        Login: LoginPage,
        NewPassword: RemindPassword,
        NewAccount: NewAccount,
        LearnWord: WordLearnView,
        Quiz: QuizMain,
        QuizResult: QuizResult,
        CourseMenu: CourseMenu,
        AddWords: NewWord,
        WordsList: WordsList
    },
    {
        initialRouteName: "Login",
        headerMode: 'none'
    });

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;