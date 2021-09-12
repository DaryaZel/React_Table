import { useState, useMemo } from 'react';
import arrow from './down-arrow.png';
import { AdditionalInformation } from './AdditionalInformation'
export function Table({ users, getInformation }) {

    const useSortableData = (items, startSortValue = null) => {
        const [sortValue, setSortValue] = useState(startSortValue);

        const sortedItems = useMemo(() => {
            let itemsForSorting = items;
            if (sortValue !== null) {
                itemsForSorting.sort((a, b) => {
                    if (a[sortValue.key] < b[sortValue.key]) {
                        return sortValue.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortValue.key] > b[sortValue.key]) {
                        return sortValue.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
            return itemsForSorting;
        }, [items, sortValue]);

        const sortRequest = (key) => {
            let direction = 'ascending';
            if (
                sortValue &&
                sortValue.key === key &&
                sortValue.direction === 'ascending'
            ) {
                direction = 'descending';
            }
            setSortValue({ key, direction });
        };

        return { items: sortedItems, sortRequest, sortValue };
    };
    const { items, sortRequest, sortValue } = useSortableData(users);
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
                        <th onClick={() => sortRequest('id')}>
                            <span>ID</span>
                            <img alt='arrow' className={getClassNamesFor('id')} src={arrow} />
                        </th>
                        <th onClick={() => sortRequest('firstName')}>
                            <span>First Name</span>
                            <img alt='arrow' className={getClassNamesFor('firstName')} src={arrow} />
                        </th>
                        <th onClick={() => sortRequest('lastName')}>
                            <span>Last Name</span>
                            <img alt='arrow' className={getClassNamesFor('lastName')} src={arrow} />
                        </th>
                        <th onClick={() => sortRequest('email')}>
                            <span>Email</span>
                            <img alt='arrow' className={getClassNamesFor('email')} src={arrow} />
                        </th>
                        <th onClick={() => sortRequest('phone')}>
                            <span>Phone</span>
                            <img alt='arrow' className={getClassNamesFor('phone')} src={arrow} />
                        </th>
                        <th onClick={() => sortRequest('adress.state')}>
                            <span>State</span>
                            <img alt='arrow' className={getClassNamesFor('adress.state')} src={arrow} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((user) => (
                        <tr key={user.id} onClick={() => getInformation(user)}>
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