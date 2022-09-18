import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer'


function App() {
  return (
    <div className="wrapper clear">
      <div className='overlay' style = {{display:'none'}}> 
        <Drawer/>
      </div>
      <Header/>
     <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'> 
        <h1>
        Все кроссовки
      </h1>
      <div className='search-block d-flex '>
        <img width={18} height={18} src='/img/search.png' alt='Search'/>
        <input  placeholder='Поиск...'/>
      </div>
      
      </div>
     
      <div className='d-flex justify-between'>
      <Card/>
      <div className='card'>
          <button className='button'><img width={18} height={15} className="mt-5" src='/img/like_1.png'/></button>
           <img width={133} height={112} src="/img/sneakers/2.png" alt="sneaker2"/>
           <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
           <div className = "d-flex justify-between">
            <div className="d-flex flex-column price">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
            <button className='button btn'><img  width={11} height={11} src="/img/checked.png" alt="Checked"/></button>
           </div>


      </div>
      <div className='card'>
          <button className='button'><img width={18} height={15} className="mt-5" src='/img/like_1.png'/></button>
           <img width={133} height={112} src="/img/sneakers/3.png" alt="sneaker3"/>
           <h5> Кроссовки Puma X Aka Boku Future Rider</h5>
           <div className = "d-flex justify-between">
            <div className="d-flex flex-column price">
              <p>Цена:</p>
              <b>8 999 руб.</b>
            </div>
            <button className='button'><img width={11} height={11} src="/img/plus.png" alt="Plus"/></button>
           </div>


      </div>
      <div className='card'>
          <button className='button'><img width={18} height={15} className="mt-5" src='/img/like_1.png'/></button>
           <img width={133} height={112} src="/img/sneakers/4.png" alt="sneaker4"/>
           <h5>Мужские Кроссовки Under Armour Curry 8</h5>
           <div className = "d-flex justify-between">
            <div className="d-flex flex-column price">
              <p>Цена:</p>
              <b>15 199 руб.</b>
            </div>
            <button className='button'><img width={11} height={11} src="/img/plus.png" alt="Plus"/></button>
           </div>


      </div>  

      </div> 
          

      
           
     </div>
    </div>
  );
}

export default App;
