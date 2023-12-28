import Link from "next/link";
import Image from "next/image";

import TaxDomeLogo from "public/taxdome.webp";
import {HOME_PATH} from "@/helpers/Slugs";

const Footer = () => {
    return (
        <footer
            className="w-full h-20 border-t"
        >
            <div
                className="sts-container h-full mx-auto flex justify-between items-center"
            >
                <p className="max-sm:text-sm max-sm:p-2 text-md text-center">
                    &copy; 2021 &nbsp;
                    <Link href={HOME_PATH} title="Home page link">
                        signaturetaxservices.taxdome.com
                    </Link>
                </p>
                <Link href="https://taxdome.com" title="Powered By Taxdome" target="_blank">
                    <Image
                        src={TaxDomeLogo}
                        alt="Powered By Taxdome"
                    />
                </Link>

            </div>
        </footer>
    );
};

export default Footer;