import React from 'react';
import { Animated, FlatList as RNFlatList } from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(RNFlatList);

export const FlatList = ({ ...props }) => <AnimatedFlatList {...props} />;
