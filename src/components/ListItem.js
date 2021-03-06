import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  titleClick() {
    if (this.props.library.id === this.props.selectedLibraryId) {
      this.props.selectedLibrary(null);
    } else {
      this.props.selectedLibrary(this.props.library.id);
    }
  }
  showDescription() {
    if (this.props.expanded) {
      return (
        <CardSection>
          <Text style={styles.descStyle}>
            {this.props.library.description}
          </Text>
        </CardSection>
      );
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.titleClick.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.library.title}
            </Text>
          </CardSection>
          {this.showDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 58,
    paddingLeft: 15
  },
  descStyle: {
    fontSize: 24,
    paddingLeft: 25
  }
};

const MapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return ({ selectedLibraryId: state.selectedLibraryId, expanded });
};


export default connect(MapStateToProps, actions)(ListItem);
