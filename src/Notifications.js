import {useState} from 'react'
import Notification from './Notification'
import jacob from './assets/images/avatar-jacob-thompson.webp'
import anna from './assets/images/avatar-anna-kim.webp'
import angela from "./assets/images/avatar-angela-gray.webp"
import rizky from "./assets/images/avatar-rizky-hasanuddin.webp"


export default function Notifications () {
    const [notifs, setNotifs] = useState([{ avatar:jacob, from: "Noah", notification: "sent you a private message", isRead: false, isMessage: true, details:"Hey Babe, How's it going?"}, {avatar:anna, from: "Mom", notification:"commented on a post you're tagged in", isRead: false, isMessage:false, details:"Family Vacay 2023"}, {avatar:rizky, from: "Jack", notification: "sent you a private message", isRead: false, isMessage: true, details: "Can you pick up some Chardonnay for tonight?"}, {avatar:angela, from: "Boss", notification: "sent you a private message", isRead: true, isMessage:true, details:"Can you pick up a shift tomorrow night?"}])
    
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