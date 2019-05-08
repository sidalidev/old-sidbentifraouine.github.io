/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import './layout.css'
import Footer from './Footer'

const theme = {
  white: '#FDFDFF',
  black: '#393D3F'
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  height: 100vh;
  width: 100vw;
  grid-gap: 4rem 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <Container>
          <main>{children}</main>
          <Footer />
        </Container>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
