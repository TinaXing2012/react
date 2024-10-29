import React, { useRef, useState } from 'react'
import Counter from './Counter'
import Gallery from './Gallery'

export default function App() {



  return (
    <div>
      <Counter />
      <Gallery
        urls={[
          'https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg',
          'https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOrOwY43A2IXz1v0yLjmHVWj0d2_YMm_6eA&s'
        ]}
        title='Cats'/>

        <Gallery
        urls={[
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR02ArPIOrwQDvzDoXHcho4hRHt5KGT8G1rEw&s',
          'https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg',
          'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J'
        ]}
        title='Dogs'/>
    </div>
  )
}
