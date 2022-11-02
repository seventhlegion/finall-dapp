import { Autocomplete, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { tokens } from "../../contract/tokens";
import { TokenProps } from "./Token.type";

function Token({ chain, setToken, errors, control }: TokenProps) {

    let options: any;

    tokens.map((token: any) => { if (token.chainId === chain) options = token.networkTokens });

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
                            color={errors.token?.type === 'required' ? "error" : "primary"}
                        />
                    }
                />
            )}
        />
    )
}

export default Token