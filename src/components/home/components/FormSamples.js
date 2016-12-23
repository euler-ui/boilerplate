import React from 'react';
import TextField from 'material-ui/TextField';
import { Tabs, Tab } from 'material-ui/Tabs';
import TimePicker from 'material-ui/TimePicker';
import Checkbox from 'material-ui/Checkbox';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import { orange500, blue500 } from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
  radioButton: {
    marginBottom: 16,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
const SelectFieldExampleSimple = React.createClass({
  getInitialState() {
    return {
      value: 1,
    }
  },

  handleChange(event, index, value) {
    this.setState({
      value
    })
  },

  render() {
    return (
      <div>
        <h1>Select Simple Example</h1>
        <SelectField floatingLabelText="Frequency" value={ this.state.value } onChange={ this.handleChange }>
          <MenuItem value={ 1 } primaryText="Never" />
          <MenuItem value={ 2 } primaryText="Every Night" />
          <MenuItem value={ 3 } primaryText="Weeknights" />
          <MenuItem value={ 4 } primaryText="Weekends" />
          <MenuItem value={ 5 } primaryText="Weekly" />
        </SelectField>
        <br />
        <SelectField floatingLabelText="Frequency" value={ 1 } disabled={ true }>
          <MenuItem value={ 1 } primaryText="Disabled" />
          <MenuItem value={ 2 } primaryText="Every Night" />
        </SelectField>
        <br />
        <SelectField floatingLabelText="Frequency" value={ this.state.value } onChange={ this.handleChange } style={ styles.customWidth }>
          <MenuItem value={ 1 } primaryText="Custom width" />
          <MenuItem value={ 2 } primaryText="Every Night" />
          <MenuItem value={ 3 } primaryText="Weeknights" />
          <MenuItem value={ 4 } primaryText="Weekends" />
          <MenuItem value={ 5 } primaryText="Weekly" />
        </SelectField>
        <br />
        <SelectField floatingLabelText="Frequency" value={ this.state.value } onChange={ this.handleChange } autoWidth={ true }>
          <MenuItem value={ 1 } primaryText="Auto width" />
          <MenuItem value={ 2 } primaryText="Every Night" />
          <MenuItem value={ 3 } primaryText="Weeknights" />
          <MenuItem value={ 4 } primaryText="Weekends" />
          <MenuItem value={ 5 } primaryText="Weekly" />
        </SelectField>
      </div>
      );
  }
})

const SelectFieldExampleNullable = React.createClass({
  getInitialState() {
    return {
      value: null,
    }
  },

  handleChange(event, index, value) {
    this.setState({
      value
    })
  },

  render() {
    return (
      <div>
        <h1>Select Nullable Value</h1>
        <SelectField floatingLabelText="Ready?" value={ this.state.value } onChange={ this.handleChange }>
          <MenuItem value={ null } primaryText="" />
          <MenuItem value={ false } primaryText="No" />
          <MenuItem value={ true } primaryText="Yes" />
        </SelectField>
      </div>
      );
  }
})

const SelectFieldExampleCustomLabel = React.createClass({
  getInitialState() {
    return {
      value: 1,
    }
  },

  handleChange(event, index, value) {
    this.setState({
      value
    })
  },

  render() {
    return (
      <div>
        <h1>Select Custom Label</h1>
        <SelectField value={ this.state.value } onChange={ this.handleChange }>
          <MenuItem value={ 1 } label="5 am - 12 pm" primaryText="Morning" />
          <MenuItem value={ 2 } label="12 pm - 5 pm" primaryText="Afternoon" />
          <MenuItem value={ 3 } label="5 pm - 9 pm" primaryText="Evening" />
          <MenuItem value={ 4 } label="9 pm - 5 am" primaryText="Night" />
        </SelectField>
      </div>
      );
  }
})
const items = [
  <MenuItem key={ 1 } value={ 1 } primaryText="Never" />,
  <MenuItem key={ 2 } value={ 2 } primaryText="Every Night" />,
  <MenuItem key={ 3 } value={ 3 } primaryText="Weeknights" />,
  <MenuItem key={ 4 } value={ 4 } primaryText="Weekends" />,
  <MenuItem key={ 5 } value={ 5 } primaryText="Weekly" />,
];
const SelectFieldExampleError = React.createClass({
  getInitialState() {
    return {
      value: null,
    }
  },

  handleChange(event, index, value) {
    this.setState({
      value
    })
  },

  render() {
    const {value} = this.state;
    const night = value === 2 || value === 3;

    return (
      <div>
        <h1>Select Error Example</h1>
        <SelectField value={ value } onChange={ this.handleChange } errorText={ !night && 'Should be Night' }>
          { items }
        </SelectField>
        <br />
        <SelectField value={ value } onChange={ this.handleChange } errorText={ night && 'Should not be Night (Custom error style)' } errorStyle={ { color: 'orange' } }>
          { items }
        </SelectField>
      </div>
      );
  }
})

const TimePickerExampleSimple = () => (
<div>
  <TimePicker hintText="12hr Format" />
  <TimePicker hintText="12hr Format with auto ok" autoOk={ true } />
  <TimePicker format="24hr" hintText="24hr Format" />
  <TimePicker disabled={ true } format="24hr" hintText="Disabled TimePicker" />
</div>
)

const TextFields = () => (
<div>
  <h1>Basic</h1>
  <TextField hintText="Hint Text" />
  <br />
  <br />
  <TextField hintText="The hint text can be as long as you want, it will wrap." />
  <br />
  <TextField id="text-field-default" defaultValue="Default Value" />
  <br />
  <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />
  <br />
  <TextField defaultValue="Default Value" floatingLabelText="Floating Label Text" />
  <br />
  <TextField hintText="Hint Text" floatingLabelText="Fixed Floating Label Text" floatingLabelFixed={ true } />
  <br />
  <TextField hintText="Password Field" floatingLabelText="Password" type="password" />
  <br />
  <TextField hintText="MultiLine with rows: 2 and rowsMax: 4" multiLine={ true } rows={ 2 } rowsMax={ 4 } />
  <br />
  <TextField hintText="Message Field" floatingLabelText="MultiLine and FloatingLabel" multiLine={ true } rows={ 2 } />
  <br />
  <TextField hintText="Full width" fullWidth={ true } />
</div>
)

const TextFieldExampleError = () => (
<div>
  <h1>Error examples</h1>
  <TextField hintText="Hint Text" errorText="This field is required" />
  <br />
  <TextField hintText="Hint Text" errorText="The error text can be as long as you want, it will wrap." />
  <br />
  <TextField hintText="Hint Text" errorText="This field is required" floatingLabelText="Floating Label Text" />
  <br />
  <TextField hintText="Message Field" errorText="This field is required." floatingLabelText="MultiLine and FloatingLabel" multiLine={ true } rows={ 2 }
  />
  <br />
</div>
);

const TextFieldExampleCustomize = () => (
<div>
  <h1>Styled examples</h1>
  <TextField hintText="Styled Hint Text" hintStyle={ styles.errorStyle } />
  <br />
  <TextField hintText="Custom error color" errorText="This field is required." errorStyle={ styles.errorStyle } />
  <br />
  <TextField hintText="Custom Underline Color" underlineStyle={ styles.underlineStyle } />
  <br />
  <TextField hintText="Custom Underline Focus Color" underlineFocusStyle={ styles.underlineStyle } />
  <br />
  <TextField floatingLabelText="Styled Floating Label Text" floatingLabelStyle={ styles.floatingLabelStyle } floatingLabelFocusStyle={ styles.floatingLabelFocusStyle } />
</div>
);
const TextFieldExampleDisabled = () => (
<div>
  <h1>Disabled examples</h1>
  <TextField disabled={ true } hintText="Disabled Hint Text" />
  <br />
  <TextField disabled={ true } id="text-field-disabled" defaultValue="Disabled Value" />
  <br />
  <TextField disabled={ true } hintText="Disabled Hint Text" floatingLabelText="Floating Label Text" />
  <br />
  <TextField disabled={ true } hintText="Disabled Hint Text" defaultValue="Disabled With Floating Label" floatingLabelText="Floating Label Text" />
</div>
);

const CheckboxExampleSimple = () => (
<div style={ styles.block }>
  <h1>Checkboxs</h1>
  <Checkbox label="Simple" style={ styles.checkbox } />
  <Checkbox checkedIcon={ <ActionFavorite /> } uncheckedIcon={ <ActionFavoriteBorder /> } label="Custom icon" style={ styles.checkbox } />
  <Checkbox checkedIcon={ <Visibility /> } uncheckedIcon={ <VisibilityOff /> } label="Custom icon of different shapes" style={ styles.checkbox } />
  <Checkbox label="Disabled unchecked" disabled={ true } style={ styles.checkbox } />
  <Checkbox label="Disabled checked" checked={ true } disabled={ true } style={ styles.checkbox } />
  <Checkbox label="Label on the left" labelPosition="left" style={ styles.checkbox } />
</div>
);

const RadioButtonExampleSimple = () => (
<div>
  <h1>Radios</h1>
  <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
    <RadioButton value="light" label="Simple" style={ styles.radioButton } />
    <RadioButton value="not_light" label="Selected by default" style={ styles.radioButton } />
    <RadioButton value="ludicrous" label="Custom icon" checkedIcon={ <ActionFavorite /> } uncheckedIcon={ <ActionFavoriteBorder /> } style={ styles.radioButton } />
  </RadioButtonGroup>
  <RadioButtonGroup name="shipName" defaultSelected="community">
    <RadioButton value="enterprise" label="Disabled unchecked" disabled={ true } style={ styles.radioButton } />
    <RadioButton value="community" label="Disabled checked" disabled={ true } style={ styles.radioButton } />
  </RadioButtonGroup>
  <RadioButtonGroup name="notRight" labelPosition="left" style={ styles.block }>
    <RadioButton value="reverse" label="Label on the left" style={ styles.radioButton } />
  </RadioButtonGroup>
</div>
);

const ToggleExampleSimple = () => (
<div style={ styles.block }>
  <h1>Toogles</h1>
  <Toggle label="Simple" style={ styles.toggle } />
  <Toggle label="Toggled by default" defaultToggled={ true } style={ styles.toggle } />
  <Toggle label="Disabled" disabled={ true } style={ styles.toggle } />
  <Toggle label="Label on the right" labelPosition="right" style={ styles.toggle } />
  <Toggle label="Styling" thumbStyle={ styles.thumbOff } trackStyle={ styles.trackOff } thumbSwitchedStyle={ styles.thumbSwitched } trackSwitchedStyle={ styles.trackSwitched }
    labelStyle={ styles.labelStyle } />
</div>
);

const AutoCompleteExampleSimple = React.createClass({
  getInitialState() {
    return {
      dataSource: [],
    };
  },

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  },

  render() {
    return (
      <div>
        <h1>Simple example</h1>
        <AutoComplete hintText="Type anything" dataSource={ this.state.dataSource } onUpdateInput={ this.handleUpdateInput } />
        <AutoComplete hintText="Type anything" dataSource={ this.state.dataSource } onUpdateInput={ this.handleUpdateInput } floatingLabelText="Full width" fullWidth={ true }
        />
      </div>
      );
  }
})

