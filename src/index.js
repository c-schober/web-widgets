import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const roots = []
const rootNodes = document.querySelectorAll('.react-widget')
rootNodes.forEach((node) => roots.push(ReactDOM.createRoot(node)))
roots.forEach((root) =>
  root.render(
    <React.StrictMode>
      <App domElement={rootNodes[0]} />
    </React.StrictMode>
  )
)
