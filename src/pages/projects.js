import React from "react"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <h1><span role="img" aria-label="Under Construction Emoji">🚧</span> Projects</h1>
      <p>This is where you'll find info on the various projects I've worked on over the years.</p>
      <li><a href="https://wordpress.org/plugins/multisite-rest-api/" target="_blank" rel="noreferrer">Multisite REST API</a></li>
    </Layout>
  )
}
