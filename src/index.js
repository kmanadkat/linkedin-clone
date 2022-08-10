import React from 'react'
import { Toaster } from 'react-hot-toast'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import './index.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<Toaster
			position='top-right'
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
