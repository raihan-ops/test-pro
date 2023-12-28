"use client";

import {useSession} from "next-auth/react";

const Profile = () => {

    const {data: session, status, update} = useSession();

    if (status === "loading") {
        return <div>Session Loading...</div>
    }

    return (
        <div>
            <h1>Profile: {session.user.name}</h1>

            <button
                onClick={async () => {
                    await update({
                        ...session,
                        user: {
                            ...session.user,
                            accessToken: "Updated token"
                        }
                    })
                }}
            >
                Update session
            </button>
        </div>
    );
};

export default Profile;