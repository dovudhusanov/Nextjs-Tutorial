import React from 'react';
import Image from "next/image";
import apple from "../public/images/apple.jpeg"

function Blog() {
    return (
        <div className="container">
            <h1 className="topp">This is Blog page!</h1>

            <Image src={apple} alt="vercel" layout="intrinsic" className='my-3'/>
        </div>
    );
}

export default Blog;