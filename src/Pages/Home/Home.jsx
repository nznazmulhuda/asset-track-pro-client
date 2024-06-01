import { useContext } from "react";
import { About, Banner, Payment, PendingRequests } from "../../Components/Home";
import { UserContext } from "../../Provider/UserProvider/UserProvider";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

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
                <PendingRequests />
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
            <div>{section}</div>
        </>
    );
}

export default Home;
