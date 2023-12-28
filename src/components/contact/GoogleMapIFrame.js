"use client";

const GoogleMapIFrame = () => {
    return (
        <iframe
            title="Office location map"
            className="w-full h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.579664191532!2d-73.93832362431442!3d40.749273771388054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f2ab31c9e4d%3A0x4cf2e349e58a8b97!2s30-10%2041st%20Ave%2C%20Long%20Island%20City%2C%20NY%2011101%2C%20USA!5e0!3m2!1sen!2sbd!4v1694617869985!5m2!1sen!2sbd"
            loading="lazy"
        />
    );
};

export default GoogleMapIFrame;