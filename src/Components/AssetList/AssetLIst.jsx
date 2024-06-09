import Heading from "../Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function createData(productName, productType, productQuantity, dateAdded, _id) {
    return {
        productName,
        productType,
        productQuantity,
        dateAdded,
        _id,
    };
}

function AssetLIst({ assets }) {
    const stripe = "odd";
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const result = assets?.map((asset) =>
            createData(
                asset.productName,
                asset.productType,
                asset.productQuantity,
                asset.relaseDate,
                asset._id,
            ),
        );
        setRows(result);
    }, [assets]);

    const handleEdit = (id) => {
        console.log("Editing" + " " + id);
    };

    const handleDelete = (id) => {
        console.log("Deleting" + " " + id);
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
                            {rows?.map((row, id) => (
                                <tr key={id}>
                                    <td>{row.productName}</td>
                                    <td>{row.productType}</td>
                                    <td>{row.productQuantity}</td>
                                    <td>{row.dateAdded}</td>
                                    <td>
                                        <button
                                            onClick={() => handleEdit(row._id)}
                                        >
                                            <FaEdit />
                                        </button>
                                    </td>

                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(row._id)
                                            }
                                        >
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

AssetLIst.propTypes = {
    assets: PropTypes.array,
};

export default AssetLIst;
