import { GET_TRAVELLER, GET_TRAVELLER_SUCCESS, GET_TRAVELLER_FAILURE } from '../actions/travellerActions';

const initialState = {
    traveller: {},
    loading: true,
    errorMessage: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TRAVELLER: {
            return { ...state, loading: action.payload };
        }

        case GET_TRAVELLER_SUCCESS:
            return { ...state, traveller: action.payload, loading: action.loading };

        case GET_TRAVELLER_FAILURE:
            return { ...state, errorMessage: action.payload, loading: action.loading };

        default:
            return state;
    }
};
