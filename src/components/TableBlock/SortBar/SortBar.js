import React, {useEffect, useState} from 'react';
import style from './SortBar.module.scss'
import {useField} from "../../CastomHooks/hooks";

const SortBar = ({requestTable, setPage}) => {
    const [isValid, setValid] = useState(true);
    const column = useField('')
    const operator = useField('')
    const searchValue = useField('')
    useEffect(() => {
        if(!column.valid && !operator.valid && !searchValue.valid) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [column.valid, operator.valid, searchValue.valid])

    const handleSubmit = (e) => {
        e.preventDefault()
        setPage(1)
        requestTable(1, column.value, operator.value, searchValue.value)
    }

    return (
        <div className={style.sortBar}>
            <form onSubmit={handleSubmit}>
                <div className={style.wrapper}>
                    <div>
                        <select onChange={column.onChange} onBlur={column.onBlur} value={column.value} name="column">
                            <option value="">Column</option>
                            <option value="name">city</option>
                            <option value="amount">amount</option>
                            <option value="distance">distance</option>
                        </select>
                        {(column.isDirty && column.valid) && <div className={style.error}>should not be empty</div>}
                    </div>
                    <div>
                        <select onChange={operator.onChange} onBlur={operator.onBlur} value={operator.value} name="operator">
                            <option value="">Must be</option>
                            <option value="=">equals</option>
                            <option value="<">less</option>
                            <option value=">">more</option>
                            <option value="like">contains</option>
                        </select>
                        {(operator.isDirty && operator.valid) && <div className={style.error}>should not be empty</div>}
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div>
                        <input onChange={searchValue.onChange} onBlur={searchValue.onBlur}
                               value={searchValue.value} name="searchValue" type="text"
                               placeholder='Type value...'/>
                        {(searchValue.isDirty && searchValue.valid) && <div className={style.error}>should not be empty</div>}
                    </div>
                    <div>
                        <button disabled={isValid} type='submit'>Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SortBar;