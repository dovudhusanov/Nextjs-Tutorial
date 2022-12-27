import React from 'react';
import Head from "next/head";

function ServerError() {
    return (
        <>
            <Head>
                <title>Error 505</title>
            </Head>
            <div className="position-absolute bg-white w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1>Error | 505</h1>
                </div>
            </div>
        </>
    );
}

export default ServerError;