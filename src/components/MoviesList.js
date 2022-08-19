import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import ClipLoader from "react-spinners/ClipLoader";

const MoviesList = props => {
    
    const emptyMessage = (
        <div>
            <h3>There are no movies yet</h3>
        </div>
    );
    const moviesList = (
        <div>
            <ClipLoader
            size={60}
            color={"#35bdb2"}
            loading={props.movies.fetching}
            />
            {props.movies.error.response ? 
            <h3>Error Retrieving Data</h3>
            : 
            <Grid stackable columns={3}>
                {props.movies.movieList.map(movie => 
                    <MovieCard 
                        key={movie._id}
                        deleteMovie={props.deleteMovie}
                        movie={movie} />
                )}
            </Grid>
            }
        </div>
    );

    return(
        <div>
            {props.movies.length === 0 ? emptyMessage : moviesList}
        </div>
    );
};

MoviesList.propTypes = {
    movies : PropTypes.shape({
        movieList : PropTypes.array.isRequired
    }).isRequired
};

export default MoviesList;
