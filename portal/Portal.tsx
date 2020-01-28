import * as React from 'react';

import { PortalConsumer } from './PortalConsumer';
import PortalHost, { PortalContext, IPortalMethods } from './PortalHost';

interface IProps {
  children: React.ReactNode;
};

export class Portal extends React.Component<IProps> {
  static Host = PortalHost;

  render() {
    const { children } = this.props;

    return (
      <PortalContext.Consumer>
        {manager => (
          <PortalConsumer manager={manager as IPortalMethods}>
            {children}
          </PortalConsumer>
        )}
      </PortalContext.Consumer>
    );
  }
}
