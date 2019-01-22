import * as React from 'react';
import { View } from 'react-native';

import styles from './TemplateComponentStyles';

export namespace TemplateComponent {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {}

    // tslint:disable-next-line:no-empty-interface
    export interface State {}
}

export default class TemplateComponent extends React.Component<TemplateComponent.Props, TemplateComponent.State> {
    constructor(props: TemplateComponent.Props, context?: any) {
        super(props, context);
    }

    public render() {
        return <View style={styles.mainContainer}>{/*  */}</View>;
    }
}
