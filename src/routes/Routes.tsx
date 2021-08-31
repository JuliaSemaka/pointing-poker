import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Footer, Header } from '../components';
import { Start, Game, Lobby, Settings, ErrorPage } from '../pages';

// Routes
export const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup className="main-page">
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route component={Start} path="/" exact />
            <Route component={Game} path="/game" />
            <Route component={Settings} path="/settings" />
            <Route component={Lobby} path="/lobby" />
            <Route component={ErrorPage} path="*" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
};

export default Routes;
