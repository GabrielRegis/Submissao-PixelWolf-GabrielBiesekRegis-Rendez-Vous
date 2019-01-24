import { ViewStyle, TextStyle, Platform, Dimensions } from 'react-native';
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
    filterTypeText: {
        fontFamily: Fonts.defaultFont,
        fontSize: 18,
        color: Colors.colors.rendezvousRed
    } as TextStyle
};
