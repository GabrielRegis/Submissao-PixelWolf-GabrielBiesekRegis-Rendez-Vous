import { ViewStyle } from 'react-native';
import { ApplicationStyles, Colors } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    checkboxContainer: {
        width: 40,
        height: 40,
        borderRadius: 4,
        backgroundColor: Colors.colors.rendezvousSilentGrey
    } as ViewStyle,
    checkboxCheck: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: Colors.colors.rendezvousGunmetal,
        opacity: 0
    } as ViewStyle
};
