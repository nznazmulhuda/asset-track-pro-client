import Heading from "../Shared/Heading";
import Box from "@mui/joy/Box";
import PaymentCard from "../Shared/PaymentCard";

function Payment() {
    return (
        <>
            <div className="mb-10">
                <Heading
                    title={"Packages"}
                    subTitle={"Our best package for you"}
                />

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
        </>
    );
}

export default Payment;
