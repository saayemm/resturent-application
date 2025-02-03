import React from 'react'
import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import Fimg from '../../assets/featured.jpg'
import UseMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
  const [menu] = UseMenu();
  const todaysOffer = menu.filter(item=> item.category==='offered');
  const dessert = menu.filter(item=> item.category==='dessert');
  const salad = menu.filter(item=> item.category==='salad');
  const soup = menu.filter(item=> item.category==='soup');
  const pizza = menu.filter(item=> item.category==='pizza');

  return (
    <div>
        <Helmet>
            <title>Urban Flavour | Menu</title>
        </Helmet>
        
        <div>
          <Cover img={Fimg} heading={"OUR MENU"} subheading={"Would you like to try a dish?"}></Cover>
          <SectionTitle heading={"TODAY'S OFFER"} subHeading={"---Don't miss---"}></SectionTitle>
          <MenuCategory item={todaysOffer}></MenuCategory>
        </div>
        <div>
          <Cover img={Fimg} heading={"DESSERTS"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
          <MenuCategory item={dessert}></MenuCategory>
        </div>
        <div>
          <Cover img={Fimg} heading={"PIZZA"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
          <MenuCategory item={pizza}></MenuCategory>
        </div>
        <div>
          <Cover img={Fimg} heading={"SALADS"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
          <MenuCategory item={salad}></MenuCategory>
        </div>
        <div>
          <Cover img={Fimg} heading={"SOUPS"} subheading={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
          <MenuCategory item={soup}></MenuCategory>
        </div>
    </div>
  )
}

export default Menu