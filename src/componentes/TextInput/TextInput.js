
import './TextInput.css'

const TextInput = (props) => {
    return (
        <div className="input-card">
            <label>{props.label}</label>
            <br/>
            <input placeholder={`${props.placeHolder}...`} />
        </div>
    )
}

export default TextInput