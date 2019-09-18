export const GET_DETAIL = 'GET_DETAIL';

export function getDetailByName(name) {
    const action = {
        type: GET_DETAIL,
        name
    }

    return action;
}