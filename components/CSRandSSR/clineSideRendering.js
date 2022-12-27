import React, {useEffect, useState} from 'react';
import axios from "axios";

function Apiw() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        setLoading(true)
        await axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(data => {
                setData(data.data.slice(0, 10))
                console.log(data.data)
            })
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container mt-5">
            <h1 className="text-center">Data</h1>
            {loading ? <h1 className="text-center mt-5">Loading...</h1>
                : (
                    data.map((data) => (
                        <>
                            <div className="mt-3" key={data.id}>
                                <span>{data.id}. </span>
                                <p className='d-inline'>{data.title}</p>
                            </div>
                        </>
                    ))
                )
            }
        </div>
    );
}

export default Apiw;