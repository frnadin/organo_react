import './Formulario.css'
import TextInput from '../TextInput/TextInput';

const Formulario = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label={"Nome"} placeHolder={"Digite seu nome"}/>
                <TextInput label={"Cargo"} placeHolder={"Digite seu cargo"}/>
                <TextInput label={"Imagem"} placeHolder={"Digite a url da imagem"}/>
            </form>
        </section>
    )
}
export default Formulario