import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Router from './Router';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<Render />)

function Render() {
  useEffect(() => {
    console.log('Hello world!')
  })

  return <>
    <React.StrictMode>
      {/* <App /> */}
      <Router />
    </React.StrictMode>
  </>
}

