export function AdditionalInformation({ information }) {

    return (
        <div className='additionalInformation-container'>
            <div className='additionalInformation'>Profile info:</div>
            <div className='additionalInformation'>Selected profile: {information.firstName} {information.lastName}</div>
            <div className='additionalInformation'>Description: {information.description}</div>
            <div className='additionalInformation'>Address: {information.adress.streetAddress}</div>
            <div className='additionalInformation'>State: {information.adress.state}</div>
            <div className='additionalInformation'>Index: {information.adress.zip}</div>
        </div>
    )

}