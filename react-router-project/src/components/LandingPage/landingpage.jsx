import React from 'react'
import shopping from '../../assets/shopping.gif'
import './landingpage.css'

function LandingPage() {
  return (
    <div className='Landing-page'>
      <div className='header'>
      <h1>Welocme to ShopEase.</h1>
      <img src={shopping} alt="shopping" />
      <p>Happy Shopping :)</p>
      </div>

      {/* <div className='section1'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea pariatur nam architecto sapiente laboriosam, illum impedit dignissimos placeat deleniti a earum incidunt rerum laborum iusto eaque ut qui facilis obcaecati eos sit quis ex dolore.  </p>
      </div>
      <div className='section2'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum in nam perspiciatis quisquam est voluptates pariatur quod itaque corrupti enim ex tenetur, quo sit dicta delectus repudiandae ducimus, perferendis quis magnam, dolorum eveniet iusto? Qui debitis facilis officia dolore corrupti culpa cum. Odio sequi nulla quod, sapiente, officia dolor iusto nisi magni, voluptas amet aperiam dolores dicta error odit eius hic quo aliquid est autem illo. </p>
      </div> */}
     
    </div>
  )
}

export default LandingPage