import * as React from 'react';
import { View, ViewStyle, TextStyle, ImageStyle, TextInput } from 'react-native';

import styles from './SearchFieldStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from '../../Themes';

export namespace SearchField {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        style?: ViewStyle | TextStyle | ImageStyle;
        onChangeText?: (text: string) => void;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {}
}

export default class SearchField extends React.Component<SearchField.Props, SearchField.State> {
    constructor(props: SearchField.Props, context?: any) {
        super(props, context);
    }

    public render() {
        return (
            <View style={[styles.fullContainer, styles.searchFieldContainer, styles.smallPaddingHorizontal, this.props.style]}>
                <Icon style={styles.searchIcon} name={'search'} />
                <View style={[styles.flex3, styles.smallMarginLeft]}>
                    <TextInput
                        onChangeText={this.props.onChangeText}
                        style={styles.searchFieldText}
                        selectionColor={Colors.colors.rendezvousGunmetal}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
            </View>
        );
    }
}
