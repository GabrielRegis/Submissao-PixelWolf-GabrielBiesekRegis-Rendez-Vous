import * as React from 'react';
import { View, ViewStyle, TextStyle, ImageStyle, TouchableWithoutFeedback, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './CheckboxStyles';

export namespace Checkbox {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        style?: ViewStyle | TextStyle | ImageStyle;
        onCheckedChanged?: (isChecked: boolean) => void;
        color?: string;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        isChecked: boolean;
        isComponentReady: boolean;
    }
}

export default class Checkbox extends React.Component<Checkbox.Props, Checkbox.State> {
    checkRef: Animatable.View | null = null;
    constructor(props: Checkbox.Props, context?: any) {
        super(props, context);
        this.state = {
            isChecked: false,
            isComponentReady: false
        };
    }

    componentDidMount() {
        if (this.state.isChecked) {
            this.zoomInAnimation();
        }
    }

    zoomInAnimation = () => {
        if (this.checkRef && this.checkRef.zoomIn) {
            this.checkRef.zoomIn(100);
        }
    };

    zoomOutAnimation = () => {
        if (this.checkRef && this.checkRef.zoomOut) {
            this.checkRef.zoomOut(100);
        }
    };

    onCheckPressed = () => {
        if (this.state.isChecked) {
            this.zoomOutAnimation();
        } else {
            this.zoomInAnimation();
        }

        this.setState(
            {
                isChecked: !this.state.isChecked
            },
            () => {
                if (this.props.onCheckedChanged) {
                    this.props.onCheckedChanged(this.state.isChecked);
                }
            }
        );
    };

    public render() {
        return (
            <TouchableWithoutFeedback onPress={this.onCheckPressed} style={[styles.centeredColumn, styles.checkboxContainer, this.props.style]}>
                <View style={[styles.centeredColumn, styles.checkboxContainer, this.props.style]}>
                    <Animatable.View
                        ref={(ref) => (this.checkRef = ref)}
                        style={[styles.checkboxCheck, this.props.color ? { backgroundColor: this.props.color } : {}]}
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
