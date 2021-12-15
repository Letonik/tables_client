export const getPageSelector = (state) => {
    return state.table.page;
}
export const getCountSelector = (state) => {
    return state.table.count;
}
export const getColumnSelector = (state) => {
    return state.table.column;
}
export const getOperatorSelector = (state) => {
    return state.table.operator;
}
export const getValueSelector = (state) => {
    return state.table.value;
}
export const getTableSelector = (state) => {
    return state.table.dataTable;
}
export const getIsLoading = (state) => {
    return state.table.isLoading;
}