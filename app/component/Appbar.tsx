"use client";
import { signIn, signOut, useSession } from "next-auth/react"

export default function Appbar() {
    const session = useSession();
    return <div className="space-y-5 max-w-screen-md mx-auto flex flex-col text-center">
        <div className="space-x-5">
            <button className="border bg-slate-400 py-2 px-3 rounded-md text-white" onClick={() => signIn()}>Signin</button>
            <button onClick={() => signOut()}>SignOut</button>
        </div>
        <div>
            {JSON.stringify(session)}
        </div>
    </div>
}