import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const BuildInfo = React.createClass({
  render() {
    const props = this.props;
    const model = props.model;
    return (<List>
              <h1>Build Info</h1>
              <ListItem primaryText="Build ID" secondaryText={ model.id } />
              <ListItem primaryText="Build Name" secondaryText={ model.name } />
              <ListItem primaryText="Repository URL" secondaryText={ model.repository } />
            </List>)
  }
})

export default BuildInfo
