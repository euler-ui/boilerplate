import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Signin from './components/portal/signin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './base.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AppContainer = React.createClass({
  render: function() {
    return (
      <MuiThemeProvider>
        <div>
          { this.props.children }
        </div>
      </MuiThemeProvider>
    )
  }
});

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: AppContainer,
    indexRoute: {
      component: Signin
    },
    childRoutes: [
      require('./routes/home'),
      require('./routes/portal/signin')
    ]
  }]
}

const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

render(
  <Provider store={ store }>
    <Router history={ browserHistory } routes={ rootRoute } />
  </Provider>, document.getElementById('content')
)
