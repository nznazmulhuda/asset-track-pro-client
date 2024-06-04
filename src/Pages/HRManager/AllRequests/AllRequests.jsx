import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import { Button } from "@mui/material";
import Heading from "../../../Components/Shared/Heading";

function createData(
    assetName,
    assetType,
    emailOfRequester,
    nameOfRequester,
    requestDate,
    additionalNote,
    status,
) {
    return {
        assetName,
        assetType,
        emailOfRequester,
        nameOfRequester,
        requestDate,
        additionalNote,
        status,
    };
}

const rows = [
    createData(
        "ABC Company",
        "Returnable",
        "nzanzmulhdua04@gamil.com",
        "Nazmul Huda",
        "20/04/2024",
        "Is this product available?",
        "Pending",
    ),
];

function AllRequests() {
    const stripe = "odd";
    const handleApprove = () => {
        console.log("Approved");
    };

    const handleReject = () => {
        console.log("Rejected");
    };

    return (
        <>
            <div>
                <Heading title={"All request"} subTitle={"all request"} />

                {/* Request data */}
                <div>
                    <Sheet>
                        <Table aria-label="striped table" stripe={stripe}>
                            <thead>
                                <tr>
                                    <th>Asset Name</th>
                                    <th>Asset Type</th>
                                    <th>Email of Requester</th>
                                    <th>Name of Requester</th>
                                    <th>Request Date</th>
                                    <th>Additional Note</th>
                                    <th>Status</th>
                                    <th>Approve</th>
                                    <th>Reject</th>
                                </tr>
                            </thead>

                            <tbody>
                                {rows.map((row) => (
                                    <tr key={row.assetName}>
                                        <td>{row.assetName}</td>
                                        <td>{row.assetType}</td>
                                        <td>{row.emailOfRequester}</td>
                                        <td>{row.nameOfRequester}</td>
                                        <td>{row.requestDate}</td>
                                        <td>{row.additionalNote}</td>
                                        <td>{row.status}</td>
                                        <td>
                                            <Button onClick={handleApprove}>
                                                Approve
                                            </Button>
                                        </td>

                                        <td>
                                            <Button onClick={handleReject}>
                                                Reject
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Sheet>
                </div>
            </div>
        </>
    );
}

export default AllRequests;
