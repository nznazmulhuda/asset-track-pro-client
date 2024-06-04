import Heading from "../Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function createData(productName, productType, productQuantity, dateAdded) {
    return {
        productName,
        productType,
        productQuantity,
        dateAdded,
    };
}

const rows = [
    createData("ABC Company", "Returnable", 12, "22/01/2024"),
    createData("DEF Company", "Non-Returnable", 24, "05/04/2024"),
    createData("GHI Company", "Returnable", 10, "12/01/2024"),
    createData("JKL Company", "Non-Returnable", 8, "04/07/2023"),
];

function AssetLIst() {
    const stripe = "odd";
    const handleEdit = () => {
        console.log("Editing");
    };

    const handleDelete = () => {
        console.log("Deleting");
    };
    return (
        <>
            <div>
                <Heading title={"Asset List"} subTitle={"Your asset list"} />

                <Sheet>
                    <Table aria-label="striped table" stripe={stripe}>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Product Quantity</th>
                                <th>Date Added</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.productName}>
                                    <td>{row.productName}</td>
                                    <td>{row.productType}</td>
                                    <td>{row.productQuantity}</td>
                                    <td>{row.dateAdded}</td>
                                    <td>
                                        <button onClick={handleEdit}>
                                            <FaEdit />
                                        </button>
                                    </td>

                                    <td>
                                        <button onClick={handleDelete}>
                                            <MdDelete />
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

export default AssetLIst;
