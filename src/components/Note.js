export function Note(){
    return (
        <div className="note">
            <h3 className="note-heading">{new Date().toUTCString().toString()}</h3>
            <textarea className="note-content"></textarea>
        </div>
    )
}