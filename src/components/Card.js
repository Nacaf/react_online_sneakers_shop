import React from 'react';

function Card() {
  return (
    <div>
        <div className='card'>
          <button className='button like_btn'><img width={18} height={15} className="mt-5" src='/img/like.png'/></button>
           <img width={133} height={112} src="/img/sneakers/9.png" alt="sneaker1"/>
           <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
           <div className = "d-flex justify-between">
            <div className="d-flex flex-column price">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
            <button className='button'><img width={11} height={11} src="/img/plus.png" alt="Plus"/></button>
           </div>


      </div>
    </div>
  )
}

export default Card