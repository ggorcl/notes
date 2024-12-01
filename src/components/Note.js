import {useSelector} from 'react-redux'
export function Note(){
    const primaryColor = useSelector((state) => state.primaryColor)
    return (
        <div className="note">
            <h3 className="note-heading" style={{color: `${primaryColor}`}}>{new Date().toUTCString().toString()}</h3>
            <hr className="note-divider" />
            <textarea className="note-content"></textarea>
        </div>
    )
}