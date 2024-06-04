import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UserContext } from "../../Provider/UserProvider/UserProvider";

function PaymentCard({ title, offer, amount }) {
    const { role } = useContext(UserContext);
    const handlePayment = (amount) => {
        const price = +amount.split("$")[1];
        console.log(price);
    };

    return (
        <>
            <div>
                <Card size="lg" variant="outlined">
                    <Chip size="sm" variant="outlined" color="neutral">
                        {title}
                    </Chip>

                    <Typography level="h2">{title}</Typography>

                    <Divider inset="none" />

                    <List
                        size="sm"
                        sx={{ mx: "calc(-1 * var(--ListItem-paddingX))" }}
                    >
                        <ListItem>
                            <ListItemDecorator>
                                <Check />
                            </ListItemDecorator>
                            {offer}
                        </ListItem>
                    </List>

                    <Divider inset="none" />

                    <CardActions>
                        <Typography level="title-lg" sx={{ mr: "auto" }}>
                            {amount}{" "}
                            <Typography fontSize="sm" textColor="text.tertiary">
                                / month
                            </Typography>
                        </Typography>
                        <Button
                            variant="soft"
                            color="neutral"
                            endDecorator={<KeyboardArrowRight />}
                            onClick={() =>
                                role === "hrManager"
                                    ? handlePayment(amount)
                                    : null
                            }
                        >
                            Start now
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
}

PaymentCard.propTypes = {
    title: PropTypes.string,
    offer: PropTypes.string,
    amount: PropTypes.string,
};

export default PaymentCard;
