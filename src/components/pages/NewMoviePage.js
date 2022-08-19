import React from 'react';
import {connect} from 'react-redux';
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit, onUpdateMovieSubmit, fetchMovie } from '../../actions/newMovie'

class NewMoviePage extends React.Component{
    componentDidMount() {
        const {match} = this.props;
        if(!this.props.movie && match.params._id){
            this.props.fetchMovie(match.params._id);
        }
    }

    render(){
        return(
            <div>
                <h2>New Movie</h2>
                <NewMovieForm 
                    onNewMovieSubmit={this.props.onNewMovieSubmit} 
                    onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} 
                    newMovie={this.props.newMovie}
                    movie={this.props.movie}
                />
            </div>
        )
    }
};

const mapToStateProps = ({ newMovie, movies }, props) =>{
    return {
        newMovie,
        movie : movies.movieList.find(item => item._id === props.match.params._id)
    }
};
const mapDispatchToProps = {
    onNewMovieSubmit,
    onUpdateMovieSubmit,
    fetchMovie
};

export default connect(mapToStateProps,mapDispatchToProps)(NewMoviePage);
