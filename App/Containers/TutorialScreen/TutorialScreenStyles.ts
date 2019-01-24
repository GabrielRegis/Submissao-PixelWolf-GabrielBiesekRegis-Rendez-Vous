import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    tutorialContainer: {
        width: '100%',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    } as ViewStyle,
    tutorialText: {
        fontFamily: Fonts.defaultFont,
        color: Colors.colors.rendezvousGunmetal,
        width: '80%'
    } as TextStyle,
    tutorialLabelText: {
        fontFamily: Fonts.defaultFont,
        color: Colors.colors.rendezvousBlue,
        fontSize: 25
    } as TextStyle,
    lottieView: {
        height: 300,
        width: 300,
        borderRadius: 6,
        overflow: 'hidden'
    } as ViewStyle,
    paginationDotStyle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.colors.rendezvousGunmetal
    } as ViewStyle,
    paginationInactiveDotStyle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: Colors.colors.rendezvousGrey
    } as ViewStyle,
    paginationContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    } as ViewStyle,
    carouselContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    } as ViewStyle,
    checkIcon: {
        color: Colors.colors.rendezvousBlue
    } as TextStyle,
    gotItText: {
        fontFamily: Fonts.defaultFont,
        color: Colors.colors.rendezvousBlue
    } as TextStyle
};
