import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import NewCollection from '../components/NewCollection/NewCollection'
import Newsletter from '../components/Newsletter/Newsletter'
const shop = () => {
  return (
    <div>
   <Hero/>
   <Popular/>
   <Offers/>
   <NewCollection/>
   <Newsletter/>
    </div>
  )
}

export default shop
