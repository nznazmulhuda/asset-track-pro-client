import Heading from "../Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

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
function createData(assetName, assetType, availability, request) {
    return {
        assetName,
        assetType,
        availability,
        request,
    };
}

function AssetList() {
    const stripe = "odd";
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user } = useContext(AuthContext);

    const rows = [
        createData("ABC Company", "Returnable", "Available", "Request"),
        createData("EFG Company", "Non-Returnable", "Out of Stock", "Request"),
        createData("HIJ Company", "Returnable", "Available", "Request"),
    ];

    const handleRequest = (e) => {
        e.preventDefault();
        const note = e.target.note.value;
        const time = new Date();
        const date = time.toLocaleDateString();
        const email = user.email;
        const data = { note, date, email };
        console.log(data);

        // backend
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
                            {rows.map((row) => (
                                <tr key={row.assetName}>
                                    <td>{row.assetName}</td>
                                    <td>{row.assetType}</td>
                                    <td>{row.availability}</td>
                                    <td>
                                        <button
                                            onClick={handleOpen}
                                            disabled={
                                                row.availability ===
                                                    "Out of Stock" && true
                                            }
                                            className={`${
                                                row.availability ===
                                                    "Out of Stock" &&
                                                "cursor-not-allowed"
                                            }`}
                                        >
                                            {row.request}
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

export default AssetList;
