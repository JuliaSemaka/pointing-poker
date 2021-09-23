import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Footer, Header } from '../components';
import { LobbyContainer, MainPageContainer } from '../containers';
import { Game, ErrorPage } from '../pages';

export const Routes: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup className="main-page">
        <CSSTransition timeout={300} classNames="fade" key={location.key}>
          <Switch location={location}>
            <Route component={MainPageContainer} path="/" exact />
            <Route component={Game} path="/game" />
            <Route component={LobbyContainer} path="/lobby" />
            <Route component={ErrorPage} path="*" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
};

export default Routes;
