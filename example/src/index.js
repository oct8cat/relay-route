const React = require('react')
const {render} = require('react-dom')
const {HashRouter: Router} = require('react-router-dom')
const {RelayRoute} = require('../..')
const {environment} = require('./relay')
const App = require('./components/App')

const Root = () => {
  return (
    <Router>
      <RelayRoute component={App} environment={environment} />
    </Router>
  )
}

render(<Root />, document.getElementById('root'))
