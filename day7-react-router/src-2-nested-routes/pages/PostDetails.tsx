import React from 'react'
import { useParams } from 'react-router-dom'
import postData from "./db";

export default function PostDetails() {

    let { slug } = useParams();

    // @ts-ignore
    const post = postData[slug];

    if (!post) {
        throw new Error('Could not find post with slug ' + slug);
    }

    const { title, description } = post;


    return (
        <div>
            <h3>Post Details</h3>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
        </div>
    )
}
