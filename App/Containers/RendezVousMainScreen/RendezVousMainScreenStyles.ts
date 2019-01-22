import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from '../../Themes/index';

export default {
    ...ApplicationStyles.screen,
    fullContainer: {
        ...ApplicationStyles.screen.fullContainer,
        backgroundColor: Colors.colors.rendezvousGunmetal
    } as ViewStyle,
    todoContainer: {
        borderRadius: 5,
        minHeight: 90,
        width: '100%',
        backgroundColor: Colors.colors.rendezvousWhite,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden'
    } as ViewStyle,
    marker: {
        minHeight: 90,
        height: '100%',
        width: 15,
        backgroundColor: Colors.colors.randezvousOrange
    } as ViewStyle,
    todoLeftContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        width: '50%'
    } as ViewStyle,
    todoRightContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    todoTitleText: {
        fontFamily: Fonts.defaultFont,
        textAlign: 'left',
        fontSize: 20
    } as TextStyle,
    todoDateText: {
        fontFamily: Fonts.defaultFont,
        textAlign: 'left',
        fontSize: 14
    } as TextStyle,
    todoCategoryIcon: {
        fontSize: 25
    }
};
