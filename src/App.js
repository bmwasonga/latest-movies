import React from 'react';
import Body from './components/body/Body';
import Header from './components/header.js/Header';
function App() {
  return (
    <>
      <Header>
        <Header.Form>
          <Header.Input />
        </Header.Form>
      </Header>
      <Body />
    </>
  );
}

export default App;
