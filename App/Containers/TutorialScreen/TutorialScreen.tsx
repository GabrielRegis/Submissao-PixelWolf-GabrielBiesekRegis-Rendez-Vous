import * as React from 'react';
import { View, Dimensions, Text, TouchableOpacity } from 'react-native';

import styles from './TutorialScreenStyles';
import LottieView from 'lottie-react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../../Themes';
import ImageButton from '../../Components/ImageButton/ImageButton';
import NavigationResetter from '../../Util/NavigationUtils';
import I18n from '../../I18n/I18n';
import { NavigationScreenProp } from 'react-navigation';

export namespace TutorialScreen {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        navigation: NavigationScreenProp<any, any>;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        tutorials: Tutorial[];
        currentTutorialIndex: number;
    }
}

export interface Tutorial {
    animationFile: any;
    tutorialText: string;
}

const { width } = Dimensions.get('window');

export default class TutorialScreen extends React.Component<TutorialScreen.Props, TutorialScreen.State> {
    constructor(props: TutorialScreen.Props, context?: any) {
        super(props, context);
        this.state = {
            tutorials: [
                { animationFile: require('./touchAnimation.json'), tutorialText: I18n.t(['TutorialScreen', 'touchTutorial']) },
                { animationFile: require('./checkAnimation.json'), tutorialText: I18n.t(['TutorialScreen', 'checkTutorial']) },
                { animationFile: require('./swipeAnimation.json'), tutorialText: I18n.t(['TutorialScreen', 'swipeTutorial']) },
                { animationFile: require('./editAnimation.json'), tutorialText: I18n.t(['TutorialScreen', 'editTutorial']) }
            ],
            currentTutorialIndex: 0
        };
    }

    renderTutorial = (item: { item: Tutorial; index: number }): React.ReactNode => {
        return (
            <View style={[styles.tutorialContainer]}>
                <Animatable.Text
                    transition={'color'}
                    style={[styles.tutorialText, { color: this.state.currentTutorialIndex === item.index ? Colors.colors.rendezvousGunmetal : 'transparent' }]}>
                    {item.item.tutorialText}
                </Animatable.Text>
                <View style={[styles.lottieView, styles.marginTop]}>
                    <LottieView imageAssetsFolder={'lottie/image'} duration={1500} source={item.item.animationFile} autoPlay loop />
                </View>
            </View>
        );
    };

    onGotItPressed = () => {
        NavigationResetter.resetNavigation(this.props.navigation, 'RendezVousMainScreen');
    };

    public render() {
        const isLastTutorial = this.state.currentTutorialIndex === this.state.tutorials.length - 1;

        return (
            <View style={[styles.mainContainer, styles.centeredColumn, styles.padding]}>
                <View style={styles.centeredRow}>
                    <Text style={styles.tutorialLabelText}>Tutorial</Text>
                    <Animatable.View
                        transition={['marginLeft', 'opacity', 'maxWidth']}
                        style={[
                            styles.centeredRow,
                            { opacity: isLastTutorial ? 1 : 0, marginLeft: isLastTutorial ? 20 : 0, maxWidth: isLastTutorial ? 180 : 1, height: 40 }
                        ]}>
                        <Animatable.View style={styles.centeredRow} easing={'ease-in-expo'} animation={'pulse'} iterationCount={'infinite'}>
                            <TouchableOpacity onPress={this.onGotItPressed} style={styles.centeredRow}>
                                <Text style={styles.gotItText}>{I18n.t(['TutorialScreen', 'gotItLabel'])}</Text>
                                <ImageButton onPress={this.onGotItPressed} style={styles.marginLeft} iconStyle={styles.checkIcon} iconName={'check'} />
                            </TouchableOpacity>
                        </Animatable.View>
                    </Animatable.View>
                </View>

                <View style={[styles.carouselContainer, styles.marginTop]}>
                    <Carousel
                        layout={'default'}
                        onSnapToItem={(index) => this.setState({ currentTutorialIndex: index })}
                        sliderWidth={width}
                        itemWidth={width * 0.9}
                        data={this.state.tutorials}
                        renderItem={this.renderTutorial}
                    />
                </View>

                <View style={styles.paginationContainer}>
                    <Pagination
                        activeDotIndex={this.state.currentTutorialIndex}
                        inactiveDotStyle={styles.paginationInactiveDotStyle}
                        dotsLength={this.state.tutorials.length}
                        dotStyle={styles.paginationDotStyle}
                        layoutCardOffset={'3'}
                        inactiveDotOpacity={1}
                        inactiveDotScale={1}
                    />
                </View>
            </View>
        );
    }
}
