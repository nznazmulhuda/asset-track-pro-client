import Heading from "../Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

function createData(companyName, Request) {
    return { companyName, Request };
}

const rows = [
    createData("ABC Company", "Pending"),
    createData("DEF Company", "Pending"),
    createData("GHI Company", "Approved"),
    createData("Jkl Company", "Pending"),
    createData("MNO Company", "Approved"),
];
function PendingRequests() {
    const stripe = "odd";
    return (
        <>
            <div>
                <Heading
                    title={"Pending Request"}
                    subTitle={"My all pending request"}
                />

                <Sheet>
                    <Table aria-label="striped table" stripe={stripe}>
                        <thead>
                            <tr>
                                <th style={{ width: "70%" }}>Company Name</th>
                                <th>Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.companyName}>
                                    <td>{row.companyName}</td>
                                    <td>{row.Request}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>
            </div>
        </>
    );
}

export default PendingRequests;
