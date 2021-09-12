export function Selector({users, changeSearchValue}){
     const statesArray = []
    for (let i = 0; i < users.length; i++) {
        if (!statesArray.includes(users[i].adress.state)) {
        statesArray.push(users[i].adress.state)
    }
}
    return(
<select name="select" onChange={(e) => changeSearchValue({stateValue:e.target.value, filterValue:''})} > 
{
    statesArray.map(state=>(
        <option value={state} >{state}</option>
    ))
}
</select>
    )
}