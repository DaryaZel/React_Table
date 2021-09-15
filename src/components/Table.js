import { useState, useMemo } from 'react';
import arrow from '../images/down-arrow.png';

export function Table({ users, getInformation, sortValue, changeSortValue }) {

    const getClassNamesFor = (name) => {
        if (!sortValue) {
            return 'App-table_arrow';
        }
        return sortValue.key === name ? `App-table_arrow ${sortValue.direction}` : 'App-table_arrow';

    };
    return (
        <div className='table-container'>
            <table className='App-table'>
                <thead>
                    <tr>
                        <th onClick={() => changeSortValue({ key: 'id', direction: sortValue.key === 'id' && sortValue.direction === 'ascending' ? 'descending' : 'ascending' })}>
                            <span>ID</span>
                            <img alt='arrow' className={getClassNamesFor('id')} src={arrow} />
                        </th>
                        <th onClick={() => changeSortValue({ key: 'firstName', direction: sortValue.key === 'firstName' && sortValue.direction === 'ascending' ? 'descending' : 'ascending' })}>
                            <span>First Name</span>
                            <img alt='arrow' className={getClassNamesFor('firstName')} src={arrow} />
                        </th>
                        <th onClick={() => changeSortValue({ key: 'lastName', direction: sortValue.key === 'lastName' && sortValue.direction === 'ascending' ? 'descending' : 'ascending' })}>
                            <span>Last Name</span>
                            <img alt='arrow' className={getClassNamesFor('lastName')} src={arrow} />
                        </th>
                        <th onClick={() => changeSortValue({ key: 'email', direction: sortValue.key === 'email' && sortValue.direction === 'ascending' ? 'descending' : 'ascending' })}>
                            <span>Email</span>
                            <img alt='arrow' className={getClassNamesFor('email')} src={arrow} />
                        </th>
                        <th onClick={() => changeSortValue({ key: 'phone', direction: sortValue.key === 'phone' && sortValue.direction === 'ascending' ? 'descending' : 'ascending' })}>
                            <span>Phone</span>
                            <img alt='arrow' className={getClassNamesFor('phone')} src={arrow} />
                        </th>
                        <th onClick={() => changeSortValue({ key: 'state', direction: sortValue.key === 'state' && sortValue.direction === 'ascending' ? 'descending' : 'ascending' })}>
                            <span>State</span>
                            <img alt='arrow' className={getClassNamesFor('state')} src={arrow} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={rowKeyForUser(user)} onClick={() => getInformation(user)}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.adress.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function rowKeyForUser(user) {
    return String(user.id) + user.firstName + user.lastName;
}