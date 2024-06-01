import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

const QueryProvider = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

QueryProvider.propTypes = {
    children: PropTypes.node,
};

export default QueryProvider;
