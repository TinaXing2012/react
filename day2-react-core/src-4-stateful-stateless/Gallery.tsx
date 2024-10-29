import React from 'react'

type PropsType = {
    title: string;
    urls: string[];
}

export default function Gallery({title, urls}: PropsType) {

  return (
    <div>
        <h2>{title}</h2>
        <ul>
            {
                urls.map((url, index) => <img key={index} src={url} width={100} height={100}/>)
            }
        </ul>
    </div>
  )
}
