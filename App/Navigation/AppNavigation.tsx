import { StackNavigator } from 'react-navigation';
import { Colors } from '../Themes/index';
import styles from './Styles/NavigationStyles';
import RendezVousMainScreen from '../Containers/RendezVousMainScreen/RendezVousMainScreen';
import I18n from '../I18n/I18n';
import EditTodoScreen from '../Containers/EditTodoScreen/EditTodoScreen';
import FiltersScreen from '../Containers/FiltersScreen/FiltersScreen';
import TutorialScreen from '../Containers/TutorialScreen/TutorialScreen';
import { LaunchScreen } from '../Containers/LaunchScreen/LaunchScreen';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
    {
        RendezVousMainScreen: {
            screen: RendezVousMainScreen,
            navigationOptions: {
                header: null,
                headerBackTitle: null
            }
        },
        EditTodoScreen: {
            screen: EditTodoScreen,
            navigationOptions: {
                header: null,
                headerBackTitle: null
            }
        },
        FiltersScreen: {
            screen: FiltersScreen,
            navigationOptions: {
                header: null,
                headerBackTitle: null
            }
        },
        TutorialScreen: {
            screen: TutorialScreen,
            navigationOptions: {
                header: null,
                headerBackTitle: null
            }
        },
        LaunchScreen: {
            screen: LaunchScreen,
            navigationOptions: {
                header: null,
                headerBackTitle: null
            }
        }
    },
    {
        // Default config for all screens
        headerMode: 'screen',
        initialRouteName: 'LaunchScreen'
    }
);

export default PrimaryNav;
