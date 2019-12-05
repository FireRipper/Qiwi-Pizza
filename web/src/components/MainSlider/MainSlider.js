import React from 'react'
import { Carousel } from 'antd'
import './MainSlider.css'

const MainSlider  = () => (
  <Carousel autoplay autoplaySpeed={5000}>
      <div className='main-slider-background__purple'>
          <h3>Order week</h3>
      </div>
      <div className='main-slider-background__blue'>
          <h3>Look</h3>
      </div>
      <div className='main-slider-background__green'>
          <h3>See possibility everywhere</h3>
      </div>
  </Carousel>
)

export default MainSlider
