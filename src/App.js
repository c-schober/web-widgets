import './App.css'

import PreferenceCenter from './widgets/PreferenceCenter'


const App = ({ domElement }) => {
  const widgetVariant = domElement.getAttribute('data-widget-variant')

  switch (widgetVariant) {
    case 'preference-center':
      return <PreferenceCenter />
    default:
      return null
  }
}

export default App
