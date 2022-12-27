import React, {useEffect} from 'react';
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";

function PageNotFound() {

    const router = useRouter()

    // useEffect(() => {
    //     setTimeout(() => {
    //         router.push("/")
    //     }, 3700)
    // }, [router])

    return (
        <>
            <Head>
                <title>404 Page Not Found</title>
            </Head>
            <div className="position-absolute bg-white w-100 h-100 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <h1>404 | Page Not Found</h1>
                    <Link href='/' className="btn btn-primary mt-3">back to Home</Link>
                </div>
            </div>
        </>
    );
}

export default PageNotFound;