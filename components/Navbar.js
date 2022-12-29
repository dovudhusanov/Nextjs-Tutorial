import React, {useEffect, useState} from 'react';
import Link from "next/link";
import axios from "axios";

function Navbar() {

    const [users, setUsers] = useState([])

    async function fetchData() {
        await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(data => setUsers(data.data.slice(0, 4)))
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="w-100 top-0 bg-black p-2 text-white">
            <div className="container">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <h1><Link href="/">Logo</Link></h1>
                    <ul className='list-ul d-flex w-50 justify-content-between align-items-center'>
                        {users?.map((user, index) => (
                            <Link href={`/character/${user?.username}`} key={index}>
                                <li>{user.username}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;