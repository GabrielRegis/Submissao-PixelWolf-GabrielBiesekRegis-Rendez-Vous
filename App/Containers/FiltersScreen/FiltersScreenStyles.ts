import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    navbar: {
        width: '100%',
        height: 72,
        justifyContent: 'space-between',
        paddingVertical: 0,
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
