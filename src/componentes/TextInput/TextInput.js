
import './TextInput.css'

const TextInput = ({label, placeHolder}) => {
    return (
        <div className="input-card">
            <label>{label}</label>
            <br/>
            <input placeholder={placeHolder} />
        </div>
    )
}

export default TextInput