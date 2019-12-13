import React, { Component } from 'react';
import { Animated } from 'react-native';

export class ScrollView extends Component {
  render() {
    return <Animated.ScrollView {...this.props} />;
  }
}
