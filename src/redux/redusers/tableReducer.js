import {tableAPI} from "../../api/api";

const SET_PAGE = "SET_PAGE";
const SET_TABLE = "SET_TABLE";
const SET_IS_LOADING = "SET_IS_LOADING";

let initialState = {
    page: 1,
    count: 0,
    value: undefined,
    operator: '',
    column: '',
    dataTable: [],
    isLoading: false
};

const tableReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PAGE:
            return {
                ...state, page: action.page
            }
        case SET_TABLE:
            return {
                ...state,
                dataTable: action.dataTable,
                count: action.count,
                column: action.column,
                operator: action.operator,
                value: action.value,
            }
        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const setPage = (page) => ({type: SET_PAGE, page});
export const setDateTable = (dataTable, count, column, operator, value) => (
    {type: SET_TABLE, dataTable, count, column, operator, value}
);
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const requestTable = (page, column = '', operator = '', value = '') => {
    return async (dispatch) => {
        try {
            dispatch(setIsLoading(true));
            if (((operator === '<' || operator === '>' || operator === '=') && column === 'name')
            || (operator === 'like' && (column === 'distance' || column === 'amount'))) {
                dispatch(setDateTable([], 0, column, operator, value));
            } else {
                let dataTable = await tableAPI.getTableAndSort(page, column, operator, value);
                dataTable = JSON.parse(dataTable.data)
                dispatch(setDateTable(dataTable[1], dataTable[0].count, column, operator, value));
            }
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(setIsLoading(false));
        }
    }
}

export default tableReducer;
