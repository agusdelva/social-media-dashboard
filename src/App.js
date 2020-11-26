import React from 'react'
import './styles/global.css';
import Header from './components/Header.js'
import TopCardList from './components/top-card-list.js'
import Overview from './components/Overview.js'
import Switch from './components/Switch.js'

function App() {
  return (
    <>
    <Header>
      <Switch/>
    </Header>
    <TopCardList/>
    <Overview/>
    </>
  );
}

export default App;
