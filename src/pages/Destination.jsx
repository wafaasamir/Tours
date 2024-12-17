import React from 'react'
import PlacesSection from '../Components/Destination/PlacesSection'
import '../styles/destination.css'
import Breadcrumb from '../shared/breadcrumb/Breadcrumb'

function Destination() {
  return (
    <>
    <Breadcrumb buttonText={"Destination"} title={"Destination"}/>
      <PlacesSection/>
    </>
  )
}

export default Destination

