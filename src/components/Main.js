import React, { Component } from 'react';

import randomizeWords from '../utils/Words'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alphabet:  [
                'a','b','c','d','e','f',
                'g','h','i','j','k','l',
                'm','n','o','p','q','r',
                's','t','u','v','w','x',
                'y','z'
            ],
            key: [],
            encryptedWords: []
        }
        this.generateKey = this.generateKey.bind(this)
        this.generateEncryptedWords = this.generateEncryptedWords.bind(this)
    }

    //Shuffles elements in Alphabet array to give letters new indexes
    generateKey() {
        var alphabet = this.state.alphabet
        var encrypt = []
        encrypt = alphabet.sort(() => Math.random() - 0.5);
        for(var i = 0; i < encrypt.length; i++ ) {
            console.log(encrypt[i] + i)
        }
        this.setState({ key: encrypt})
    }

    //Creates encrypted words 
    async generateEncryptedWords() {
        await this.generateKey()
        var tempWords = []
        var wordList = randomizeWords()
        console.log(wordList)
        for(var i = 0; i < wordList.length; i++) {
            tempWords.push(await this.EncryptWord(wordList[i]))
        }
        this.setState({ encryptedWords: tempWords})
    }

    //Returns encrypted word
    EncryptWord(word) {
        let { key } = this.state
        let encryptedWord = ""
        for(var ii = 0; ii < word.length; ii++) {
            var letter = word[ii]
            var encryptedLetter = key.findIndex(number => number === letter) + 1
            encryptedWord += encryptedLetter + ","
        }
        return encryptedWord
    }

    componentDidMount(){
        this.generateEncryptedWords()
    }

    render() { 
        return (
            <div className="mt-3">
                <div className="container mt-3">
                    <ul className="nav nav-pills">
                        <li className="nav-item active"><a data-toggle="pill" className="nav-link active" href="#encrypted">Encrypted Words</a></li>
                        <li className="nav-item"><a data-toggle="pill" className="nav-link" href="#solution">Solution</a></li>
                    </ul>
                    
                    <div class="tab-content">
                        <div id="encrypted" className="tab-pane fade show active">
                            <button className="btn btn-outline-success mx-2" onClick={this.generateEncryptedWords}>Generate Words</button>
                            <div className="row mt-3">
                                {this.state.encryptedWords.map((item, key) => <div key={key + 1} className="col-md-4">
                                    <h5 className="card-title border rounded py-4">
                                        {item}
                                    </h5>
                                </div>)}
                            </div>
                        </div>

                        <div id="solution" className="tab-pane fade">
                            <div className="row mt-3">
                                {this.state.key.map((item, key) => <div key={key + 1} className="col-md-2">
                                    <h5 className="card-title border rounded py-4">
                                        {key + 1} = {item}
                                    </h5>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
 
export default Main;