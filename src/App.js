import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './default.scss'
import { auth, handleUserProfile } from './firebase/utils';
import { setCurrentUser } from './redux/User/user.actions';
import { connect } from 'react-redux';

//layouts 
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomePageLayout';

// pages
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await handleUserProfile(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            })
          })
        }
        this.setState({
          ...initialState
        });
        });
      };


  componentWillUnmount() {
    this.authListener();
  }

  render () {

    const { currentUser } = this.state;

    return (
      <div className="App">
          <Switch>
            <Route exact path='/' render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )}/>
            <Route exact path='/registration' render={() => currentUser ? <Redirect to='/' /> : (
              <MainLayout>
                <Registration />
              </MainLayout>
            )}/>
            <Route exact path='/login'
              render={() => currentUser ? <Redirect to='/' /> : (
                <MainLayout>
                  <Login />
                </MainLayout>
              )}/>
            <Route exact path='/recovery' render={() => (
              <MainLayout>
                <Recovery />
              </MainLayout>
            )}/>
          </Switch>
      </div>
    );
  }
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
