import React from 'react';
import style from './TableBlock.module.scss'
import Table from "./Table/Table";
import SortBar from "./SortBar/SortBar";
import Pagination from "./Pagination/Pagination";
import EmptyElement from "../EmptyElement/EmptyElement";

const TableBlock = ({dataTable, page, count, setPage, requestTable}) => {
    return (
        <div className={style.tableBlock}>
            <SortBar requestTable={requestTable} setPage={setPage}/>
            {(dataTable.length === 0)
                ?
                <EmptyElement/>
                :
                <>
                    <Table dataTable={dataTable}/>
                    <Pagination page={page} count={count} setPage={setPage}/>
                </>
            }
        </div>
    );
};

export default TableBlock;