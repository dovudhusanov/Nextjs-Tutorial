export async function getStaticProps({params}) {
    const results = await fetch(`https://jsonplaceholder.typicode.com/users?username=${params.characterId}`)
        .then(res => res.json())

    return {
        props: {
            character: results[0]
        }
    }
}

export async function getStaticPaths() {
    const characters = await fetch("https://jsonplaceholder.typicode.com/users?perPage=10")
        .then(res => res.json())
    return {
        paths: characters.map(character => {
            const characterId = character.username
            return {
                params: {
                    characterId
                }
            }
        }),
        fallback: false
    }
}

function Character({character}) {
    console.log(character.username)
    return (
        <>
            <div className="container" style={{marginTop: 100}}>
                <h1>name: {character.name}</h1>
                <h2>username: {character?.username}</h2>
                <h2>username: {character?.email}</h2>
            </div>
        </>
    );
}

export default Character;