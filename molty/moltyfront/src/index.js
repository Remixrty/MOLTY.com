import React, { createContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Router from './Router';
import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCNJktsrRkPUONf3ow14D0FGJ1bKV-AkJo",
  authDomain: "moltycom.firebaseapp.com",
  projectId: "moltycom",
  storageBucket: "moltycom.appspot.com",
  messagingSenderId: "104654416801",
  appId: "1:104654416801:web:ef778b35200f3b5ef879e0",
  measurementId: "G-ZDKEQ7EWNK"
}



const firebaseApp = initializeApp(firebaseConfig)
const firestore = getFirestore(firebaseApp)


const Context = createContext()

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<Render />)

function Render() {
  useEffect(() => {
    console.log('Hello world!')
  })

  return <>
    <React.StrictMode>
      <App />
      <Context.Provider value={{
        firebase,
        firestore
      }}>
        <Router />
      </Context.Provider>
    </React.StrictMode>
  </>
}

