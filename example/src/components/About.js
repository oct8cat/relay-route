const React = require('react')
const {graphql, createFragmentContainer} = require('react-relay')

const About = createFragmentContainer(({viewer}) => {
  return (
    <div>
      <h1>About</h1>
      <p>{viewer.about.text}</p>
    </div>
  )
}, graphql`
  fragment About_viewer on Viewer {
    about {
      text
    }
  }
`)

About.query = graphql`
  query AboutQuery {
    viewer {
      ...About_viewer
    }
  }
`

module.exports = About
