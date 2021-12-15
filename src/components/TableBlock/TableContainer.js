import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {requestTable, setPage} from "../../redux/redusers/tableReducer";
import {
    getOperatorSelector,
    getColumnSelector,
    getCountSelector, getValueSelector,
    getPageSelector,
    getTableSelector
} from "../../redux/selectors/selectors";
import TableBlock from "./TableBlock";

const TableContainer = (props) => {
    useEffect(() => {
        if (props.column && props.operator && props.value) {
            props.requestTable(props.page, props.column, props.operator, props.value);
        } else {
            props.requestTable(props.page);
        }
    }, [props.page])
    return (
        <TableBlock dataTable={props.dataTable} page={props.page}
        count={props.count} setPage={props.setPage} requestTable={props.requestTable}/>
    );
};

const mapStateToProps = (state) => {
    return {
        dataTable: getTableSelector(state),
        page: getPageSelector(state),
        count: getCountSelector(state),
        column: getColumnSelector(state),
        operator: getOperatorSelector(state),
        value: getValueSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {requestTable, setPage}),
)(TableContainer);
