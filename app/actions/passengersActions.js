import axios from 'axios';

export const ADD_PASSENGER = 'ADD_PASSENGER ';
export const ADD_PASSENGER_SUCCESS = 'ADD_PASSENGER_SUCCESS';
export const ADD_PASSENGER_FAILURE = 'ADD_PASSENGER_FAILURE ';

export const addPassenger = passenger => {
    return {
        type: ADD_PASSENGER,
        payload: passenger,
    };
};

// export const addPassengerSuccess = passenger => {
//     return {
//         type: ADD_PASSENGER_SUCCESS,
//         payload: passenger,
//     };
// };

// export const addPassengerFailure = error => {
//     return {
//         type: ADD_PASSENGER_FAILURE,
//         payload: error,
//     };
};
