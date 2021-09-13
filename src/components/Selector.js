export function Selector({ users, changeSelectedState }) {
    const statesArray = ['ALL']
    for (let i = 0; i < users.length; i++) {
        if (!statesArray.includes(users[i].adress.state)) {
            statesArray.push(users[i].adress.state)
        }
    }

    return (
        <select className='filters-button' name="select" onChange={(e) => changeSelectedState(e.target.value)} >
            {
                statesArray.map(state => (
                    <option value={state} >{state}</option>
                ))
            }
        </select>
    )
}