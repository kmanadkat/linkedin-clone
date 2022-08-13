import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import store from './Store'
import App from './App'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          borderRadius: '4px',
          background: '#333',
          color: '#fff',
        },
      }}
    />
    <App />
  </Provider>
)
