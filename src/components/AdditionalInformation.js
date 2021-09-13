export function AdditionalInformation({ information }) {

    return (
        <div className='additionalInformation-container'>
            <div>Profile info:</div>
            <div>Selected profile: {information.firstName} {information.lastName}</div>
            <div>Description: {information.description}</div>
            <div>Address: {information.adress.streetAddress}</div>
            <div>State: {information.adress.state}</div>
            <div>Index: {information.adress.zip}</div>
        </div>
    )

}