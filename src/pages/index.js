import React from "react"
//import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1><span role="img" aria-label="Waving Hand Emoji">👋</span> Greetings!</h1>
      <p>This is my site. It's not much, but it's mine. Make yourself comfortable! You can find my skills and all that good stuff further down this page in due time, should you choose.

      </p>

      <h4>My Skills</h4>
      <table>
      <tr>
      <th>Languages</th>
      <th>Frameworks</th>
      <th>Tools</th>
      <th>Platforms</th>
      <th>Misc</th>
      </tr>
      <tr>
      <td>
      <p>Python</p>
      <p>PHP</p>
      <p>NodeJS</p>
      <p>BASH</p>
      <p>MySQL</p>
      </td>
      <td>
      <p>WordPress</p>
      <p>GatsbyJS</p>
      <p>Django</p>
      <p>LAMP/LEMP</p>
      </td>
      <td>
      <p>Terraform</p>
      <p>ElasticSearch</p>
      <p>Various CI/CD tools (Jenkins/Branch/Bitbucket/etc.)</p>
      </td>
      <td>
      <p>Google Cloud</p>
      <p>Amazon AWS</p>
      <p>Managed WordPress (+ headless)</p>
      </td>
      <td>
      <p>Dovecot & Exim</p>
      <p>Scrum & Agile</p>
      <p>Confluence, Jira, Zendesk & Trello</p>
      </td>
      </tr>
      </table>
      <h4>My Links</h4>
      <li><a href="https://github.com/brettkrueger" target="_blank" rel="noreferrer">Github</a></li>
      <li><a href="https://linkedin.com/in/brettkrueger" target="_blank" rel="noreferrer">LinkedIn</a></li>
      <li><a href="https://keybase.io/brettkrueger" target="_blank" rel="noreferrer">Keybase</a></li>
    </Layout>
  )
}
