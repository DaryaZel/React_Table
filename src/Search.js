export function search(users, searchValue) {
    if (searchValue.filterValue) {
        return users.filter(users => users.firstName.toLowerCase().indexOf(searchValue.filterValue.toLowerCase()) > -1 ||
            users.lastName.toLowerCase().indexOf(searchValue.filterValue.toLowerCase()) > -1 ||
            users.email.toLowerCase().indexOf(searchValue.filterValue.toLowerCase()) > -1 ||
            users.phone.toLowerCase().indexOf(searchValue.filterValue.toLowerCase()) > -1 ||
            users.adress.state.toLowerCase().indexOf(searchValue.filterValue.toLowerCase()) > -1
        )
    }
    else {
        return users.filter(users =>
            users.adress.state.toLowerCase().indexOf(searchValue.stateValue.toLowerCase()) > -1
        )
    }
}