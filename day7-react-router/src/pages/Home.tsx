import React, { useEffect } from 'react'
import Title from './Title'

export default function Home() {

  // useEffect(() => {
  //   document.title = 'Home';
  // }, []);ç

  return (
    <>
      <Title title='Home' />
      <div>Home</div>
    </>

  )
}
