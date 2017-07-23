const React = require('react')
const {Route} = require('react-router-dom')
const {QueryRenderer} = require('react-relay')

const renderQueryRenderer = (environment, query, render) => (props) => {
  const variables = props.match.params || {}
  return <QueryRenderer environment={environment} query={query} variables={variables} render={render(props)} />
}

const renderComponent = (Component) => (props) => ({error, props: relayProps}) => {
  if (error || !relayProps) return null
  return <Component {...props} {...relayProps} />
}

const RelayRoute = ({component: Component, environment, query, ...routeProps}) => {
  query = query || Component.query
  return <Route
    {...routeProps}
    render={renderQueryRenderer(environment, query, renderComponent(Component))}
  />
}

module.exports = {
  RelayRoute
}
