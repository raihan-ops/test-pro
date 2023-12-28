import Link from "next/link";
import {HOME_PATH} from "@/helpers/Slugs";

const NotFound = () => {
    return (
        <div className="w-full h-screen flex-center flex-col">

            <h1 className="text-2xl mb-4">Page not found.</h1>
            <p className="mb-4">Could not find requested resource</p>
            <Link
                className="default-btn bg-emerald-700 text-white px-4 hover:bg-emerald-600"
                href={HOME_PATH}
            >
                Go to home
            </Link>

        </div>
    );
};

export default NotFound;