import React from 'react';



function Drawer () {
    return (
        <div>

<div className='drawer'> <h2 className='d-flex justify-between
           '>Корзина <button className='btn_remove mr-10'><img src='/img/btn_remove.png' alt='Remove'></img></button></h2> 
           <div className='cartItem mt-20 d-flex  align-center'>
           <img className='mr-20 ml-20 mb-10' width={70} height={70} src='/img/sneakers/3.png' alt='Sneaker3'/>
           <div className='mr-20'>
            <p className='mb-5'>Кроссовки Puma X Aka Boku Future Rider</p>
            <b>8 499 руб.</b>
           </div>
           <button className='btn_remove mr-10'><img src='/img/btn_remove.png' alt='Remove'></img></button>
           
           </div>
           
           <div className='cartItem mt-20 d-flex align-center'>
           <img className='mr-20 ml-20 mb-10' width={70} height={70} src="/img/sneakers/9.png" alt="Sneaker1"/>
           <div className='mr-20'>
            <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <b>12 999 руб.</b>
           </div>
           <button className='btn_remove mr-10'><img src='/img/btn_remove.png' alt='Remove'></img></button>
           
           </div>
           
           <div className='items'>
                <ul className='cartTotalBlock'>
                  <li className='d-flex'>
                    <span>Итого:</span>
                    <div className='line_1'></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li className='d-flex'>
                    <span>Налог 5%: </span>
                    <div className='line_2'></div>
                    <b>1074 руб. </b>
                  </li>
                  </ul>
             <button className='greenButton'>Оформить заказ<img width={13}  src='/img/arrow.svg'/></button>

           </div>
           </div>

        </div>
    )
}

export default Drawer;