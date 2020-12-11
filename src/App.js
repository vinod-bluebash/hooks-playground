import './App.css';
import React from 'react'
import DataFetching from './components/useEffect/DataFetching'
import ReducerCounter from './components/useReducer/ReducerCounter'
import ParentComponent from './components/useCallback/ParentComponent';
import Counter from './components/useMemo/Counter'
import FocusInput from './components/useRef/FocusInput';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';
import DocTitleOne from './components/CustomHooks/DocTitleOne';
import DocTitleTwo from './components/CustomHooks/DocTitleTwo'
import CounterOne from './components/CustomHooks/CounterOne'
import CounterTwo from './components/CustomHooks/CounterTwo';
import UserForm from './components/CustomHooks/UserForm';
import HookCounter from './components/useState/HookCounter';
import ClassCounterOne from './components/useEffect/ClassCounterOne';
import HookCounterOne from './components/useEffect/HookCounterOne';
import ComponentD from './components/useContext/ComponentD';

export const UserContext = React.createContext()
export const UserEmail = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'username'}>
        <UserEmail.Provider value={'user@email.com'}>
          <HookCounter />
          {/* <ClassCounterOne /> */}
          {/* <HookCounterOne /> */}
          {/* <DataFetching /> */}
          {/* <ComponentD /> */}
          {/* <ReducerCounter /> */}
          {/* <ParentComponent /> */}
          {/* <Counter /> */}
          {/* <FocusInput /> */}
          {/* <ClassTimer /> */}
          {/* <HookTimer /> */}
          {/* <DocTitleOne /> */}
          {/* <DocTitleTwo /> */}
          {/* <CounterOne /> */}
          {/* <CounterTwo /> */}
          {/* <UserForm /> */}
        </UserEmail.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
