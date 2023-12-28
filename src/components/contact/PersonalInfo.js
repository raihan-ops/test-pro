import Image from "next/image";
import JayImage from "public/jay.webp";

const PersonalInfo = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div
                className="w-full max-w-[24rem] h-60 relative"
            >
                <Image
                    src={JayImage}
                    alt="Yakov 'Jay' Shaulov EA's image"
                    fill
                    style={{objectFit: "cover"}}
                    sizes="100%"
                />
            </div>
            <div className="mb-4 mt-8 text-center">
                <h1 className="text-xl font-semibold mb-4">
                    Yakov "Jay" Shaulov EA
                </h1>
                <p className="mb-4 text-lg text-gray-700">Phone: 646-724-3283</p>
                <p className="mb-4 text-lg text-gray-700">Email: js@signaturetaxservices.com</p>
                <p className="text-lg text-gray-700">30-10 41st Ave</p>
                <p className="text-lg text-gray-700">Long Island City, NY 11101</p>
            </div>
        </div>
    );
};

export default PersonalInfo;