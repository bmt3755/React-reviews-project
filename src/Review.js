import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const{ name,job,image,text } = people[index];

  const checkIndex = (number) => {
    if(number < 0)
    return people.length - 1;
    else if(number > people.length - 1)
    return 0
    else return number
  }
  const preBtnHandler = () => {
  return setIndex((index) => {
    let newIndex = index - 1;
    return checkIndex(newIndex)
  })
  }

  const nextBtnHandler = () => {
    return setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex)
    })    
  }

  const randomBtnHandler = () => {
    return setIndex(() => {
      let newIndex = Math.floor(Math.random()* people.length);
      if(newIndex === index)
      newIndex = index + 1
      return checkIndex(newIndex);
    })
  }
  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'> {text} </p>
    <div className="button-container">
      <button className='prev-btn' onClick={preBtnHandler}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick={nextBtnHandler}>
        <FaChevronRight/>
      </button>      
    </div>
    <button className='random-btn' onClick={randomBtnHandler}>
        Surprise me!
      </button>
  </article>
};

export default Review;
