import biodata_json from "../data/biodata.json";
import { GET_DETAIL } from "../actions";

function cvdata(state = biodata_json, action) {
    switch(action.type) {
        case GET_DETAIL:
            let item = state[action.name];
            return item;
        default:
            return state;
    }
}

export default cvdata;