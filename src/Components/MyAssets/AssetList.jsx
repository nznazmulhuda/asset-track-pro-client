import Heading from "../Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

function createData(
    assetName,
    assetType,
    requestDate,
    approvalDate,
    requestStatus,
    action,
) {
    return {
        assetName,
        assetType,
        requestDate,
        approvalDate,
        requestStatus,
        action,
    };
}

const rows = [
    createData(
        "ABC Company",
        "Returnable",
        "22/01/2024",
        "",
        "Pending",
        "Cancle",
    ),
    createData(
        "EFG Company",
        "Non-Returnable",
        "22/01/2024",
        "25/01/2024",
        "Approved",
        "Print",
    ),
    createData(
        "HIJ Company",
        "Returnable",
        "22/01/2024",
        "25/01/2024",
        "Approved",
        "Return",
    ),
];

const handleCancle = () => {
    console.log("Cancle");
};

const handlePrint = () => {
    // <PrintPage />;
    console.log("Print");
};

const handleReturn = () => {
    console.log("Return");
};

function AssetList() {
    const stripe = "odd";
    return (
        <>
            <div>
                <Heading title={"Asset List"} subTitle={"Your asset list"} />

                <Sheet>
                    <Table aria-label="striped table" stripe={stripe}>
                        <thead>
                            <tr>
                                <th>Asset Name</th>
                                <th>Asset Type</th>
                                <th>Request Date</th>
                                <th>Approval Date</th>
                                <th>Request Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.assetName}>
                                    <td>{row.assetName}</td>
                                    <td>{row.assetType}</td>
                                    <td>{row.requestDate}</td>
                                    <td>{row.approvalDate}</td>
                                    <td>{row.requestStatus}</td>
                                    <td>
                                        <button
                                            onClick={
                                                row.action === "Cancle"
                                                    ? handleCancle
                                                    : row.action === "Print"
                                                    ? handlePrint
                                                    : handleReturn
                                            }
                                        >
                                            {row.action}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>
            </div>
        </>
    );
}

export default AssetList;
