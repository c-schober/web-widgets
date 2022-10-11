import './App.css'

import PreferenceCenter from './widgets/PreferenceCenter'


const App = ({ domElement }) => {
  const widgetVariant = domElement.getAttribute('data-widget-variant')
  const payload = JSON.parse(domElement.getAttribute('data-payload'))

  switch (widgetVariant) {
    case 'preference-center':
      return <PreferenceCenter email={payload.email} />
    default:
      return null
  }
}

export default App
