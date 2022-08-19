import { NEW_MOVİE_PENDING , NEW_MOVİE_FULFILLED , NEW_MOVİE_REJECTED } from '../actions/newMovie'
import { FETCH_MOVİE_PENDING , FETCH_MOVİE_FULFILLED , FETCH_MOVİE_REJECTED } from '../actions/newMovie'
import { UPDATE_MOVİE_PENDING , UPDATE_MOVİE_FULFILLED , UPDATE_MOVİE_REJECTED } from '../actions/newMovie'

const initialState = {
    fetching : false,
    error : {},
    done : false,
    movie : {
        fetching : false
    }
}

export default (state = initialState, action ) => {
    switch(action.type) {
        case NEW_MOVİE_PENDING:
            return{
                ...state,
                fetching : true
            }
        case NEW_MOVİE_FULFILLED:
            return{
                ...state,
                fetching : false,
                done : true
            };
        case NEW_MOVİE_REJECTED:
            return{
                ...state,
                error : action.payload,
                fetching : false
            };

        //FETCH_MOVİE
        case FETCH_MOVİE_PENDING:
            return{
                ...state,
                movie : {
                    fetching : true
                }
            }
        case FETCH_MOVİE_FULFILLED:
            return{
                ...state,
                movie : {
                    ...action.payload.movie,
                    fetching : false
                }
            };
        case FETCH_MOVİE_REJECTED:
            return{
                ...state,
                movie : {
                    fetching : false
                }
            };

        //UPDATE_MOVİE
        case UPDATE_MOVİE_PENDING:
            return{
                ...state,
                fetching : true
            }
        case UPDATE_MOVİE_FULFILLED:
            return{
                ...state,
                fetching : false,
                done : true
            };
        case UPDATE_MOVİE_REJECTED:
            return{
                ...state,
                error : action.payload,
                fetching : false
            };
        default :
            return state;
    };
};
