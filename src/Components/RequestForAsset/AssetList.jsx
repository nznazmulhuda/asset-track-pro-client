import Heading from "../Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-hot-toast";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};
function createData(assetName, assetType, availability, request, companyEmail) {
    return {
        assetName,
        assetType,
        availability,
        request,
        companyEmail,
    };
}

function AssetList({ assets }) {
    const stripe = "odd";
    const [open, setOpen] = useState(false);
    const [rowData, setRowData] = useState({});
    const handleOpen = (row) => {
        setOpen(true);
        setRowData(row);
    };
    const handleClose = () => setOpen(false);
    const { user } = useContext(AuthContext);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const data = assets?.map((asset) =>
            createData(
                asset.productName,
                asset.productType,
                asset.productQuantity,
                asset._id,
                asset.email,
            ),
        );
        setRows(data);
    }, [assets]);

    const handleRequest = (e) => {
        e.preventDefault();
        const note = e.target.note.value;
        const time = new Date();
        const date = time.toLocaleDateString();
        const email = user.email;
        const name = user.displayName;
        const status = "pending";
        const data = { note, date, email, name, rowData, status };

        // backend
        axios
            .post(`/request`, data)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Request sent successfully");
                }
            })
            .catch((err) => toast.error(err.message));
        e.target.reset();
        handleClose();
    };

    return (
        <>
            <div>
                <Heading title={"Asset List"} subTitle={"All asset"} />

                <Sheet>
                    <Table aria-label="striped table" stripe={stripe}>
                        <thead>
                            <tr>
                                <th>Asset Name</th>
                                <th>Asset Type</th>
                                <th>Availability</th>
                                <th>Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows?.map((row) => (
                                <tr key={row.request}>
                                    <td>{row.assetName}</td>
                                    <td>{row.assetType}</td>
                                    <td>{row.availability}</td>
                                    <td>
                                        <button
                                            onClick={() => handleOpen(row)}
                                            disabled={
                                                row.availability === 0 && true
                                            }
                                            className={`${
                                                row.availability === 0 &&
                                                "cursor-not-allowed"
                                            }`}
                                        >
                                            Request
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form
                            onSubmit={handleRequest}
                            className="flex flex-col items-center gap-3"
                        >
                            <h1>Additional notes</h1>
                            <textarea
                                required
                                className="border w-full resize-none px-4 py-2 rounded-md"
                                name="note"
                            ></textarea>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                            >
                                Submit
                            </Button>
                        </form>
                    </Box>
                </Modal>
            </div>
        </>
    );
}

AssetList.propTypes = {
    assets: PropTypes.array,
};

export default AssetList;
