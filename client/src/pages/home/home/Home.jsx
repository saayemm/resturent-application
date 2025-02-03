import React from 'react'
import Banner from '../Banner'
import Category from '../category/Category'
import Decoration from '../../../components/Decoration'
import PopularMenu from './PopularMenu'
import Featured from './Featured'
import Dark from '../../../components/sectionTitle/Dark'
import Testimonial from '../Testimonial'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className='max-w-[1240px] mx-auto'>
        <Helmet>
                  <title>Urban Flavour | Home</title>
          </Helmet>
        <Banner></Banner>
        <Category></Category>
        <Decoration></Decoration>
        <PopularMenu></PopularMenu>
        <Dark></Dark>
        <Featured></Featured>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home