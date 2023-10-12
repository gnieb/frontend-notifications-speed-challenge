export default function Notification({n}) {

    return (
        <div>
            <div>{n.from}</div>
            <div>{n.message}</div>
            {n.isRead ? <div>READ!</div> : <div>UNREAD!!!! </div>}
        </div>
    )
}