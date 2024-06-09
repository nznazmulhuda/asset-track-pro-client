import Heading from "../Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

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

function AssetList({ assets }) {
    const stripe = "odd";

    const [rows, setRows] = useState([]);

    useEffect(() => {
        const assetData = assets;
        setRows(
            assetData?.map((item) =>
                createData(
                    item?.rowData.assetName,
                    item?.rowData.assetType,
                    item?.date,
                    item?.approvedTime,
                    item?.status,
                    item?._id,
                ),
            ),
        );
    }, [assets]);

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
                            {rows?.map((row) => (
                                <tr key={row.action}>
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
                                            {row.requestStatus === "pending" &&
                                                "Cancle"}
                                            {row.requestStatus === "accepted" &&
                                                row.assetType !==
                                                    "returnable" &&
                                                "Print"}
                                            {row.requestStatus === "accepted" &&
                                                row.assetType ===
                                                    "returnable" &&
                                                "Return"}
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

AssetList.propTypes = {
    assets: PropTypes.array,
};

export default AssetList;
