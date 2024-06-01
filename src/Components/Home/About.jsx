import Heading from "../Shared/Heading";

function About() {
    return (
        <>
            <div className="container mx-auto">
                <Heading title={"About"} subTitle={"About this Website"} />

                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                    Weclome to Asset Track Pro: Efficient Asset Tracking for
                    Modern Businesses
                </h1>

                <p className="text-sm md:text-lg">
                    <span className="font-bold">AssetTrackPro</span> is an
                    innovative web application designed to simplify and
                    streamline the management of your companys assets. Whether
                    you're handling returnable assets like laptops, keyboards,
                    and cell phones, or non-returnable items like pens, paper,
                    and diaries, AssetWise offers a comprehensive solution to
                    keep everything organized and under control.
                </p>

                <h1 className="mt-3 font-bold text-xl">Key Features:</h1>

                <ol className="mt-3">
                    <li className="font-semibold text-lg">
                        1. User Authentication and Authorization
                    </li>
                    <ul>
                        <li className="font-medium ml-5">
                            * Secure login and registration for HR managers and
                            administrators.
                        </li>

                        <li className="font-medium ml-5">
                            * Role-based access control to ensure data privacy
                            and security.
                        </li>
                    </ul>
                </ol>

                <ol className="mt-3">
                    <li className="font-semibold text-lg">
                        2. Asset Management:
                    </li>
                    <ul>
                        <li className="font-medium ml-5">
                            * Categorize assets into returnable and
                            non-returnable.
                        </li>

                        <li className="font-medium ml-5">
                            * Perform CRUD (Create, Read, Update, Delete)
                            operations on assets.
                        </li>
                    </ul>
                </ol>

                <ol className="mt-3">
                    <li className="font-semibold text-lg">
                        3. Employee Management:
                    </li>
                    <ul>
                        <li className="font-medium ml-5">
                            * Maintain detailed records of employees.
                        </li>

                        <li className="font-medium ml-5">
                            * Link employees with their assigned assets.
                        </li>
                    </ul>
                </ol>

                <ol className="mt-3">
                    <li className="font-semibold text-lg">
                        4. Subscription Management:
                    </li>
                    <ul>
                        <li className="font-medium ml-5">
                            * Flexible subscription plans to suit different
                            business needs.
                        </li>

                        <li className="font-medium ml-5">
                            * Secure payment processing integration for easy
                            subscription management.
                        </li>
                    </ul>
                </ol>

                <h1 className="mt-3 font-bold text-xl">
                    Why Choose AssetTrackPro
                </h1>

                <ol className="mt-3">
                    <li className="font-semibold text-lg">
                        *{" "}
                        <span className="font-bold">
                            User-Friendly Interface:
                        </span>{" "}
                        Intuitive design and easy navigation ensure a smooth
                        user experience for HR managers and administrators.
                    </li>

                    <li className="font-semibold text-lg">
                        *{" "}
                        <span className="font-bold">
                            Comprehensive Tracking:
                        </span>{" "}
                        Detailed tracking and reporting features provide
                        valuable insights into asset utilization and management.
                    </li>

                    <li className="font-semibold text-lg">
                        * <span className="font-bold">Scalability:</span>{" "}
                        Suitable for businesses of all sizes, from small
                        startups to large enterprises.
                    </li>

                    <li className="font-semibold text-lg">
                        * <span className="font-bold">Security:</span> Robust
                        security measures to protect sensitive data and ensure
                        compliance with industry standards.
                    </li>
                </ol>

                <p className="font-semibold mt-5">
                    With AssetTrackPro, managing company assets has never been
                    easier. Say goodbye to inefficiencies and hello to a
                    streamlined, organized, and productive workflow. Join us and
                    experience the future of asset management today!
                </p>
            </div>
        </>
    );
}

export default About;
