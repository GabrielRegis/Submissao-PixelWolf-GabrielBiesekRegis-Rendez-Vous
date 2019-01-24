import { ApplicationStyles, Colors } from '../../Themes/index';
import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

export default {
    ...ApplicationStyles.screen,
    imageButtonIcon: {
        width: '50px',
        height: '50px'
    } as ImageStyle,
    defaultIcon: {
        fontSize: 30,
        color: Colors.colors.rendezvousWhite
    } as TextStyle
};
