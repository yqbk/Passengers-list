export const GET_TRAVELLER = 'GET_TRAVELLER';
export const GET_TRAVELLER_SUCCESS = 'GET_TRAVELLER_SUCCESS';
export const GET_TRAVELLER_REJECTED = 'GET_TRAVELLER_REJECTED';

export const getTraveller = (bool = true) => {
    return {
        type: GET_TRAVELLER,
        payload: bool,
    };
};

export const getTravellerSuccess = data => {
    return {
        type: GET_TRAVELLER_SUCCESS,
        payload: data,
        loading: false,
    };
};

export const getTravellerFailure = error => {
    return {
        type: GET_TRAVELLER_FAILURE,
        payload: error,
        loading: false,
    };
};
