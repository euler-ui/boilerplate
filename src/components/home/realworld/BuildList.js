import React from 'react';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

const style = {
  margin: 12,
};
const BuildList = React.createClass({
  componentDidMount() {
    console.log("BuildList is mouted");
    this.props.actions.getBuildList();
  },
  onNew() {
    this.props.router.push("/home/realworld/build/add");
  },
  onRun() {
    let selectedRows = this.state.selectedRows
    if (!selectedRows || !selectedRows.length) {
      this.setState({
        openSnackMsg: true
      })
      return
    }
    let build = this.props.builds[selectedRows[0]];
    this.props.actions.openBuildPage(build);
    this.props.router.push(`/home/realworld/build/${build.id}/run`);
  },
  onDelete() {
    if (!this.state.selectedRows || !this.state.selectedRows.length) {
      this.setState({
        openSnackMsg: true
      })
      return
    }
  },
  getInitialState() {
    return {
      selectedRows: [],
      openSnackMsg: false
    };
  },

  onRowSelection(rows) {
    this.setState({
      openSnackMsg: false,
      selectedRows: rows
    });
  },

  render() {
    let builds = this.props.builds || [];
    return (
      <div>
        <h1>Build List</h1>
        <div>
          <RaisedButton label="New" style={ style } onClick={ this.onNew } />
          <RaisedButton label="Run" primary={ true } style={ style } onClick={ this.onRun } />
          <RaisedButton label="Delete" secondary={ true } style={ style } onClick={ this.onDelete } />
        </div>
        <Divider />
        <Table onRowSelection={ this.onRowSelection } ref="table">
          <TableHeader>
            <TableRow>
              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="Repository">Repository</TableHeaderColumn>
              <TableHeaderColumn tooltip="Last Status">Last Status</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={ false }>
            { builds.map((row, index) => (
              <TableRow key={ index } selected={ this.state.selectedRows.indexOf(index) !== -1 }>
                <TableRowColumn>
                  { row.id }
                </TableRowColumn>
                <TableRowColumn>
                  { row.name }
                </TableRowColumn>
                <TableRowColumn>
                  <a href={ row.repository } target="_blank">
                    { row.repository }
                  </a>
                </TableRowColumn>
                <TableRowColumn>
                  { row.lastBuildStatus }
                </TableRowColumn>
              </TableRow>
              )) }
          </TableBody>
        </Table>
        <Divider />
        <SnackbarMessage ref="smsg" open={ this.state.openSnackMsg } />
      </div>
      );
  }
})

const SnackbarMessage = React.createClass({

  getInitialState() {
    return {
      autoHideDuration: 2000,
      message: 'Please select an employee!'
    }
  },

  render() {
    return (
      <Snackbar open={ this.props.open } message={ this.state.message } autoHideDuration={ this.state.autoHideDuration } />
      );
  }
})

export default BuildList
