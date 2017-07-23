# <RelayRoute>

`<Route>` meets `<QueryRenderer>`

Simplifies lazy-loading GraphQL fragments for matching route component.

## TL;DR

```js
const {Route, HashRouter: Router} = require('react-router-dom')
const {RelayRoute} = require('relay-route')
const {Environment} = require('relay-runtime')

const environment = new Environment(...)

const Home = createFragmentContainer((...) => {
  return ...
}, graphql`
  ...
`)
Home.query = graphql`
  query AppHomeQuery { ... }
`

const Settings = createFragmentContainer((...) => {
  return ...
}, graphql`
  ...
`)
Settings.query = graphql`
  query AppSettingsQuery { ... }
`

const App = () => (
  <Router>
    <div>
      <Switch>
        <RelayRoute path='/home' component={Home} environment={environment} />
        <RelayRoute path='/settings' component={Settings} environment={environment} />
      </Switch>
    </div>
  </Router>
)
```

## Run example

```
yarn && yarn build-example && yarn example
```
