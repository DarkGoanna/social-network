import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/dialogPage/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <main className="content">
                    <div className="container">
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/dialogs" render={() => <Dialogs />} />
                    </div>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;