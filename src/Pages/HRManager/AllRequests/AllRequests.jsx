import Sheet from "@mui/joy/Sheet";
import Table from "@mui/joy/Table";
import { Button } from "@mui/material";
import Heading from "../../../Components/Shared/Heading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
function createData(
    assetName,
    assetType,
    emailOfRequester,
    nameOfRequester,
    requestDate,
    additionalNote,
    status,
    _id,
) {
    return {
        assetName,
        assetType,
        emailOfRequester,
        nameOfRequester,
        requestDate,
        additionalNote,
        status,
        _id,
    };
}

// const rows = [
//     createData(
//         "ABC Company",
//         "Returnable",
//         "nzanzmulhdua04@gamil.com",
//         "Nazmul Huda",
//         "20/04/2024",
//         "Is this product available?",
//         "Pending",
//     ),
// ];

function AllRequests() {
    const [row, setRow] = useState([]);
    const { user: userData } = useContext(AuthContext);
    const stripe = "odd";
    const { user } = useContext(AuthContext);
    const { data, refetch } = useQuery({
        queryKey: ["assets"],
        queryFn: async () => {
            return await axios.get(`/request?email=${user.email}`);
        },
    });

    useEffect(() => {
        const requestAsset = data?.data;

        setRow(
            requestAsset?.map((item) =>
                createData(
                    item.rowData.assetName,
                    item.rowData.assetType,
                    item.email,
                    item.name,
                    item.date,
                    item.note,
                    item.status,
                    item._id,
                ),
            ),
        );
    }, [data]);

    const handleApprove = (id) => {
        const s = { status: "accepted" };
        axios
            .put(`/request?email=${userData.email}&id=${id}&edit=${true}`, s)
            .then((res) => {
                if (res.data.modifiedCount) {
                    toast.success("Approved");
                    refetch();
                }
            })
            .catch((err) => toast.error(err.message));
    };

    const handleReject = (id) => {
        const s = { status: "rejected" };
        axios
            .put(`/request?email=${userData.email}&id=${id}&edit=${true}`, s)
            .then((res) => {
                if (res.data.modifiedCount) {
                    toast.success("Rejected");
                    refetch();
                }
            })
            .catch((err) => toast.error(err.message));
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
                                {row?.map((row) => (
                                    <tr key={row._id}>
                                        <td>{row.assetName}</td>
                                        <td>{row.assetType}</td>
                                        <td>{row.emailOfRequester}</td>
                                        <td>{row.nameOfRequester}</td>
                                        <td>{row.requestDate}</td>
                                        <td>{row.additionalNote}</td>
                                        <td>{row.status}</td>
                                        <td>
                                            <Button
                                                onClick={() =>
                                                    row.status === "pending" &&
                                                    handleApprove(row._id)
                                                }
                                            >
                                                {row.status === "rejected" &&
                                                    "Rejected"}
                                                {row.status === "accepted" &&
                                                    "Accepted"}
                                                {row.status === "pending" &&
                                                    "Approve"}
                                            </Button>
                                        </td>

                                        <td>
                                            <Button
                                                onClick={() =>
                                                    row.status === "pending" &&
                                                    handleReject(row._id)
                                                }
                                            >
                                                {row.status === "rejected" &&
                                                    "Rejected"}
                                                {row.status === "accepted" &&
                                                    "Accepted"}
                                                {row.status === "pending" &&
                                                    "Reject"}
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
