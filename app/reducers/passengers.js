import { ADD_PASSENGER } from '../actions/passengersActions';

const initialState = {
    passengers: [null, null, null],
    errorMessage: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PASSENGER: {
            console.log(action);
            return {
                ...state,
                passengers: state.passengers.reduce(
                    (acc, curr, index) => (index === action.payload.passengerIndex ? [...acc, action.payload.passenger] : [...acc, curr]),
                    [],
                ),
            };
        }

        default:
            return state;
    }
};
