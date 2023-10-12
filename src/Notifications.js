import {useState} from 'react'
import Notification from './Notification'


export default function Notifications () {
    const [notifs, setNotifs] = useState([{ from: "Noah", notification: "sent you a private message", isRead: false,}, {from: "Mom", notification:"commented on a post you're tagged in", isRead: false}, { from: "Jack", notification: "sent you a private message", isRead: false}, { from: "Boss", notification: "sent you a private message", isRead: true}])
    
    const filterByisRead = (notif) => (notif.isRead == false)
    const filteredByUnread = notifs.filter(filterByisRead)

    const displayNotifs = notifs.map((n, i) => (
        <Notification key={i} n={n} />
    ))
    
    const handleAllRead = () => {
       
      const read =  notifs.map(n => {
        console.log(n)
        return n = {
        ...n, 
        isRead:true
        }
      });
    
   
     setNotifs(read)
    console.log("YAY")
    }
    
    return (
        <div>
            <div className="font-bold p-3 flex justify-between">
                <div className="flex">
                    <div className="text-[#1c202b]">Notifications</div>
                    <div className="mx-1 bg-[#5e6778] text-white w-10 rounded-full text-center">
                    {filteredByUnread.length}
                    </div>
                </div>
                <div>
                    <button onClick={handleAllRead}>Mark All as Read</button>
                </div>
            </div>
           <div>{displayNotifs}</div>
        </div>
    )
}