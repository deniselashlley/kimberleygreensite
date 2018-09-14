import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import '../sass/style.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Kimberley Green — Social Impact Consultant"
      meta={[
        { name: 'description', content: 'Social impact consultant based in the UK, Ghana providing strategy development and capacity building services for the public and private sector' },
        { name: 'keywords', content: 'kimberley green, kimberleygreen, kim green, kimgreen, social impact consultant, social impact, social development, consultant, civil society, private sector, corporate social responsibility, social enterprise, entrepreneur, upside consulting, upside consulting, upsideconsultancy, upside, africa, west africa, ghana,  accra, UK, england, caribbean' },
      ]}
    />
    <Header />
    <main role="main">
    {children()}
    <Gallery />
    <Contact />
    </main>
    
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
