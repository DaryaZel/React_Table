export function search(users, searchParams) {
    let filteredUsers = users
    const { searchValue, selectedState } = searchParams
    if (searchValue) {
        filteredUsers = filteredUsers.filter(user =>
            user.firstName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
            user.lastName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
            user.email.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
            user.phone.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
            user.adress.state.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
        )
    }
    if (selectedState != null && selectedState != 'ALL') {
        filteredUsers = filteredUsers.filter(user =>
            user.adress.state === selectedState
        )
    }
    return filteredUsers
}