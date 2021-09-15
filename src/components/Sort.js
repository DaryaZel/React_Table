export function sort(users, sortValue) {
    let itemsForSorting = users;
    if (sortValue !== null) {
        itemsForSorting.sort((a, b) => {
            if (sortValue.key == 'state') {
                if (a.adress[sortValue.key] < b.adress[sortValue.key]) {
                    return sortValue.direction === 'ascending' ? -1 : 1;
                }
                if (a.adress[sortValue.key] > b.adress[sortValue.key]) {
                    return sortValue.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            }
            else {
                if (a[sortValue.key] < b[sortValue.key]) {
                    return sortValue.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortValue.key] > b[sortValue.key]) {
                    return sortValue.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            }
        });
        return itemsForSorting;
    }
    else {
        return users
    }
}