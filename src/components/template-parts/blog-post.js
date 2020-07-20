import React from "react"
import SEO from "../../components/seo"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  return (
    <Layout>
      <SEO title="Blog" description={title}/>
      <h1> {title} </h1>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
        <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
      )}
      <p dangerouslySetInnerHTML={{ __html: content }} />

      <br />
      {!!nextPage && (
        <Link to={normalizePath(nextPage.uri)}>Previous: {nextPage.title}</Link>
      )}
      <br />
      {!!previousPage && (
        <Link to={normalizePath(previousPage.uri)}>
          Next: {previousPage.title}
        </Link>
      )}
    </Layout>
  )
}

export default BlogPost
