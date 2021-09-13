export function Pagination({ pageSize, totalUsersAmount, changePage, nextPage, prevPage, currentPageNumber }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalUsersAmount / pageSize); i++) {
        pageNumbers.push(i)
    }
    const getClassNamesFor = (number) => {
        return currentPageNumber === number ? `pagination-pageList_item currentPage` : 'pagination-pageList_item';
    };

    return (
        <div className='pagination-container'>
            <button className='pagination-button' onClick={() => prevPage()}>Previous</button>
            <ul className='pagination-pageList'></ul>
            {pageNumbers.map(number => (
                <li key={number} className={getClassNamesFor(number)} onClick={() => changePage(number)} >
                    {number}
                </li>
            ))
            }
            <button className='pagination-button' onClick={() => nextPage()}>Next</button>
        </div>
    )
}