import React from 'react';

export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json()

    return {
        props: {
            todos: data
        }
    }
}

function ServerSideRendering({todos}) {
    console.log(todos)
    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Data</h1>

            </div>
        </>
    );
}

export default ServerSideRendering;