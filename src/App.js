import './App.css'

import PoemOMat from './widgets/PoemOMat'

const App = ({ domElement }) => {
  const widgetVariant = domElement.getAttribute('data-widget-variant')
  const payload = JSON.parse(domElement.getAttribute('data-payload'))
  console.log(payload)
  switch (widgetVariant) {
    case 'poem-o-mat':
      return <PoemOMat />
    default:
      return null
  }
}

export default App
