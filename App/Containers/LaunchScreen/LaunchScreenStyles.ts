import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    titleText: {
        fontFamily: Fonts.defaultFont,
        fontSize: 22,
        color: Colors.colors.rendezvousGunmetal
    } as TextStyle
};
