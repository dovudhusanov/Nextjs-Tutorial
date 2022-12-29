import "../styles/Test.module.css"
import {getSession, signIn, signOut} from "next-auth/client";
import Navbar from "../components/Navbar";

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    return {
        props: {
            session,
        }
    }
}

export default function Home({session}) {
    return (
        <div className="height">
            {session ? (
                <>
                    <Navbar/>
                    <div className="container mt-5">
                        <button onClick={() => signOut()}>Log In</button>
                    </div>
                </>
            ) : (
                <div className="container mt-5">
                    <button onClick={() => signIn()}>Sign In</button>
                </div>
            )}
            {session && (
                <div className="container mt-5">
                    <h1>Kirilan: <span>{session.user.email}</span></h1>
                    <h3>Ism: <span>{session.user.name}</span></h3>
                    <img src={session.user.image} alt={session.user.name}/>
                </div>
            )}
        </div>
    )
}