import React from 'react'
import PlacesSection from '../Components/Destination/PlacesSection'
import '../styles/destination.css'
import Breadcrumb from '../shared/breadcrumb/Breadcrumb'
import Newsletter from '../shared/newsletter/Newsletter'

function Destination() {
  return (
    <>
    <Breadcrumb buttonText={"Destination"} title={"Destination"}/>
      <PlacesSection/>
      <Newsletter />
    </>
  )
}

export default Destination

