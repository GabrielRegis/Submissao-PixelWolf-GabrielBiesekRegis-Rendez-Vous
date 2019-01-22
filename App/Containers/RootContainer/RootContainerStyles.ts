import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes/index';

export default {
    applicationView: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.colors.background
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center'
    },
    myImage: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    }
};
