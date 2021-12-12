import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Dialogs from './components/dialogPage/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import Home from './components/Home/Home';
import PeopleList from './components/peoplePage/PeopleList/PeopleList'
import ProfileContainer from './components/profilePage/Profile/ProfileContainer';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app">
                <HeaderContainer />
                <main className="content">
                    <div className="container">
                        <Route exact path="/" render={() => <Home />} />
                        <Route path="/dialogs" render={() => <Dialogs />} />
                        <Route path="/people" render={() => <PeopleList />} />
                        <Route path="/profile/:first?" render={() => <ProfileContainer />} />
                    </div>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App;