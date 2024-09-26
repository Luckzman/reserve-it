import React from 'react'
import Layout from '../Components/Layout'
import CallToAction from '../Components/CallToAction'
import Specials from '../Components/Specials'
import Testimonials from '../Components/CustomersSay'
import Chicago from '../Components/Chicago'

const HomePage = () => {
  return (
    <Layout>
       <CallToAction />
       <Specials />
       <Testimonials />
       <Chicago />
    </Layout>
  )
}

export default HomePage