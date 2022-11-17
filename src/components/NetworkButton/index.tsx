import { Box } from "@mui/system";
import { ReactElement } from "react";
import { NetworkButtonProps } from "./type";

function NetworkButton({ network, setChain, activate, connector, setPattern }: NetworkButtonProps): ReactElement {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100%"}
            sx={{
                fontSize: "4rem",
                fontWeight: "bold",
                color: network.style,
                ":hover": {
                    bgcolor: network.style,
                    color: "#171717",
                    cursor: "pointer"
                },
                transition: "ease-in-out",
                transitionDuration: "200ms"
            }}
            onClick={() => {
                window.ethereum.request(network.network);
                setChain(network.chainId);
                setPattern(network.pattern);
                activate(connector);
            }}>
            {network.network.params.map((param: { nativeCurrency: { name: string } }) => param.nativeCurrency.name)}
        </Box>
    )
}

export default NetworkButton;