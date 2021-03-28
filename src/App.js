import React from 'react';
import Body from './components/body';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header>
        <Header.Form>
          <Header.Input placeholder="Search" />
        </Header.Form>
      </Header>

      <Body>
        <Body.Container>
          <Body.Image />
          <Body.Info>
            <Body.Title> </Body.Title>
            <Body.Rating></Body.Rating>
          </Body.Info>
          <Body.Overview>
            <Body.About></Body.About>
          </Body.Overview>
        </Body.Container>
      </Body>
    </>
  );
}

export default App;
