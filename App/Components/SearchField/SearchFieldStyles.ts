import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    searchFieldContainer: {
        borderRadius: 40,
        backgroundColor: Colors.colors.rendezvousWhite,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    } as ViewStyle,
    searchIcon: {
        fontSize: 20,
        color: Colors.colors.rendezvousGunmetal
    } as TextStyle,
    searchFieldText: {
        fontFamily: Fonts.defaultFont,
        color: Colors.colors.rendezvousGunmetal
    } as TextStyle
};
