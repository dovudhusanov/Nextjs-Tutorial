import React from 'react';
import Link from "next/link";

function Navbar(props) {
    return (
        <div className="w-100 position-absolute top-0 bg-black p-2 text-white">
            <div className="container">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <h1>Logo</h1>
                    <ul className='list-ul d-flex w-50 justify-content-between align-items-center'>
                        <Link href="/"><li>Home</li></Link>
                        <Link href="/test/post"><li>Posts</li></Link>
                        <Link href="/posts/blog"><li>Blog</li></Link>
                        <Link href="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;