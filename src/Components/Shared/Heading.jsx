import PropTypes from "prop-types";

function Heading({ title, subTitle }) {
    return (
        <>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-10">
                <span className="text-primary font-bold">____</span> {title}{" "}
                <span className="text-primary font-bold">____</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-center mt-3 text-primary underline mb-5">
                {subTitle}
            </p>
        </>
    );
}

Heading.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

export default Heading;
