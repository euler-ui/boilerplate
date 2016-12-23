import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Checkbox from 'material-ui/Checkbox';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px'
  }
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
    selected: true
  },
  {
    name: 'Randal White',
    status: 'Unemployed'
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true
  },
  {
    name: 'Steve Brown',
    status: 'Employed'
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed'
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed'
  },
  {
    name: 'Adam Moore',
    status: 'Employed'
  }
];





const TableExampleComplex = React.createClass({
  getInitialState() {
    return {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
    };
  },

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  },

  handleChange(event) {
    this.setState({
      height: event.target.value
    });
  },

  render() {
    return (
      <div>
        <Table height={ this.state.height } fixedHeader={ this.state.fixedHeader } fixedFooter={ this.state.fixedFooter } selectable={ this.state.selectable } multiSelectable={ this.state.multiSelectable }>
          <TableHeader displaySelectAll={ this.state.showCheckboxes } adjustForCheckbox={ this.state.showCheckboxes } enableSelectAll={ this.state.enableSelectAll }>
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={ { textAlign: 'center' } }>
                Super Header
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={ this.state.showCheckboxes } deselectOnClickaway={ this.state.deselectOnClickaway } showRowHover={ this.state.showRowHover } stripedRows={ this.state.stripedRows }>
            { tableData.map((row, index) => (
              <TableRow key={ index } selected={ row.selected }>
                <TableRowColumn>
                  { index }
                </TableRowColumn>
                <TableRowColumn>
                  { row.name }
                </TableRowColumn>
                <TableRowColumn>
                  { row.status }
                </TableRowColumn>
              </TableRow>
              )) }
          </TableBody>
          <TableFooter adjustForCheckbox={ this.state.showCheckboxes }>
            <TableRow>
              <TableRowColumn>ID</TableRowColumn>
              <TableRowColumn>Name</TableRowColumn>
              <TableRowColumn>Status</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn colSpan="3" style={ { textAlign: 'center' } }>
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
        <div style={ styles.propContainer }>
          <h3>Table Properties</h3>
          <TextField floatingLabelText="Table Body Height" defaultValue={ this.state.height } onChange={ this.handleChange } />
          <Toggle name="fixedHeader" label="Fixed Header" onToggle={ this.handleToggle } defaultToggled={ this.state.fixedHeader } />
          <Toggle name="fixedFooter" label="Fixed Footer" onToggle={ this.handleToggle } defaultToggled={ this.state.fixedFooter } />
          <Toggle name="selectable" label="Selectable" onToggle={ this.handleToggle } defaultToggled={ this.state.selectable } />
          <Toggle name="multiSelectable" label="Multi-Selectable" onToggle={ this.handleToggle } defaultToggled={ this.state.multiSelectable } />
          <Toggle name="enableSelectAll" label="Enable Select All" onToggle={ this.handleToggle } defaultToggled={ this.state.enableSelectAll } />
          <h3 style={ styles.propToggleHeader }>TableBody Properties</h3>
          <Toggle name="deselectOnClickaway" label="Deselect On Clickaway" onToggle={ this.handleToggle } defaultToggled={ this.state.deselectOnClickaway } />
          <Toggle name="stripedRows" label="Stripe Rows" onToggle={ this.handleToggle } defaultToggled={ this.state.stripedRows } />
          <Toggle name="showRowHover" label="Show Row Hover" onToggle={ this.handleToggle } defaultToggled={ this.state.showRowHover } />
          <h3 style={ styles.propToggleHeader }>Multiple Properties</h3>
          <Toggle name="showCheckboxes" label="Show Checkboxes" onToggle={ this.handleToggle } defaultToggled={ this.state.showCheckboxes } />
        </div>
      </div>
      );
  }
})

const tilesData = [
  {
    img: '/images/home/cutecate1.jpg',
    title: 'Cute Cat, Mr. Tom',
    author: 'jill111',
    featured: true,
  },
  {
    img: '/images/home/cutecate2.jpg',
    title: 'Cute Cat, Miss. Jerry',
    author: 'pashminu',
  },
  {

    img: '/images/home/cutecate3.jpg',
    title: 'Cute Cat, Mr. Gerry',
    author: 'Danson67',
  },
  {

    img: '/images/home/cutecate4.jpg',
    title: 'Cute Cat, Mr. James',
    author: 'fancycrave1',
    featured: true,
  },
  {

    img: '/images/home/cutecate5.jpg',
    title: 'Cute Cat, Miss. Rose',
    author: 'Hans',
  },
  {
    img: '/images/home/cutecate6.jpg',
    title: 'Cute Cat, Mr. Jack',
    author: 'fancycravel',
  },
  {

    img: '/images/home/horse1.jpg',
    title: 'Cute Animal',
    author: 'jill111',
  },
  {

    img: '/images/home/horse2.jpg',
    title: 'Cute Animal2',
    author: 'BkrmadtyaKarki',
  },
];

const GridListExampleComplex = () => (
<div>
  <h2>Complex Grid List</h2>
  <GridList cols={ 2 } cellHeight={ 200 } padding={ 1 } style={ styles.gridList }>
    { tilesData.map((tile) => (
      <GridTile key={ tile.img } title={ tile.title } actionIcon={ <IconButton>
                                                                     <StarBorder color="white" />
                                                                   </IconButton> } actionPosition="left" titlePosition="top" titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        cols={ tile.featured ? 2 : 1 } rows={ tile.featured ? 2 : 1 }>
        <img src={ tile.img } />
      </GridTile>
      )) }
  </GridList>
</div>
);
const GridListExampleSingleLine = () => (
<div>
  <h2>Simple Grid List</h2>
  <GridList style={ { display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', } } cols={ 2.2 }>
    { tilesData.map((tile) => (
      <GridTile key={ tile.img } title={ tile.title } actionIcon={ (<IconButton>
                                                                      <StarBorder color="rgb(0, 188, 212)" />
                                                                    </IconButton>) } titleStyle={ styles.titleStyle } titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
        <img src={ tile.img } />
      </GridTile>
      )) }
  </GridList>
</div>
);
var TableList = React.createClass({
  render() {
    return (
      <div>
        <Tabs className="components-secondary-navbar">
          <Tab label="Grid List">
            <GridListExampleSingleLine />
            <GridListExampleComplex />
          </Tab>
          <Tab label="Table">
            <TableExampleComplex />
          </Tab>
        </Tabs>
      </div>
      );
  }
});

module.exports = TableList