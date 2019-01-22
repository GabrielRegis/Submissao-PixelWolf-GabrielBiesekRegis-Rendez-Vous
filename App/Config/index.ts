import DebugConfig from './DebugConfig';

if (__DEV__) {
    console.disableYellowBox = !DebugConfig.yellowBox;
}
