export default function Notification({n}) {

    return (
        <div className="flex bg-[#dde7ee] m-3 p-3">
            <div className="w-20">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfmqsvgCzgzY1ZnLXhlzbsfbBjWVsvwQANQ&usqp=CAU" />
            </div>
            <div className="flex items-center" >
                <p className="font-bold">{n.from} </p>  
            <p className="pl-1"> {n.notification}</p>
            
            
            {n.isRead ? <div className="flex rounded-full w-10 bg-transparent"></div> : <div className="ml-2 flex items-center rounded-full w-2 h-2 bg-red-700"></div>}
        </div>
        </div>
    )
}