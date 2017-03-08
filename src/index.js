import React from 'react';
import ReactDOM from 'react-dom';
import SamplesContainer from 'containers/SamplesContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import { Grid, Row, Col } from 'react-bootstrap';
import NavTree from 'components/NavTree.js';
import Header from 'components/Header.js';
import "base.css";


var AppContainer = React.createClass({
  propTypes: {
    samples: React.PropTypes.array
  },
  render: function() {
    return (
      <div>
        <Header></Header>
        <Grid>
          <Row className="show-grid">
            <Col md={ 4 } sm={ 4 } xsHidden>
            <NavTree />
            </Col>
            <Col md={ 8 } sm={ 8 }>
            <SamplesContainer />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
});

var store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={ store }>
    <AppContainer />
  </Provider>
  , document.getElementById("content")
)