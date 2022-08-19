import React from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';

import MoviesList from '../MoviesList';
import { fetchMovies, deleteMovie } from '../../actions/movies'

class MoviesPage extends React.Component {

    static propTypes = {
        movies : PropTypes.any,
        deleteMovie : PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.fetchMovies();
    };

    render(){
        return(
            <div>
                <h1>Movies</h1>
                <MoviesList movies={this.props.movies} deleteMovie={this.props.deleteMovie} />
            </div>
        )
    }
};

const mapDispatchToProps = {
    fetchMovies,
    deleteMovie
}

const mapStateToProps = state => {
    return{
        movies : state.movies
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
