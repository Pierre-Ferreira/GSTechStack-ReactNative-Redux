import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';


class ListItem extends Component {
  titleClick() {
console.log(this.props)
    if (this.props.library.id === this.props.selectedItem) {
      this.props.dispatch({ type: 'update_selected_item', payload: '' });
    } else {
      this.props.dispatch({ type: 'update_selected_item', payload: this.props.library.id });
    }
  }
  showDescription(id) {
    if (id === this.props.selectedItem) {
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
      <View>
        <CardSection>
          <Text
            style={styles.titleStyle}
            onPress={this.titleClick.bind(this)}
          >
            {this.props.library.title}
          </Text>
        </CardSection>
        {this.showDescription(this.props.library.id)}
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descStyle: {
    fontSize: 14,
    paddingLeft: 25
  }
};

const MapStateToProps = (state) => {
  return ({ selectedItem: state.selectedItem });
};

export default connect(MapStateToProps)(ListItem);
