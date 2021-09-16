import { useState, useEffect } from 'react';
import { Table } from './Table'
import { Pagination } from './Pagination'
import { search } from './Search'
import { AdditionalInformation } from './AdditionalInformation'
import { Selector } from './Selector'
import { sort } from './Sort'
import '../css/App.css'

function App() {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedState, setSelectedState] = useState(null)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [sortValue, setSortValue] = useState({ key: null, direction: null })
  const [pageSize] = useState(20)
  const [addInformation, setAddInformation] = useState(null)

  useEffect(async () => {
    const response = await fetch('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json')
    const json = await response.json()
    setUsers(json)
  }, []);
  const filteredUsers = search(users, { searchValue, selectedState })
  const sortedUsers = sort(filteredUsers, sortValue)
  const lastUserIndex = currentPageNumber * pageSize
  const firstUserIndex = lastUserIndex - pageSize
  const currentUsersArray = sortedUsers.slice(firstUserIndex, lastUserIndex)
  const changePage = pageNumber => setCurrentPageNumber(pageNumber)
  const prevPage = () => currentPageNumber != 1 ? setCurrentPageNumber(prev => prev - 1) : undefined
  const nextPage = () => currentPageNumber != Math.ceil(filteredUsers.length / pageSize) ? setCurrentPageNumber(prev => prev + 1) : undefined
  const getInformation = information => setAddInformation(information)
  if (filteredUsers.length > 0 && currentPageNumber > Math.ceil(filteredUsers.length / pageSize)) {
    setCurrentPageNumber(Math.ceil(filteredUsers.length / pageSize))
  }

  return (
    <div className='main-container'>
      <div className='filters-container'>
        <input className='filters-input' placeholder='Search by name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
        <Selector users={users} changeSelectedState={setSelectedState} />
      </div>
      <Table
        users={currentUsersArray}
        getInformation={getInformation}
        sortValue={sortValue}
        changeSortValue={setSortValue} />
      <Pagination
        pageSize={pageSize}
        totalUsersAmount={filteredUsers.length}
        changePage={changePage}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPageNumber={currentPageNumber} />
      {addInformation ? (
        <AdditionalInformation information={addInformation} />
      ) : (
        undefined
      )}
    </div>
  );
}
export default App;
