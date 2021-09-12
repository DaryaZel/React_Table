export function Pagination({ pageSize, totalUsersAmount, changePage, nextPage, prevPage, currentPageNumber }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalUsersAmount / pageSize); i++) {
        pageNumbers.push(i)
    }
    const getClassNamesFor = (number) => {
        return currentPageNumber === number ? `pageList_item currentPage` : 'pageList_item';
    };
    return (
        <div className='pageListContainer'>
            <button onClick={() => prevPage()}>Previous</button>
            <ul className='pageList'></ul>
            {pageNumbers.map(number => (
                    <li key={number}  className={getClassNamesFor(number)} onClick={() => changePage(number)} >
                        {number}
                    </li>
            ))
            }
            <button onClick={() =>  nextPage()}>Next</button>
        </div>
    )
}