import React, {useMemo} from 'react';
import style from './Pagination.module.scss';

const Pagination = ({page, count, setPage}) => {
    const pages = useMemo(() => {
        const countPages = Math.ceil(count / 10)
        let pages = [];
        for (let i = 1; i <= countPages; i++) {
            pages = [...pages, i]
        }
        return pages;
    }, [count])
    const setPreviousPage = () => {
        if (page !== 1) {
            setPage(page - 1)
        }
    }
    const setNextPage = () => {
        if (page !== pages.length) {
            setPage(page + 1)
        }
    }
    return (
        <div className={style.pagination}>
            <div onClick={setPreviousPage}>{'<'}</div>
            {
                pages.map(p =>
                    <React.Fragment key={p}>
                        {
                            (page !== p) && <div onClick={() => setPage(p)}>{p}</div>
                        }
                        {
                            (page === p) && <div onClick={() => setPage(p)} className={style.active}>{p}</div>
                        }
                    </React.Fragment>
                )
            }
            <div onClick={setNextPage}>{'>'}</div>
        </div>
    );
};

export default Pagination;