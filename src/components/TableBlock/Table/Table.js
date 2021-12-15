import React from 'react';
import style from './Table.module.scss'

const Table = ({dataTable}) => {
  /*  console.log(dataTable)*/
    return (
        <table className={style.table}>
            <tr>
                <th>Date</th>
                <th>City</th>
                <th>Amount</th>
                <th>Distance (km)</th>
            </tr>
            {
                dataTable.map(city =>
                    <tr>
                        <td>{city.my_date.split('T')[0]}</td>
                        <td>{city.name}</td>
                        <td>{city.amount}</td>
                        <td>{city.distance}</td>
                    </tr>
                )
            }
        </table>
    );
};

export default Table;