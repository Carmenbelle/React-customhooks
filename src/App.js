import React from 'react';
import './App.css';
import CounterOne from './Components/Customhook/Hooks/CounterOne';
import CounterTwo from './Components/Customhook/Hooks/CounterTwo';
// import DocTitleOne from './Components/Customhook/DocTitleOne';
// import DocTitleTwo from './Components/Customhook/DocTitleTwo';
// import ClassTimer from './Components/Userefhook/ClassTimer';
// import HookTimer from './Components/Userefhook/HookTimer';
// import FocusInput from './Components/Userefhook/FocusInput';
// import ParentComponent from './Components/ParentComponent';
// import Counter from './Components/Usememohook/Counter';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <HookTimer /> */}
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
