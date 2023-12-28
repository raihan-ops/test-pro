import Link from "next/link";
import Image from "next/image";
import {HOME_PATH} from "@/helpers/Slugs";

import LogoFull from "public/logo-full.webp";
import NavMenu from "@/components/layouts/NavMenu";
import MobileMenu from "@/components/layouts/MobileMenu";

const Header = () => {

    return (
        <header
            className="shadow fixed w-full z-999 bg-white top-0"
        >
            <div
                className="h-28 sts-container flex"
            >
                <Link
                    href={HOME_PATH}
                    title="Home page link"
                >
                    <div
                        className="max-md:w-60 w-80 h-full flex-center"
                    >
                        <Image
                            src={LogoFull}
                            alt="STS full logo"
                        />
                    </div>
                </Link>
                <div
                    className="flex flex-1 justify-end items-center"
                >
                    <NavMenu/>
                    <MobileMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;