import { ADD_PASSENGER } from '../actions/passengersActions';

const initialState = {
    passengers: [],
    errorMessage: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PASSENGER: {
            return {
                ...state,
                passengers: [...state.passengers, action.payload],
            };
        }

        // Later on probably data would be sent to backend, I will keep it here for further development

        // case ADD_PASSENGER_SUCCESS:
        //     return {
        //         ...state,
        //         traveller: action.payload,
        //     };

        // case ADD_PASSENGER_FAILURE:
        //     return {
        //         ...state,
        //         errorMessage: action.payload,
        //     };

        default:
            return state;
    }
};
