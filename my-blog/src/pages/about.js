import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout"

const AboutPag = () => (
  <Layout>
    <h1>About Page</h1>
      <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/" activeStyle={{ color: 'red' }}>Home</Link>
          </li>
        </ul>
  </Layout>
  
)

export default AboutPag;