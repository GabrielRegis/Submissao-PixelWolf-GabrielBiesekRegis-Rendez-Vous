import { TextStyle, ViewStyle, StyleProp, ImageStyle } from 'react-native';
import RF from 'react-native-responsive-fontsize';
import Colors from './Colors';
import Fonts from './Fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// Funcionamento similar ao BOOTSTRAP

export default {
    // Todos os estilos de view
    screen: {
        // Border
        border1: {
            borderWidth: 1
        } as ViewStyle,

        border2: {
            borderWidth: 2
        } as ViewStyle,

        border3: {
            borderWidth: 3
        } as ViewStyle,

        border5: {
            borderWidth: 5
        } as ViewStyle,

        // Flex
        flex1: {
            flex: 1
        } as ViewStyle,
        flex2: {
            flex: 2
        } as ViewStyle,
        flex3: {
            flex: 3
        } as ViewStyle,
        flex4: {
            flex: 4
        } as ViewStyle,

        // Containers
        fullContainer: {
            width: '100%',
            height: '100%'
        } as ViewStyle,

        fullHeightContainer: {
            height: '100%'
        } as ViewStyle,

        fullWidthContainer: {
            width: '100%'
        } as ViewStyle,

        halfWidthContainer: {
            width: '50%',
            height: '100%'
        } as ViewStyle,

        halfHeightContainer: {
            width: '100%',
            height: '50%'
        } as ViewStyle,
        halfContainer: {
            width: '100%',
            height: '50%'
        } as ViewStyle,
        whiteContainer: {
            backgroundColor: Colors.colors.white
        } as ViewStyle,

        // Regular Padding
        padding: {
            padding: responsiveWidth(8)
        } as ViewStyle,
        verticalPadding: {
            paddingVertical: responsiveWidth(8)
        } as ViewStyle,
        paddingHorizontal: {
            paddingHorizontal: responsiveWidth(8)
        } as ViewStyle,
        paddingBottom: {
            paddingBottom: responsiveWidth(8)
        } as ViewStyle,
        paddingTop: {
            paddingTop: responsiveWidth(8)
        } as ViewStyle,
        paddingLeft: {
            paddingLeft: responsiveWidth(8)
        } as ViewStyle,
        paddingRight: {
            paddingRight: responsiveWidth(8)
        } as ViewStyle,

        // Small Padding
        smallPadding: {
            padding: responsiveWidth(3)
        } as ViewStyle,
        smallVerticalPadding: {
            paddingVertical: responsiveWidth(3)
        } as ViewStyle,
        smallPaddingHorizontal: {
            paddingHorizontal: responsiveWidth(3)
        } as ViewStyle,
        smallPaddingBottom: {
            paddingBottom: responsiveWidth(3)
        } as ViewStyle,
        smallPaddingTop: {
            paddingTop: responsiveWidth(3)
        } as ViewStyle,
        smallPaddingLeft: {
            paddingLeft: responsiveWidth(3)
        } as ViewStyle,
        smallPaddingRight: {
            paddingRight: responsiveWidth(3)
        } as ViewStyle,

        // XSmall Padding
        xSmallPadding: {
            padding: responsiveWidth(1)
        } as ViewStyle,
        xSmallVerticalPadding: {
            paddingVertical: responsiveWidth(1)
        } as ViewStyle,
        xSmallPaddingHorizontal: {
            paddingHorizontal: responsiveWidth(1)
        } as ViewStyle,
        xSmallPaddingBottom: {
            paddingBottom: responsiveWidth(1)
        } as ViewStyle,
        xSmallPaddingTop: {
            paddingTop: responsiveWidth(1)
        } as ViewStyle,
        xSmallPaddingLeft: {
            paddingLeft: responsiveWidth(1)
        } as ViewStyle,
        xSmallPaddingRight: {
            paddingRight: responsiveWidth(1)
        } as ViewStyle,

        // Regular Margin
        margin: {
            margin: responsiveWidth(8)
        } as ViewStyle,
        marginVertical: {
            marginVertical: responsiveWidth(8)
        } as ViewStyle,
        marginHorizontal: {
            marginHorizontal: responsiveWidth(8)
        } as ViewStyle,
        marginBottom: {
            marginBottom: responsiveWidth(8)
        } as ViewStyle,
        marginTop: {
            marginTop: responsiveWidth(8)
        } as ViewStyle,
        marginLeft: {
            marginLeft: responsiveWidth(8)
        } as ViewStyle,
        marginRight: {
            marginRight: responsiveWidth(8)
        } as ViewStyle,

        // Small Margin
        smallMargin: {
            margin: responsiveWidth(3)
        } as ViewStyle,
        smallMarginVertical: {
            marginVertical: responsiveWidth(3)
        } as ViewStyle,
        smallMarginHorizontal: {
            marginHorizontal: responsiveWidth(3)
        } as ViewStyle,
        smallMarginBottom: {
            marginBottom: responsiveWidth(3)
        } as ViewStyle,
        smallMarginTop: {
            marginTop: responsiveWidth(3)
        } as ViewStyle,
        smallMarginLeft: {
            marginLeft: responsiveWidth(3)
        } as ViewStyle,
        smallMarginRight: {
            marginRight: responsiveWidth(3)
        } as ViewStyle,

        // XSmall Margin
        xSmallMargin: {
            margin: responsiveWidth(1)
        } as ViewStyle,
        xSmallMarginVertical: {
            marginVertical: responsiveWidth(1)
        } as ViewStyle,
        xSmallMarginHorizontal: {
            marginHorizontal: responsiveWidth(1)
        } as ViewStyle,
        xSmallMarginBottom: {
            marginBottom: responsiveWidth(1)
        } as ViewStyle,
        xSmallMarginTop: {
            marginTop: responsiveWidth(1)
        } as ViewStyle,
        xSmallMarginLeft: {
            marginLeft: responsiveWidth(1)
        } as ViewStyle,
        xSmallMarginRight: {
            marginRight: responsiveWidth(1)
        } as ViewStyle,

        // FlexDirection
        row: {
            flexDirection: 'row'
        } as ViewStyle,
        column: {
            flexDirection: 'column'
        } as ViewStyle,

        // Common Align and Justify
        spaceBetween: {
            justifyContent: 'space-between'
        } as ViewStyle,
        spaceAround: {
            justifyContent: 'space-around'
        } as ViewStyle,

        // AlignAndJustify Rows
        upAlignedRow: {
            flexDirection: 'row',
            alignItems: 'flex-start'
        } as ViewStyle,
        botAlignedRow: {
            flexDirection: 'row',
            alignItems: 'flex-end'
        } as ViewStyle,

        verticalCenterAlignedRow: {
            flexDirection: 'row',
            alignItems: 'center'
        } as ViewStyle,

        leftAlignedRow: {
            flexDirection: 'row',
            justifyContent: 'flex-start'
        } as ViewStyle,
        rightAlignedRow: {
            flexDirection: 'row',
            justifyContent: 'flex-end'
        } as ViewStyle,
        horizontalCenterAlignedRow: {
            flexDirection: 'row',
            justifyContent: 'center'
        } as ViewStyle,

        // AlignAndJustify Columns
        upAlignedColumn: {
            flexDirection: 'column',
            justifyContent: 'flex-start'
        } as ViewStyle,
        botAlignedColumn: {
            flexDirection: 'column',
            justifyContent: 'flex-end'
        } as ViewStyle,
        verticalCenterAlignedColumn: {
            flexDirection: 'column',
            justifyContent: 'center'
        } as ViewStyle,
        leftAlignedColumn: {
            flexDirection: 'column',
            alignItems: 'flex-start'
        } as ViewStyle,
        rightAlignedColumn: {
            flexDirection: 'column',
            alignItems: 'flex-end'
        } as ViewStyle,
        horizontalCenterAlignedColumn: {
            flexDirection: 'column',
            alignItems: 'center'
        } as ViewStyle,
        positionAbsolute: {
            position: 'absolute'
        } as ViewStyle,
        shadowView: {
            shadowColor: Colors.colors.black,
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 1,
            borderColor: 'transparent',
            borderWidth: 1
        } as ViewStyle,
        shadowView2: {
            shadowColor: Colors.colors.black,
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 1,
            borderColor: 'transparent',
            borderWidth: 1
        } as ViewStyle,
        shadowView3: {
            shadowColor: Colors.colors.black,
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 1,
            borderColor: 'transparent',
            borderWidth: 0
        } as ViewStyle,
        modalBackground: {
            backgroundColor: Colors.colors.black,
            height: responsiveHeight(100),
            width: responsiveWidth(100),
            position: 'absolute',
            opacity: 0,
            zIndex: 0
        } as ViewStyle,
        transparentView: {
            backgroundColor: Colors.colors.black,
            opacity: 0
        } as ViewStyle,
        centeredRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        } as ViewStyle,
        simpleRow: {
            flexDirection: 'row'
        } as ViewStyle,
        justifyLeft: {
            justifyContent: 'flex-start'
        } as ViewStyle,
        justifyRight: {
            justifyContent: 'flex-end'
        } as ViewStyle,
        alignLeft: {
            alignItems: 'flex-start'
        } as ViewStyle,
        alignRight: {
            alignItems: 'flex-end'
        } as ViewStyle,
        leftAligned: {
            alignSelf: 'flex-start'
        } as ViewStyle,
        rightAligned: {
            alignSelf: 'flex-end'
        } as ViewStyle,
        centeredColumn: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        } as ViewStyle,
        topCenteredColumn: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: responsiveWidth(90)
        } as ViewStyle,

        topAligned: {
            justifyContent: 'flex-start'
        } as ViewStyle,
        backgroundContainer: {
            width: '100%',
            height: '100%',
            backgroundColor: Colors.colors.white,
            padding: '3%',
            alignItems: 'center',
            overflow: 'visible'
        } as ViewStyle,
        cleanBackgroundContainer: {
            width: '100%',
            height: '100%',
            backgroundColor: Colors.colors.clear,
            padding: '3%',
            alignItems: 'center'
        } as ViewStyle,
        headerView: {
            marginTop: responsiveWidth(3),
            marginBottom: responsiveWidth(8)
        } as ViewStyle,
        firstHeaderView: {
            marginTop: responsiveWidth(5),
            marginBottom: responsiveWidth(5)
        } as ViewStyle,
        foregroundContainer: {
            width: '100%',
            height: '100%',
            margin: '3%',
            alignItems: 'center'
        } as ViewStyle,
        mainContainer: {
            flex: 1,
        } as ViewStyle,
        textInputView: {
            width: responsiveWidth(85),
            marginBottom: responsiveWidth(2)
        } as ViewStyle,
        touchableView: {
            width: '100%',
            height: '100%'
        } as ViewStyle,
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: Colors.colors.white
        } as ViewStyle,
        titleScreenText: {
            fontFamily: 'Arial',
            fontSize: 18,
            lineHeight: 28,
            color: Colors.colors.greyish_brown_87
        } as TextStyle
    },

    texts: {
        textAlignVerticalCenter: {
            textAlignVertical: 'center'
        } as TextStyle,
        textAlignUp: {
            textAlignVertical: 'top'
        } as TextStyle,
        textAlignBottom: {
            textAlignVertical: 'bottom'
        } as TextStyle,
        textAlignLeft: {
            textAlign: 'left'
        } as TextStyle,
        textAlignRight: {
            textAlign: 'right'
        } as TextStyle,
        textAlignHorizontalCenter: {
            textAlign: 'center'
        } as TextStyle,

        // Regular
        giantInputText: {
            fontFamily: Fonts.defaultFont,
            fontSize: RF(3.5) < 24 && RF(3.5) > 20 ? RF(3.5) : 24,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        bigInputText: {
            fontFamily: Fonts.defaultFont,
            fontSize: RF(2.5) < 16 && RF(2.5) > 14 ? RF(2.5) : 16,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        regularInputText: {
            fontFamily: Fonts.defaultFont,
            fontSize: RF(1.2) < 14 && RF(1.2) > 12 ? RF(1.2) : 14,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        smallInputText: {
            fontFamily: Fonts.defaultFont,
            fontSize: RF(1.0) < 12 && RF(1.0) > 10 ? RF(1.0) : 12,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        xSmallInputText: {
            fontFamily: Fonts.defaultFont,
            fontSize: RF(0.8) < 10 && RF(0.8) > 8 ? RF(0.8) : 10,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,

        // Bold
        giantBoldText: {
            fontFamily: Fonts.defaultBoldFont,
            fontSize: RF(3.5) < 24 && RF(3.5) > 20 ? RF(3.5) : 24,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        bigBoldText: {
            fontFamily: Fonts.defaultBoldFont,
            fontSize: RF(2.5) < 16 && RF(2.5) > 14 ? RF(2.5) : 16,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        regularBoldText: {
            fontFamily: Fonts.defaultBoldFont,
            fontSize: RF(1.2) < 14 && RF(1.2) > 12 ? RF(1.2) : 14,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        smallBoldText: {
            fontFamily: Fonts.defaultBoldFont,
            fontSize: RF(1.0) < 12 && RF(1.0) > 10 ? RF(1.0) : 12,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        xSmallBoldText: {
            fontFamily: Fonts.defaultBoldFont,
            fontSize: RF(0.8) < 10 && RF(0.8) > 8 ? RF(0.8) : 10,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,

        // Thin
        giantThinText: {
            fontFamily: Fonts.defaultThinFont,
            fontSize: RF(3.5) < 24 && RF(3.5) > 20 ? RF(3.5) : 24,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        bigThinText: {
            fontFamily: Fonts.defaultThinFont,
            fontSize: RF(2.5) < 16 && RF(2.5) > 14 ? RF(2.5) : 16,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        regularThinText: {
            fontFamily: Fonts.defaultThinFont,
            fontSize: RF(1.2) < 14 && RF(1.2) > 12 ? RF(1.2) : 14,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        smallThinText: {
            fontFamily: Fonts.defaultThinFont,
            fontSize: RF(1.0) < 12 && RF(1.0) > 10 ? RF(1.0) : 12,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,
        xSmallThinText: {
            fontFamily: Fonts.defaultThinFont,
            fontSize: RF(0.8) < 10 && RF(0.8) > 8 ? RF(0.8) : 10,
            color: Colors.colors.black,
            textAlignVertical: 'center'
        } as TextStyle,

        // Decorations
        underlinedText: {
            textDecorationLine: 'underline'
        } as TextStyle
    }
};
