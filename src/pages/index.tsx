// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Header, Button } from "@atoms"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = () => (
  <>
    <h1>Gatsby supports TypeScript by default!</h1>
    <Header title="Alias' and Typescript">
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </Header>
    <Button content="Press Me" />
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
