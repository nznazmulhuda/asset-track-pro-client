import Team from "../../../Components/MyTeam/Team";
import Heading from "../../../Components/Shared/Heading";

function MyTeam() {
    return (
        <>
            <div className="container mx-auto">
                <Heading
                    title={"Your Team"}
                    subTitle={"You can show your team details here"}
                />

                {/* Team section */}
                <div className="flex items-center justify-center gap-3 md:gap-6 lg:gap-12 flex-wrap mt-7 md:mt-10">
                    <Team
                        memberName={"Nazmul Huda"}
                        memberPic={"https://i.ibb.co/3sgKbfG/nahidPic.jpg"}
                        memberType={"Employee"}
                    />
                    <Team
                        memberName={"Nazmul Huda"}
                        memberPic={"https://i.ibb.co/3sgKbfG/nahidPic.jpg"}
                        memberType={"Employee"}
                    />
                    <Team
                        memberName={"Nazmul Huda"}
                        memberPic={"https://i.ibb.co/3sgKbfG/nahidPic.jpg"}
                        memberType={"Employee"}
                    />
                    <Team
                        memberName={"Nazmul Huda"}
                        memberPic={"https://i.ibb.co/3sgKbfG/nahidPic.jpg"}
                        memberType={"Employee"}
                    />
                </div>
            </div>
        </>
    );
}

export default MyTeam;
