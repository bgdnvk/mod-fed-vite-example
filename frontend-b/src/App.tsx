//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
//
//function App() {
//  const [count, setCount] = useState(0)
//
//  return (
//    <>
//      <div>
//        <a href="https://vitejs.dev" target="_blank">
//          <img src={viteLogo} className="logo" alt="Vite logo" />
//        </a>
//        <a href="https://react.dev" target="_blank">
//          <img src={reactLogo} className="logo react" alt="React logo" />
//        </a>
//      </div>
//      <h1>Vite + React</h1>
//      <div className="card">
//        <button onClick={() => setCount((count) => count + 1)}>
//          count is {count}
//        </button>
//        <p>
//          Edit <code>src/App.tsx</code> and save to test HMR
//        </p>
//      </div>
//      <p className="read-the-docs">
//        Click on the Vite and React logos to learn more
//      </p>
//    </>
//  )
//}
//
//export default App

// frontend-a/src/App.tsx
//import React from 'react';
//
//const App: React.FC = () => (
//  <div>
//    <React.Suspense fallback="Loading Button...">
//      <button onClick={() => import('fragments/Button').then(module => module.default())}>Load Button</button>
//    </React.Suspense>
//    <React.Suspense fallback="Loading Header...">
//      <button onClick={() => import('fragments/Header').then(module => module.default())}>Load Header</button>
//    </React.Suspense>
//  </div>
//);

//export default App;

import { Suspense } from 'react'
import Button from 'fragments/Button'
import Header from 'fragments/Header'

const App = () => {
   return <>
    <Suspense fallback={<Loading/>}>
     <Header/>
     <Button/> 
    </Suspense>
  </>
}

const Loading = () => {
  return <h2> Loading... </h2>
}

export default App
