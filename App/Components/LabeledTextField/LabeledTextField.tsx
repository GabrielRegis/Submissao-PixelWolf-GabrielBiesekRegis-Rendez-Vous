import * as React from 'react';
import { View, Text, TextInput, NativeSyntheticEvent, TextInputContentSizeChangeEventData, ViewStyle } from 'react-native';

import styles from './LabeledTextFieldStyles';
import { Colors } from '../../Themes';

export namespace LabeledTextField {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        label?: string;
        value?: string;
        color?: string;
        maxLength?: number;
        onTextChanged?: (text: string) => void;
        style?: ViewStyle;
        error?: boolean;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        componentHeight: number;
    }
}

export default class LabeledTextField extends React.Component<LabeledTextField.Props, LabeledTextField.State> {
    constructor(props: LabeledTextField.Props, context?: any) {
        super(props, context);
        this.state = {
            componentHeight: 50
        };
    }

    onContentSizeChanged = (e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
        this.setState({
            componentHeight: e.nativeEvent.contentSize.height
        });
    };

    public render() {
        const colorAux = this.props.color ? this.props.color : Colors.colors.rendezvousGunmetal;
        const maxLength = this.props.maxLength ? this.props.maxLength : 1000;
        const characterCountString = this.props.value ? this.props.value.length.toString() + '/' + maxLength : '';

        return (
            <View style={[styles.leftAlignedColumn, this.props.style]}>
                <Text style={[styles.labelText, { color: colorAux }]}>{this.props.label}</Text>
                <View style={[styles.smallPadding, this.props.error ? styles.textInputContainerError : styles.textInputContainer, styles.smallMarginTop]}>
                    <TextInput
                        style={[styles.inputText, { height: this.state.componentHeight, color: colorAux }]}
                        selectionColor={colorAux}
                        keyboardType={'default'}
                        returnKeyType={'done'}
                        blurOnSubmit={true}
                        underlineColorAndroid={'transparent'}
                        multiline={true}
                        value={this.props.value}
                        onContentSizeChange={this.onContentSizeChanged}
                        onChangeText={this.props.onTextChanged}
                        maxLength={maxLength}
                    />
                </View>
                <View style={[styles.smallMarginTop, styles.characterCountContainer]}>
                    <Text style={[styles.characterCountLabel, { color: colorAux }]}>{characterCountString}</Text>
                </View>
            </View>
        );
    }
}
