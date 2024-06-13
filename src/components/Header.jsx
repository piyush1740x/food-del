import React from 'react'

const Header = () => {
  return (
    <div className='Header'>
    <div className="text">
        <h2 className='text-center font-bold text-2xl mt-4'>Place order your <span className='text-orange-600'>delicious</span> food</h2>
        <p className='mt-8 text-center font-bold text-white mr-10'> "Discover the ultimate dining convenience with our Food Del app! Whether it's gourmet meals, quick bites, or fresh groceries, we've got you covered. Enjoy easy ordering, real-time tracking, and a wide cuisine selection. Get exclusive deals, contactless delivery, and top-notch safety. Download now to bring your city's best straight to your doorstep!"</p>

        <button className=' menu bg-orange-600 hover:bg-orange-500  float-right mt-10 rounded-2xl px-3 py-2 mr-[220px]'>View Menu..</button>
    </div>

    </div>
  )
}

export default Header