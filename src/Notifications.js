import {useState} from 'react'
import Notification from './Notification'


export default function Notifications () {
    const [notifs, setNotifs] = useState([{ from: "Noah", notification: "sent you a private message", isRead: false}, {from: "Mom", notification:"commented on a post you're tagged in", isRead: false}, { from: "Jack", notification: "sent you a private message", isRead: false}, { from: "Boss", notification: "sent you a private message", isRead: true}])
    
    const filterByisRead = (notif) => (notif.isRead == false)
    const filteredByUnread = notifs.filter(filterByisRead)

    const displayNotifs = notifs.map((n, i) => (
        <Notification key={i} n={n} />
    ))
    
    
    return (
        <div>
            <div className="font-bold p-3 flex">
                <div className="text-[#1c202b]">Notifications</div>
                <div className="mx-1 bg-[#5e6778] text-white w-10 rounded-full text-center">
                {filteredByUnread.length}
                </div>
            </div>
           <div>{displayNotifs}</div>
        </div>
    )
}