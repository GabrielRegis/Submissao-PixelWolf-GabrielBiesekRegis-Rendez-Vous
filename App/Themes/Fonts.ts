import { Platform } from 'react-native';

const fontFamilies = {
    caviarDreams: Platform.OS === 'ios' ? 'CaviarDreams' : 'CaviarDreams',
    roboto: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto-Regular',
    robotoThin: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto-Regular',
    robotoBold: Platform.OS === 'ios' ? 'Roboto-Bold' : 'Roboto-Bold'
};

const defaultFont = fontFamilies.caviarDreams;
const defaultBoldFont = fontFamilies.robotoBold;
const defaultThinFont = fontFamilies.robotoThin;

export default {
    fontFamilies,
    defaultFont,
    defaultBoldFont,
    defaultThinFont
};
