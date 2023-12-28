import {getServerSession} from "next-auth";
import {authConfig} from "@/helpers/Auth";

const checkSession = async () => {

    const session = await getServerSession(authConfig);

    // session.user.accessToken = "Re-freshed"

    console.log("===session===", session)

}

const Articles = async () => {

    await checkSession();

    return (
        <div>
            Articles
        </div>
    );
};

export default Articles;