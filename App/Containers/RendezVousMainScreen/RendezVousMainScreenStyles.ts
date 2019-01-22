import { StyleSheet, ViewStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    fullContainer: {
        ...ApplicationStyles.screen.fullContainer,
        backgroundColor: Colors.colors.rendezvousGunmetal
    } as ViewStyle
};
