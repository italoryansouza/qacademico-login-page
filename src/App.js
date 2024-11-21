import './App.css';
import smile_girl from './img/smile_girl.png'
import name from './img/name.png'
import if_logo from './img/if_logo.png'

import Inputs from './components/input'
import MyButton from './components/button';

function App() {
  return (
    <div className="App">

        <div className="left-box">

          <div className="girl-box">
            <img src={smile_girl} id='smile_girl'/>
          </div>
¨
          <div className='name-text-box'>

            <div className='name-box'>
              <img src={name} id='name'/>
            </div>

            <div className='text-box'>
              <p>O Q-Acadêmico Web o aproxima ainda mais da sua instituição, dos seus professores e da sua turma; É uma importante ferramenta que possibilitará a você, enquanto estudante, um universo de informações muito grande, ao alcance de poucos cliques.</p>
            </div>

          </div>

        </div>

        <div className="right-box">

          <div className='title'>
            <h2>BEM-VINDO!</h2>
            <h3>Q-acadêmico web - um site que facilita suas atividades</h3>
          </div>
          
          <div className='inputs'>
            <Inputs nome={'Usuário'}/>
            <Inputs nome={'Senha'}/>

            <a href='#'>Primeiro acesso e recuperação de senha</a>

            <MyButton textoBotao={'Entrar'}/>
          </div>



          <img src={if_logo} id='logo'/>
        </div>
      
    </div>
  );
}

export default App;
