import PropType from "prop-types";

function Team({ memberName, memberPic, memberType }) {
    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-primary p-1 lg:p-2">
                    <img
                        className="rounded-full w-full h-full"
                        src={memberPic}
                        alt={memberName}
                    />
                </div>

                <h1 className="mt-1 md:mt-2 lg:mt-3 font-bold text-lg md:text-xl lg:text-2xl">
                    {memberName}
                </h1>

                <h3 className="mt-2 md:mt-3 bg-primary text-secondary font-bold p-1 md:p-2 rounded-md text-lg cursor-pointer">
                    {memberType}
                </h3>
            </div>
        </>
    );
}

Team.propTypes = {
    memberName: PropType.string,
    memberPic: PropType.string,
    memberType: PropType.string,
};

export default Team;
