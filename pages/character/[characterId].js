export async function getStaticProps({params}) {
    const characterId = params.characterId.replace(/\-/g)
    const results = await fetch(`https://jsonplaceholder.typicode.com/users?username=${characterId}`)
        .then(res => res.json())

    return{
        props: {
            character: results[0]
        }
    }
}

export async function getStaticPaths() {
    const characters = await fetch("https://jsonplaceholder.typicode.com/users?perPage=10")
        .then(res => res.json())
    return{
        paths: characters.map(character => {
            const characterId = character.name.toLowerCase().replace(/ /g, "-")
            return{
                params: {
                    characterId
                }
            }
        }),
        fallback: false
    }
}

function Character({character}) {
    return (
        <div className="container mt-5">
            <h1>{character?.name}</h1>
        </div>
    );
}

export default Character;