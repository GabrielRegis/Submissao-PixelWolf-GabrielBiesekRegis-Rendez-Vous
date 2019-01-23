import * as React from 'react';
import { TouchableOpacity, Image, ImageRequireSource, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import styles from './ImageButtonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export namespace ImageButton {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        style?: ViewStyle | TextStyle | ImageStyle;
        imageSource?: ImageRequireSource;
        iconName?: string;
        imageStyle?: ImageStyle | ImageStyle[];
        iconStyle?: TextStyle | TextStyle[];
        onPress: () => void;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {}
}

export default class ImageButton extends React.Component<ImageButton.Props, ImageButton.State> {
    constructor(props: ImageButton.Props, context?: any) {
        super(props, context);
    }

    public render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.centeredColumn, this.props.style]}>
                {this.props.imageSource && <Image style={[styles.imageButtonIcon, this.props.imageStyle]} source={this.props.imageSource} />}
                {this.props.iconName && <Icon style={[styles.defaultIcon, this.props.iconStyle]} name={this.props.iconName} />}
            </TouchableOpacity>
        );
    }
}
