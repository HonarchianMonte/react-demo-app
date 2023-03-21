import {
    UPDATE_USER_FORM
} from './constants';

const initialForm = {
    name: '',
    job: ''
}

const initialState = {
    intitalized: false,
    form: initialForm,
    result: null,

    loading: false,
    loaded: false
}

export default function user(state = initialState, action){
    switch (action.type) {
        case UPDATE_USER_FORM:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.payload
                }
            };
        default:
            return state;
    }
}