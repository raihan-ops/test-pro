import ContactForm from "@/components/contact/ContactForm";
import PersonalInfo1 from "@/components/contact/PersonalInfo1";
import dynamic from "next/dynamic";
import Loading from "@/components/common/Loading";

const GoogleMapIFrame = dynamic(() => import("@/components/contact/GoogleMapIFrame"), {
    loading: () => <Loading/>,
    ssr: false
});

export const metadata = {
    title: "Contact",
    description: "Contact page",
    keywords: "Contact",
    openGraph: {
        metadataBase: new URL("http://localhost:3000"),
        title: "Contact",
        description: 'Contact page',
        siteName: "STS",
        images: [],
        type: "article",
        url: "/contact",
    },
}

const Contact = () => {
    return (
        <>
            <div className="h-20 bg-emerald-700 flex-center">
                <h1 className="sts-container text-3xl text-white font-semibold">
                    Contact Us
                </h1>
            </div>
            <div className="sts-container py-16">
                <PersonalInfo1/>
                <ContactForm/>
            </div>
            <GoogleMapIFrame/>
        </>
    );
};

export default Contact;