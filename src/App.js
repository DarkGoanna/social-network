import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import Footer from './components/Footer/Footer'
import { isAuthorized, isAuthFinished } from './store/Selectors/Selectors'
import { connect } from 'react-redux'
import { authMe } from './store/redusers/auth-reduser'

const Login = lazy(() => import('./components/Login/Login'))
const Dialogs = lazy(() => import('./components/dialogPage/Dialogs/Dialogs'))
const PeopleList = lazy(() => import('./components/peoplePage/PeopleList/PeopleList'))
const ProfileContainer = lazy(() => import('./components/profilePage/Profile/ProfileContainer'))

const App = (props) => {
    return (
        <Router>
            <div className="app">
                <HeaderContainer />
                <main className="content">
                    <div className="container">
                        <Suspense fallback={<div>Загрузка...</div>}>
                            <Switch>
                                <Route exact path="/">
                                    {props.isAuthFinished
                                        ? props.isAuthorized
                                            ? <Redirect to="/profile" />
                                            : <Redirect to="/people" />
                                        : <div>Загрузка...</div>
                                    }
                                </Route>
                                <Route path="/dialogs" render={() => <Dialogs />} />
                                <Route path="/people" render={() => <PeopleList />} />
                                <Route path="/profile/:first?" render={() => <ProfileContainer />} />
                                <Route path="/login" render={() => <Login />} />
                            </Switch>
                        </Suspense>
                    </div>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

const AppContaner = (props) => {

    useEffect(() => {
        props.authMe();
    });

    return (
        <App isAuthorized={props.isAuthorized} isAuthFinished={props.isAuthFinished} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthorized: isAuthorized(state),
        isAuthFinished: isAuthFinished(state)
    }
}
export default connect(mapStateToProps, { authMe })(AppContaner);