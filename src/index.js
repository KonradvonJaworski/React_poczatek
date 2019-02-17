import React from 'react';
import ReactDOM from 'react-dom';



// tworzenie konponenu 
// przy instrukcja return musi sie znajdowac div w jednej lini bo inaczej JS zwraca powietrze
// lub drugi sposob " return (" i poniezej div 
const App = () => {
        const ButtonTextV = { text: 'Kliknij tu' }
        const lebelText = 'Enter name:';
  

         return (
           <div>
             <p> tytuł </p>
             <label className="label" htmlFor="name">
               {lebelText}
             </label>
             <input id="name" type="text" />
             <button  style={{ backgroundColor: "red", color: "white" }} >
               {ButtonTextV.text}
              </button>
              <p>  testowy tekst </p> 
           </div>
         );
};

// pokazanie komponentu na ekranie 
ReactDOM.render(<App />, document.querySelector('#root'));