import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Article from './components/Article'



export default class App extends Component {
    render() {
        return(
          <>
          <div id="wrapper">
                    <Header />
                    <Main/>
                     <Footer/>
                 </div>
                <div id="bg" />
              </>
        )
    }
};
ReactDOM.render(<App />, document.getElementById("root"))
