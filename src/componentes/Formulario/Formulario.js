import './Formulario.css'
import TextInput from '../TextInput/TextInput';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import Botao from '../Botao/Botao';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Desing',
        'Mobile',
        'Inovação e Gestão'

    ]
    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextInput label={"Nome"} placeHolder={"Digite seu nome"}/>
                <TextInput label={"Cargo"} placeHolder={"Digite seu cargo"}/>
                <TextInput label={"Imagem"} placeHolder={"Digite a url da imagem"}/>
                <ListaSuspensa label={'Time'} item= {times} />
                <Botao text={'Criar Card'}/>
            </form>
        </section>
    )
}
export default Formulario