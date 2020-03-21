import React from 'react';
import './App.css';

import Main from "./components/Main.js"

function App() {
  return (
    <div className="App">
        <div className="container-fluid">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-12">
                        <h1 className="font-weight-bold py-3">Encrypted Puzzle Maker</h1>
                    </div>
                    <div class="col-md-6 text-left">
                        <h4>About.</h4>
                        <p>Inspired by a book on Bletchley park, I created an encrypted puzzle generator. It selects 20 words from a list of common 
                        nouns in the english language and replaces each letter with a number.</p>
                        <a href="https://twitter.com/dmdboi" className="mx-3"><i class="fa fa-twitter fa-2x text-black" aria-hidden="true"></i></a>
                        <a href="https://github.com/dmdxv" className="mx-3"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
                    </div>
                    <div className="col-md-12">
                        <Main/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
