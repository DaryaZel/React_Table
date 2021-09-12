import { useState, useEffect } from 'react';
import { Table } from './Table'
import { Pagination } from './Pagination'
import './App.css';
import { search } from './Search'
import { AdditionalInformation } from './AdditionalInformation'
import { Selector } from './Selector'
function App() {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState({ stateValue: '', filterValue: '' })
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
  const currentUsersArray = users.slice(firstUserIndex, lastUserIndex)
  const changePage = pageNumber => setCurrentPageNumber(pageNumber)
  const changeSearchValue = searchValue => setSearchValue(searchValue)
  const changeUsersArray = newUsersArray => setUsers(newUsersArray)
  const prevPage = () => setCurrentPageNumber(prev => prev - 1)
  const nextPage = () => setCurrentPageNumber(prev => prev + 1)
  const getInformation = information => setAddInformation(information)
  return (
    <div className='main-container'>
      <div>
        <input value={searchValue.filterValue} onChange={(e) => setSearchValue({ stateValue: '', filterValue: e.target.value })}></input>
      </div>
      <Selector users={currentUsersArray} changeSearchValue={changeSearchValue} />
      <Table users={search(currentUsersArray, searchValue)} getInformation={getInformation} />
      <Pagination
        pageSize={pageSize}
        totalUsersAmount={users.length}
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