const dataSource1 = [{
  text: 'text-value1',
  value: (
  <MenuItem primaryText="text-value1" secondaryText="&#9786;" />
  ),
}, {
  text: 'text-value2',
  value: (
  <MenuItem primaryText="text-value2" secondaryText="&#9786;" />
  ),
},];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [{
  textKey: 'Some Text',
  valueKey: 'someFirstValue'
}, {
  textKey: 'Some Text',
  valueKey: 'someSecondValue'
},];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

const AutoCompleteExampleNoFilter = () => (
<div>
  <h1>Data sources</h1>
  <AutoComplete hintText="text-value data" filter={ AutoComplete.noFilter } dataSource={ dataSource1 } />
  <br />
  <AutoComplete floatingLabelText="showAllItems" filter={ AutoComplete.noFilter } openOnFocus={ true } dataSource={ dataSource2 } />
  <br />
  <AutoComplete floatingLabelText="Same text, different values" filter={ AutoComplete.noFilter } openOnFocus={ true } dataSource={ dataSource3 } dataSourceConfig={ dataSourceConfig }
  />
</div>
);

const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const fruit = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon',
];

const AutoCompleteExampleFilters = () => (
<div>
  <h1>Filters</h1>
  <AutoComplete floatingLabelText="Type 'r', case insensitive" filter={ AutoComplete.caseInsensitiveFilter } dataSource={ colors } />
  <br />
  <AutoComplete floatingLabelText="Type 'peah', fuzzy search" filter={ AutoComplete.fuzzyFilter } dataSource={ fruit } maxSearchResults={ 5 } />
</div>
);

