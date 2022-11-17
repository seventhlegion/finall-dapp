import { Box } from "@mui/material";
import { ReactElement } from "react";
import { ActiveProps } from "./type";

function Active({ active }: ActiveProps): ReactElement {
    return (
        <>
            {active
                ? (<Box width={15} height={15} bgcolor={"#22c55e"} borderRadius={"100%"} />)
                : !active
                    ? (<Box width={15} height={15} bgcolor={"#ef4444"} borderRadius={"100%"} />)
                    : (<Box width={15} height={15} bgcolor={"#737373"} borderRadius={"100%"} />)}
        </>
    )
}

export default Active;