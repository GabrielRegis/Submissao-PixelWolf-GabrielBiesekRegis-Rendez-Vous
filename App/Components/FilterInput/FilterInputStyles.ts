import { ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    filterLabelText: {
        fontFamily: Fonts.defaultFont,
        fontSize: 16,
        color: Colors.colors.rendezvousGunmetal
    }
};
