import React from 'react';
import { Animated } from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';

const AnimatedWebView = Animated.createAnimatedComponent(RNWebView);

export const WebView = () => <AnimatedWebView />;
