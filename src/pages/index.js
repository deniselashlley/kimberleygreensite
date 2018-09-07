import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div>
          {posts
            .map(({ node: post }) => (
              <section 
                id={post.frontmatter.sectionId} 
                className={`section section--${post.frontmatter.sectionId}`} 
                key={post.id}
              >
                <div className="container">
                  <h2>
                    {post.frontmatter.title}
                  </h2>
                  <div className="inner-wrapper" dangerouslySetInnerHTML={{ __html: post.html }} /> 
                </div>
              </section>
          ))}
        </div>
      )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          html
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            sectionId
          }
        }
      }
    }
  }
`
