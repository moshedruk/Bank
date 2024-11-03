

import './profile.css'
import { Props_for_profile } from '../interface/interface'

export default function Profile({sum,sumcatd,sumcatdlest}:Props_for_profile) {
    // const [sum,setSum] = useState<number>(1000)
    // const [sumcatd,setSumcard] = useState<string>("343")
    // const [sumcatdlest,setSumcardlest] = useState<string>("3343")
    const myprofile = {
        name: 'Yair',
        age: 32,
        email: 'yair@example.com',
        address: {
            street: 'דרך השלו',
            city: 'תל אבי',
            country: 'ישראל'
        }
    }
    return (
        <div className='main-home'>
            <div className='profile'>
            <h1>Profile</h1>
            <p>Name: {myprofile.name}</p>
            <p>Age: {myprofile.age}</p>
            <p>Email: {myprofile.email}</p>
            <p>Address:</p>
            <p>Street: {myprofile.address.street}</p>
            <p>City: {myprofile.address.city}</p>
            <p>Country: {myprofile.address.country}</p>

            <div id="address">
                <p>Street: {myprofile.address.street}</p>
                <p>City: {myprofile.address.city}</p>
                <p>Country: {myprofile.address.country}</p>
            </div>
            </div>
            <div className='moneyinlin'>
            <h2>balance</h2>
            <p>{sum}</p>
            </div>
            <div className='nain-card'>
            <div className='money'>
            <h2>This month's payments</h2>
            <p>{sumcatd}</p>
            </div>
            <div className='money'>
            <h2>last month</h2>
            <p>{sumcatdlest}</p>
            </div>

            </div>
            
        </div>
    )
}
