"use client";

const ServiceDetails = () => {
    return (
        <div className="service-details flex flex-wrap">
            <div
                className="border-2 border-emerald-700 m-1 p-8 w-[calc(25%-8px)] max-xl:w-[calc(50%-8px)] max-md:w-full"
                id="individual-tax"
            >
                <h1 className="text-xl font-semibold text-center mb-6 capitalize">Individual Tax</h1>
                <p className="text-gray-700">
                    Individual taxes are becoming more and more complicated year after year. Whether you are
                    pulling your hair out trying to figure out how to file your own return or is someone who has
                    been filing themeselves and now wants a professional to file, we are here for you. Simple
                    returns are mostly done without interaction with the client. Returns that involve a Schedule
                    C or Schedule E and are more involved will almost always require an interview and possible
                    follow up to make sure the return is done right. Regardless of a Returns complexity, clients
                    may call for any questions and we will be happy to answer.


                    Pricing starts at $250 for Simple Returns. Email or Call for a consultation for a accurate
                    estimate.
                </p>
            </div>
            <div
                className="border-2 border-emerald-700 m-1 p-8 w-[calc(25%-8px)] max-xl:w-[calc(50%-8px)] max-md:w-full"
                id="business-tax"
            >
                <h1 className="text-xl font-semibold text-center mb-6 capitalize">Business Tax</h1>
                <p className="text-gray-700">
                    Have you recently started a business and haven't thought about the filing needs? Or are you
                    a business owner that is unhappy with their current Tax Professional? Regardless of the
                    situation we can handle your needs. Business Owners and Accountants have a very special
                    relationship and the best way for that relationship to thrive is through communication and
                    planning. Whether you are a Sole Proprietor, LLC, Corporation, or Partnership, you need a
                    professional that understands your business and works to save you taxes. Call for
                    consultation to determine pricing.


                    We provide services for calculating PPP Forgivenesses and ERC (Employee Retention Credit).
                </p>
            </div>
            <div
                className="border-2 border-emerald-700 m-1 p-8 w-[calc(25%-8px)] max-xl:w-[calc(50%-8px)] max-md:w-full"
                id="book-keeping"
            >
                <h1 className="text-xl font-semibold text-center mb-6 capitalize">Book Keeping</h1>
                <p className="text-gray-700">
                    Bookkeeping is an essential part of any business. Keeping a Clean and Accurate set of books
                    not only makes filing your tax return easier but it also protects you from an audit from the
                    IRS or State. We provide bookkeeping for our Business clients setting up a Quickbooks Online
                    account for the company. Every Month we enter the necessary Journal Entries for Payroll,
                    Sales, Out of pocket expenses, etc.. and you will recieve a Profit & Loss Statement that is
                    accurate to the month and it will be kept in a documents folder that is shared with you
                    along with any reports we used.


                    We enter data and provide you with Financial statements but we do not pay your bills or cut
                    checks.
                </p>
            </div>
            <div
                className="border-2 border-emerald-700 m-1 p-8 w-[calc(25%-8px)] max-xl:w-[calc(50%-8px)] max-md:w-full"
                id="tax-plan"
            >
                <h1 className="text-xl font-semibold text-center mb-6 capitalize">Tax plan</h1>
                <p className="text-gray-700">
                    Bookkeeping is an essential part of any business. Keeping a Clean and Accurate set of books
                    not only makes filing your tax return easier but it also protects you from an audit from the
                    IRS or State. We provide bookkeeping for our Business clients setting up a Quickbooks Online
                    account for the company. Every Month we enter the necessary Journal Entries for Payroll,
                    Sales, Out of pocket expenses, etc.. and you will recieve a Profit & Loss Statement that is
                    accurate to the month and it will be kept in a documents folder that is shared with you
                    along with any reports we used.


                    We enter data and provide you with Financial statements but we do not pay your bills or cut
                    checks.
                </p>
            </div>
        </div>
    );
};

export default ServiceDetails;