import { useContext } from "react";
import { UserContext } from "../../Provider/UserProvider/UserProvider";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import {
    About,
    Banner,
    Calender,
    Message,
    MonthlyRequest,
    Payment,
    PendingRequests,
} from "../../Components/Home";

function Home() {
    let section;
    const { isLoading } = useContext(AuthContext);
    const { role } = useContext(UserContext);

    if (isLoading) {
        return (section = (
            <>
                <h1>Loading...</h1>
            </>
        ));
    }

    if (role === "employee") {
        section = (
            <>
                <Message />
                <PendingRequests />
                <MonthlyRequest />
                <Calender />
            </>
        );
    } else if (role === "hrManager") {
        section = (
            <>
                <Banner />
                <About />
                <Payment />
            </>
        );
    } else {
        section = (
            <>
                <Banner />
                <About />
                <Payment />
            </>
        );
    }

    return (
        <>
            <div className="container mx-auto">{section}</div>
        </>
    );
}

export default Home;
