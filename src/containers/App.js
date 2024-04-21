import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setSearchField, getRobots } from '../actions';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

const mapStateToProps = (state) => {
    console.log(state);
    return {
        searchField: state.searchField,
        isPending: state.isPending,
        robots: state.robots,
        error: state.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchField: (event) => dispatch(setSearchField(event.target.value)),
        fetchRobots: () => dispatch(getRobots())
    };
}

const App = (props) => {
    console.log(props);
    const { searchField, isPending, robots, error, updateSearchField, fetchRobots } = props;
    useEffect(() => {
        fetchRobots()
    }, []);

    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <>
            {
                isPending ? <h1>Loading...</h1> :
                error !== '' ? <h1>There was an error while fetching robots!</h1> :
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchField updateSearchField={updateSearchField} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} showError={false}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);