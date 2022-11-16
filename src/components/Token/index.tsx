import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TokenProps } from "./type";

function Token({ chain, setToken, control, error }: TokenProps) {

    let options: any;

    networkContracts.map((tokenContract: any) => {
        if (tokenContract.networkChainId === chain) options = tokenContract.networkTokenContracts
    });

    return (
        <Controller
            name="token"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
                <Autocomplete
                    className="w-full"
                    disablePortal
                    options={options}
                    onChange={(event, value) => { onChange(value); setToken(value) }}
                    renderInput={(params) =>
                        <TextField
                            {...params}
                            label={"Tokens"}
                            color={error ? "error" : "primary"}
                        />
                    }
                />
            )}
        />
    )
}

export default Token