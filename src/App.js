import Banner from './componentes/Banner/Banner';
import TextInput from './componentes/TextInput/TextInput';
import './App.css'

function App() {
  return (
    <div id='body'>
      <Banner />
        <div id='card-input'>
          <h1>Preencha os dados para criar o card do colaborador.</h1>
          <TextInput label={"Nome"} placeHolder={"Digite seu nome"}/>
          <TextInput label={"Cargo"} placeHolder={"Digite seu cargo"}/>
          <TextInput label={"Imagem"} placeHolder={"Digite a url da imagem"}/>
        </div>
    </div>
  );
}

export default App;
