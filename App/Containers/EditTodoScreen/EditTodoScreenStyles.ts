import { ViewStyle, TextStyle, Dimensions, Platform } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

const { width, height } = Dimensions.get('window');

export default {
    ...ApplicationStyles.screen,
    navbar: {
        width: '100%',
        height: Platform.OS === 'ios' && height > 800 ? 120 : 85,
        justifyContent: 'space-between',
        paddingVertical: 0,
        paddingTop: Platform.OS === 'ios' && height > 800 ? 50 : 20,
        backgroundColor: Colors.colors.rendezvousRed
    } as ViewStyle,
    navbarText: {
        fontFamily: Fonts.defaultFont,
        color: Colors.colors.rendezvousWhite,
        fontSize: 22
    } as TextStyle,
    navbarIconButton: {
        color: Colors.colors.rendezvousWhite,
        fontSize: 25
    } as TextStyle,
    iconButton: {
        fontSize: 45
    } as TextStyle,
    saveButton: {
        width: '80%',
        height: 56,
        backgroundColor: Colors.colors.rendezvousRed,
        borderRadius: 4
    } as ViewStyle,
    saveButtonText: {
        fontFamily: Fonts.defaultFont,
        fontSize: 20,
        color: Colors.colors.rendezvousWhite
    } as TextStyle,
    datePicker: {
        backgroundColor: Colors.colors.rendezvousWhite
    } as ViewStyle,
    scrollContainer: {
        height: 550
    } as ViewStyle
};
