export default function Notification({n}) {



    return (
        <div className={n.isRead? "bg-white m-3 p-3" : "bg-[#dde7ee] m-3 p-3"} >
            <div className="flex">
            <picture className="w-10 m-1">
                <img src={n.avatar} />
            </picture>
            <div className="flex items-center" >
                <p className="font-bold hover:cursor-pointer">{n.from} </p>  
            <p className="pl-1"> {n.notification}</p>
            {n.isRead ? <div className="flex rounded-full w-10 bg-transparent"></div> : <div className="ml-2 flex items-center rounded-full w-2 h-2 bg-red-700"></div>}
            </div>
            </div>
            {n.isMessage ? <div className="border-[1px] text-sm border-gray-400 m-2 p-2">{n.details}</div> : <div></div>}
        </div>
    )
}