import React from 'react'

function Header() {
  return (
    <div>
<header className='d-flex justify-between align-center p-40'>
     <div className='headerLeft   d-flex align-center'>
      <img width = {40} height = {40} src = '/img/logo.png'/>
      <div className='headerInfo'>
        <h3>
          REACT SNEAKERS
        </h3>
        <p className='opacity-5'>Магазин лучших товаров</p>
      </div>  
     </div>

      <ul className='d-flex'>
        <li className='mr-30'>
          <img width={21} height={19} src='/img/vector.png'/>
          <span>1205 руб.</span>
        </li>
        <li className='mr-50'><img width={21} height={19} src="/img/heart.png"/></li>
      </ul>
     </header>
    </div>
  )
}

export default Header