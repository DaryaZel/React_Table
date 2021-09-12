import { useState, useEffect } from 'react';
import { Table } from './Table'
import { Pagination } from './Pagination'
import { search } from './Search'
import { AdditionalInformation } from './AdditionalInformation'
import { Selector } from './Selector'
import '../css/App.css'

function App() {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [selectedState, setSelectedState] = useState(null)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [pageSize] = useState(10)
  const [addInformation, setAddInformation] = useState(null)

  useEffect(async () => {
    const response = await fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32')
    const json = await response.json()
    setUsers(json)
  }, []);
  const lastUserIndex = currentPageNumber * pageSize
  const firstUserIndex = lastUserIndex - pageSize
  const filteredUsers = search(users, { searchValue, selectedState })
  const currentUsersArray = filteredUsers.slice(firstUserIndex, lastUserIndex)
  const changePage = pageNumber => setCurrentPageNumber(pageNumber)
  const prevPage = () => currentPageNumber != 1 ? setCurrentPageNumber(prev => prev - 1) : undefined
  const nextPage = () => currentPageNumber != Math.ceil(filteredUsers.length / pageSize) ? setCurrentPageNumber(prev => prev + 1) : undefined
  const getInformation = information => setAddInformation(information)
  return (
    <div className='main-container'>
      <div>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
      </div>
      <Selector users={users} changeSelectedState={setSelectedState} />
      <Table users={currentUsersArray} getInformation={getInformation} />
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
