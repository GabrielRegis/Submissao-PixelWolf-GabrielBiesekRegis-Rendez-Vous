import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    inputText: {
        fontFamily: Fonts.defaultFont
    } as TextStyle,
    labelText: {
        fontFamily: Fonts.defaultFont,
        fontSize: 20
    } as TextStyle,
    textInputContainer: {
        backgroundColor: Colors.colors.rendezvousSilentGrey,
        borderRadius: 4,
        width: '100%'
    } as ViewStyle,
    textInputContainerError: {
        backgroundColor: Colors.colors.rendezvousRed,
        borderRadius: 4,
        width: '100%'
    } as ViewStyle,
    characterCountContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    } as ViewStyle,
    characterCountLabel: {
        fontFamily: Fonts.defaultFont,
        fontSize: 14
    } as TextStyle
};
