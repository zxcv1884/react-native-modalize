import React from 'react';
import { Animated, SectionList as RNSectionList } from 'react-native';

const AnimatedSectionList = Animated.createAnimatedComponent(RNSectionList);

export const SectionList = ({ ...props }) => <AnimatedSectionList {...props} />;
