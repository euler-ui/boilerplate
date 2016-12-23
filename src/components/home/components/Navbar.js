import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

var Navbar = React.createClass({
  getItemIdByPath(path) {
    var items = this.props.items;
    var item = items && items.filter((item) => {
      return path === item.urlFullPath;
    })
    return item[0] && item[0].id;
  },
  getPathFromRouter() {
    var pathname = this.props.router.location.pathname;
    if (/(.*)\/$/.test(pathname)) {
      pathname = RegExp.$1;
    }
    return pathname;
  },
  hasItemByPath(pathname) {
    var items = this.props.items;
    var item = items && items.some((item) => {
      return pathname === item.url;
    })
    return !!item;
  },
  componentDidMount() {
    var pathname = this.getPathFromRouter();
    if (this.hasItemByPath(pathname)) {
      this.setState({
        selectedTab: pathname
      })
    }
  },
  getInitialState() {
    return {
      selectedTab: this.props.items[0].url
    };
  },
  onTabChange(tabVal) {
    this.props.router.push(tabVal);
    this.setState({
      selectedTab: tabVal
    })
  },
  render() {
    var props = this.props;

    var navItems = this.props.items.map((item, id) => {
      return (<Tab key={ id } label={ item.name } value={ item.url } data-route={ item.url } />)
    })
    return (
      <Tabs value={ this.state.selectedTab } onChange={ this.onTabChange }>
        { navItems }
      </Tabs>
      );
  }
});
export default Navbar