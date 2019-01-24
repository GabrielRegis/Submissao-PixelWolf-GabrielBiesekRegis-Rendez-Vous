import * as React from 'react';
import { View, Text, BackHandler } from 'react-native';

import styles from './FiltersScreenStyles';
import I18n from '../../I18n/I18n';
import { Filters } from '../../Model/Filters';
import { NavigationScreenProp } from 'react-navigation';
import ImageButton from '../../Components/ImageButton/ImageButton';
import Checkbox from '../../Components/Checkbox/Checkbox';
import FilterInput from '../../Components/FilterInput/FilterInput';

export namespace FiltersScreen {
    // tslint:disable-next-line:no-empty-interface
    export interface Props {
        navigation: NavigationScreenProp<any, any>;
    }

    // tslint:disable-next-line:no-empty-interface
    export interface State {
        onFiltersUpdate: (filters: Filters) => void;
        filters: Filters;
    }
}

export default class FiltersScreen extends React.Component<FiltersScreen.Props, FiltersScreen.State> {
    constructor(props: FiltersScreen.Props, context?: any) {
        super(props, context);
        const navFilters = this.props.navigation.getParam('filters', { filterByCompletedTasks: true, filterByPendingTasks: true } as Filters);
        this.state = {
            onFiltersUpdate: this.props.navigation.getParam('onFiltersUpdate', null),
            filters: navFilters
        };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack = () => {
        this.onOkPressed();
        return true;
    };

    onFilterByCompletedTasksChanged = (isActive: boolean) => {
        this.setState({
            filters: {
                ...this.state.filters,
                filterByCompletedTasks: isActive
            }
        });
    };

    onFilterByPendingTasksChanged = (isActive: boolean) => {
        this.setState({
            filters: {
                ...this.state.filters,
                filterByPendingTasks: isActive
            }
        });
    };

    onOkPressed = () => {
        this.state.onFiltersUpdate(this.state.filters);
        this.props.navigation.pop();
    };

    public render() {
        return (
            <View style={styles.mainContainer}>
                <View style={[styles.centeredRow, styles.padding, styles.navbar]}>
                    <Text style={styles.navbarText}>{I18n.t(['FiltersScreen', 'filtersLabel'])}</Text>
                    <View style={styles.leftAlignedRow}>
                        <ImageButton onPress={this.onOkPressed} style={styles.marginLeft} iconStyle={[styles.navbarIconButton]} iconName={'check'} />
                    </View>
                </View>
                <View style={[styles.fullContainer, styles.padding]}>
                    <View style={styles.leftAlignedColumn}>
                        <Text style={styles.filterTypeText}>Estado da tarefa</Text>
                        <FilterInput
                            label={'Tarefas finalizadas'}
                            onFilterToggled={this.onFilterByCompletedTasksChanged}
                            isActive={this.state.filters.filterByCompletedTasks}
                        />
                        <FilterInput
                            style={styles.smallMarginTop}
                            label={'Tarefas pendentes'}
                            onFilterToggled={this.onFilterByPendingTasksChanged}
                            isActive={this.state.filters.filterByPendingTasks}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
