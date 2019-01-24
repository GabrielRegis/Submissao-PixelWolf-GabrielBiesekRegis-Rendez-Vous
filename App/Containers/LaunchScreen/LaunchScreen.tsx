import * as React from 'react';
import { View, Text } from 'react-native';

import styles from './LaunchScreenStyles';
import NavigationResetter from '../../Util/NavigationUtils';
import * as Animatable from 'react-native-animatable';
import Checkbox from '../../Components/Checkbox/Checkbox';
import { Colors } from '../../Themes';
import { NavigationScreenProp } from 'react-navigation';

export namespace Launch {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        navigation: NavigationScreenProp<any, any>;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        showCheckbox: boolean;
    }
}

export class LaunchScreen extends React.Component<Launch.Props, Launch.State> {
    animTex: Animatable.Text | null = null;
    animCheck: Animatable.View | null = null;
    constructor(props: Launch.Props, context?: any) {
        super(props, context);
        this.state = {
            showCheckbox: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showCheckbox: true
            });
        }, 1200);

        setTimeout(() => {
            if (this.animCheck && this.animTex && this.animCheck.fadeOut && this.animTex.fadeOut) {
                this.animTex.fadeOut(300).then(() => {
                    NavigationResetter.resetNavigation(this.props.navigation, 'TutorialScreen');
                });

                this.setState({
                    showCheckbox: false
                });
            }
        }, 2500);
    }

    public render() {
        return (
            <View style={[styles.mainContainer, styles.centeredRow]}>
                <Animatable.Text ref={(ref: Animatable.Text) => (this.animTex = ref)} animation={'fadeIn'} style={styles.titleText}>
                    RENDEZ-VOUS
                </Animatable.Text>
                <Animatable.View
                    ref={(ref: Animatable.Text) => (this.animCheck = ref)}
                    style={{ marginLeft: this.state.showCheckbox ? 20 : 0, opacity: this.state.showCheckbox ? 1 : 0 }}
                    transition={['marginLeft', 'opacity']}>
                    <Checkbox color={Colors.colors.rendezvousRed} isChecked={true} disableTouch={true} />
                </Animatable.View>
            </View>
        );
    }
}
