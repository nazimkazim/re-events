import React, { Component } from 'react';
import Script from 'react-load-script';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../modals/modalActions';

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

const actions = {
  openModal
};

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  state = {
    address: '',
    scriptLoaded: false
  };

  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  onChange = address => this.setState({ address });

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    const { openModal } = this.props;
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAiHCG1wT_D2WXnrQrbbBWqGxl0hZXsTbM&libraries=places"
          onLoad={this.handleScriptLoad}
        />

        <Button
          onClick={() => openModal('TestModal', { data: 43 })}
          content="Open Modal"
          color="teal"
        />

        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <Button content="Submit" color="red" />
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(TestComponent);
