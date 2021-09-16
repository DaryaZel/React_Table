export function Selector({ users, changeSelectedState }) {
    const statesArray = []
    for (let i = 0; i < users.length; i++) {
        if (!statesArray.includes(users[i].adress.state)) {
            statesArray.push(users[i].adress.state)
        }
    }
    statesArray.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    statesArray.unshift('ALL')

    return (
        <select className='filters-button' name="select" onChange={(e) => changeSelectedState(e.target.value)} >
            {
                statesArray.map((state, index) => (
                    <option key={state + index} value={state} >{state}</option>
                ))
            }
        </select>
    )
}