import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout currentLink="blog">

      <SEO title="Kiro Hanna's Blog" />
      <div className="blog-posts">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <hr/>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}
                <Link to={post.frontmatter.path}>Show more</Link></p>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}


export const pageQuery = graphql`
query BlogQuery {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          path
        }
      }
    }
  }
}
`

