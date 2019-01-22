import { StackNavigator } from 'react-navigation';
import { Colors } from '../Themes/index';
import styles from './Styles/NavigationStyles';
import RendezVousMainScreen from '../Containers/RendezVousMainScreen/RendezVousMainScreen';
import I18n from '../I18n/I18n';

// Manifest of possible screens
const PrimaryNav = StackNavigator(
    {
        RendezVousMainScreen: {
            screen: RendezVousMainScreen,
            navigationOptions: {
                header: null,
                headerBackTitle: null
            }
        }
    },
    {
        // Default config for all screens
        headerMode: 'screen',
        initialRouteName: 'RendezVousMainScreen'
    }
);

export default PrimaryNav;
