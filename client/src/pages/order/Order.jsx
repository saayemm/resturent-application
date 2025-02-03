import React, { useState } from 'react'
import Cover from '../shared/Cover'
import Cimg from '../../assets/featured.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../hooks/UseMenu';
import FoodCard from '../../components/FoodCard';

const Order = () => {
    const [tabIndex, settabIndex] = useState(0)
    const [ menu ] = UseMenu()
    const dessert = menu.filter(item=> item.category==='dessert');
    const salad = menu.filter(item=> item.category==='salad');
    const soup = menu.filter(item=> item.category==='soup');
    const pizza = menu.filter(item=> item.category==='pizza');
    const drinks = menu.filter(item=> item.category==='drinks');
  return (
    <div className='max-w-[1240px] mx-auto'>
        <Cover img={Cimg} heading={"OUR SHOP"} subheading={"Would you like to try a dish?"}></Cover>
        <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => settabIndex(index)}>
            <TabList>
                 <Tab>Salad</Tab>
                 <Tab>pizza</Tab>
                 <Tab>soups</Tab>
                 <Tab>desserts</Tab>
                 <Tab>drinks</Tab>
             </TabList>
            <TabPanel>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    salad.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    pizza.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    soup.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    dessert.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    drinks.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
                </div>
            </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default Order