const DatePickerExampleSimple = () => (
<div>
  <h1>DatePicker Simple Examples</h1>
  <DatePicker hintText="Portrait Dialog" />
  <DatePicker hintText="Landscape Dialog" mode="landscape" />
  <DatePicker hintText="Dialog Disabled" disabled={ true } />
</div>
);
const DatePickerExampleInline = () => (
<div>
  <h1>DatePicker Inline Examples</h1>
  <DatePicker hintText="Portrait Inline Dialog" container="inline" />
  <DatePicker hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
</div>
);
var Form = React.createClass({
  render() {
    return (
      <div>
        <Tabs className="components-secondary-navbar">
          <Tab label="TextField">
            <TextFields />
            <TextFieldExampleError />
            <TextFieldExampleCustomize />
            <TextFieldExampleDisabled />
          </Tab>
          <Tab label="AutoComplete">
            <AutoCompleteExampleSimple />
            <AutoCompleteExampleNoFilter />
            <AutoCompleteExampleFilters />
          </Tab>
          <Tab label="Select">
            <SelectFieldExampleSimple />
            <SelectFieldExampleNullable />
            <SelectFieldExampleCustomLabel />
            <SelectFieldExampleError />
          </Tab>
          <Tab label="DatePicker">
            <DatePickerExampleSimple />
            <DatePickerExampleInline />
          </Tab>
          <Tab label="CheckBox & Radios & Toogle">
            <CheckboxExampleSimple />
            <RadioButtonExampleSimple />
            <ToggleExampleSimple />
          </Tab>
          <Tab label="TimePicker">
            <TimePickerExampleSimple />
          </Tab>
        </Tabs>
      </div>
      );
  }
});

module.exports = Form
