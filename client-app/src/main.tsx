import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/layout/App.tsx'
import 'semantic-ui-css/semantic.min.css'
import './app/layout/styles.css'
import { StoreContext, store } from './app/stores/store.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/Routes.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>   
  </React.StrictMode>
)
