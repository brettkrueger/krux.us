import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Thoughts"/>
      <h1><span role="img" aria-label="Memo Emoji">📝</span> Ramblings of a madman</h1>
      <h3>A Bit About Me</h3>
      <p>I grew up in a small town you may have heard of called Austin. It's smack in the middle of Texas, so it's pretty hard to miss.
      I first got into computers around age 10 when I built my first gaming PC with my mom using Building a PC for Dummies. The early naughts were a simpler time.</p>
      <p>As you can tell, I'm not a designer. This site is built using WordPress' REST API (served through GraphQL) and Gatsby, and it uses the most basic template Gatsby comes with.
      My skills are primarily focused on backend development. I work with languages such as PHP, Python, and NodeJS to accomplish my goals (BASH too, of course, but we don't talk about that).</p>
      <sub>I don't have a traditional blog page, so here's...</sub>
      <h3>My Thoughts</h3>
      {data.allWpPost.edges.map(({ node }) => (
        <div>
          {node.date}
          <Link to={node.uri}>
            <p>{node.title}</p>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: date, order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          uri
          date(formatString:"MMM DD, YYYY")
        }
      }
    }
  }`

  //          <!--<div dangerouslySetInnerHTML={{ __html: node.excerpt }} />-->
