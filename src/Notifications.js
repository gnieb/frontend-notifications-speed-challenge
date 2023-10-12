import {useState} from 'react'
import Notification from './Notification'

export default function Notifications () {
    const [notifs, setNotifs] = useState([{from: "Noah", message: "hey babe", isRead: true}, {from: "Mom", message:"when are you coming for dinner?", isRead: false}])
    

    const displayNotifs = notifs.map((n, i) => (
        <Notification key={i} n={n} />
    ))
    
    
    return (
        <div>
           {displayNotifs}
        </div>
    )
}