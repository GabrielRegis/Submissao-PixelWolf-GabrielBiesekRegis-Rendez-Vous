import { NavigationActions, NavigationScreenProp } from 'react-navigation';
class NavigationResetter {
    resetNavigation = (navigation: NavigationScreenProp<any, any>, route: string) => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: route
                })
            ]
        });
        navigation.dispatch(resetAction);
    };
}

export default new NavigationResetter();
