import React, { ReactNode } from 'react';
import { Modal as RNModal } from 'react-native';

interface IReactModalProps {
  children: ReactNode;
  isVisible: boolean;
  useNativeDriver?: boolean;
  onBackPress(): void;
}

export const Modal = ({ children, isVisible, useNativeDriver, onBackPress }: IReactModalProps) => (
  <RNModal
    supportedOrientations={['landscape', 'portrait', 'portrait-upside-down']}
    onRequestClose={onBackPress}
    hardwareAccelerated={useNativeDriver}
    visible={isVisible}
    transparent
  >
    {children}
  </RNModal>
);
