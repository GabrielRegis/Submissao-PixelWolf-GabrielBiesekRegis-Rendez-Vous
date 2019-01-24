import { ViewStyle, TextStyle, Dimensions, Platform } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

const { width, height } = Dimensions.get('window');

export default {
    ...ApplicationStyles.screen,
    fullContainer: {
        ...ApplicationStyles.screen.fullContainer,
        backgroundColor: Colors.colors.rendezvousGunmetal,
        paddingTop: Platform.OS === 'ios' && height > 800 ? 50 : 25
    } as ViewStyle,
    addTodoButton: {
        borderRadius: 5,
        height: 90,
        width: '100%',
        backgroundColor: Colors.colors.rendezvousSilentGrey,
        marginTop: 10
    } as ViewStyle,
    addTodoButtonText: {
        fontFamily: Fonts.defaultFont,
        fontSize: 40,
        color: Colors.colors.rendezvousGunmetal
    } as TextStyle
};
