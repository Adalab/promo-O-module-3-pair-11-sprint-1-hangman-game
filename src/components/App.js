import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfError, setNumberOfError] = useState(0);
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState([]);
  

  let wordLetters;

  const handlerInput = (eve) => {
    //escucho la letra de la usuaria
    const valueInput = eve.currentTarget.value;
    let er = new RegExp(/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$/);
    if (valueInput.match(er)) {
      setLastLetter(valueInput);
      setUserLetters([...lastLetter]);
  }
  //guardo en userLetters la ultima letra introducida por el usuario.
  
};

  const renderSolutionLetters = () =>{
   wordLetters = word.split('');
    return wordLetters.map((wordLetter,index) => {
      return <li key={index} className = "letter">
        <small>{wordLetter.includes(userLetters[userLetters.length - 1])?userLetters:[]}</small>
        </li>
    })
  }

  const renderErrorLetters = () =>{
    const filter = userLetters.filter(x => x.includes(word));
    filter.map((wordLetter, index) => {
      return <li key={index} className="letter">
        <small>{!wordLetter}</small>
      </li>
    })
  }

  const handleClick = () => {
    setNumberOfError(numberOfError + 1);
  };

  return (
    <div className="title">
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                {renderSolutionLetters()}
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                {renderErrorLetters()}
              </ul>
            </div>
            <form className="form">
              <label className="title" htmlFor="last-letter">
                Escribe una letra:
              </label>
              <input
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                onChange={handlerInput}
                value={lastLetter}
              />
            </form>
            <button onClick={handleClick}>Incrementar</button>
          </section>
          <section className={`dummy error-${numberOfError}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
