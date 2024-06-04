import { Box } from "@mui/material";
import Heading from "../../../Components/Shared/Heading";
import PaymentCard from "../../../Components/Shared/PaymentCard";

function Payment() {
    return (
        <>
            <div>
                <Heading
                    title={"Package"}
                    subTitle={"all package about employee limit"}
                />

                {/* packaging section */}
                <div>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 2,
                        }}
                    >
                        <PaymentCard
                            title={"Basic"}
                            offer={"Maximum 5 employees"}
                            amount={"$5"}
                        />

                        <PaymentCard
                            title={"Standard"}
                            offer={"Maximum 10 employees"}
                            amount={"$8"}
                        />

                        <PaymentCard
                            title={"Premium"}
                            offer={"Maximum 20 employees"}
                            amount={"$15"}
                        />
                    </Box>
                </div>
            </div>
        </>
    );
}

export default Payment;
