import {Grid} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import SamplesContainer from './containers/SamplesContainer'
import { createStore, bindActionCreators, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { render } from 'react-dom'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import * as ItemsActions from './actions'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import NavTree from './components/NavTree.js'
import Header from './components/Header.js'
import RenderMixin from "./utility/RenderMixin"

var AppContainer = React.createClass({
  mixins: [RenderMixin],
  propTypes: {
        samples: React.PropTypes.array
  },
  render: function() {
    console.log("AppContainer:render", arguments);
    return (
        <div>
        <Header></Header>
        <Grid>
            <Row className="show-grid">
                <Col md={4} sm={4} xsHidden><NavTree /></Col>
                <Col md={8} sm={8}><SamplesContainer /></Col>
            </Row>
        </Grid>
        </div>
    )
  },
  componentWillReceiveProps: function() {
    console.log("AppContainer:componentWillReceiveProps", arguments);
  },
  componentDidUpdate: function() {
    console.log("AppContainer:componentDidUpdate", arguments);
  }
});

var store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
, $("#content")[0]
)