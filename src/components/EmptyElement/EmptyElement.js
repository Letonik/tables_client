import React from 'react';
import style from './EmptyElement.module.scss'

const EmptyElement = () => {
    return (
        <div className={style.emptyElement}>
            Your search parameters did not match any information. Please try different search.
        </div>
    );
};

export default EmptyElement;