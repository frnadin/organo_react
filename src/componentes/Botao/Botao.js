import "./Botao.css";

const Botao = (props) => {
    return (
        <button className="Butao">
        {props.text}
        </button>
    )
}

export default Botao