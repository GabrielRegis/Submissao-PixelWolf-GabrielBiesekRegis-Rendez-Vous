import * as React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './FilterInputStyles';
import Checkbox from '../Checkbox/Checkbox';

export namespace FilterInput {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        isActive: boolean;
        label: string;
        onFilterToggled: (isActive: boolean) => void;
        style?: ViewStyle;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        isActive: boolean;
    }
}

export default class FilterInput extends React.Component<FilterInput.Props, FilterInput.State> {
    checkbox?: Checkbox | null = null;
    constructor(props: FilterInput.Props, context?: any) {
        super(props, context);
        this.state = {
            isActive: this.props.isActive
        };
    }

    onPressed = () => {
        if (this.checkbox) {
            this.checkbox.onCheckPressed();
            this.setState({
                isActive: !this.state.isActive
            });
            this.props.onFilterToggled(!this.state.isActive);
        }
    };

    public render() {
        return (
            <TouchableOpacity onPress={this.onPressed}>
                <View style={[styles.centeredRow, styles.leftAlignedRow, styles.marginTop]}>
                    <Text style={[styles.filterLabelText, styles.marginRight]}>{this.props.label}</Text>
                    <Checkbox
                        disableTouch={true}
                        onCheckedChanged={this.onPressed}
                        isChecked={this.state.isActive}
                        ref={(ref: Checkbox) => (this.checkbox = ref)}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
