import BannerSection from "@/components/home-sections/BannerSection";
import ServiceIconSection from "@/components/home-sections/ServiceIconSection";
import AboutSection from "@/components/home-sections/AboutSection";
import Head from "next/head";

export const metadata = {
    title: "Home",
    description: "Home page",
    keywords: "Home",
    openGraph: {
        metadataBase: new URL("http://localhost:3000"),
        title: "Home",
        description: 'Home page',
        siteName: "STS",
        images: [],
        type: "article",
        url: ""
    },
    manifest:"./manifest.json",

}

export const viewport = {
    themeColor: 'black',
}

const Home = () => {

    return (
        <>
            <BannerSection/>
            <ServiceIconSection/>
            <AboutSection/>
        </>
    )
}

export default Home;