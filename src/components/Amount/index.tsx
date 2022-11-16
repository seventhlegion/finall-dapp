import { TextField } from "@mui/material"
import { ReactElement } from "react"
import { Controller } from "react-hook-form"
import { NumericFormat } from "react-number-format"
import { AmountProps } from "./type"

function Amount({ control, error }: AmountProps): ReactElement {
    return (
        <Controller
            name="amount"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
                <NumericFormat
                    className="w-full"
                    label={"Amount"}
                    decimalScale={18}
                    autoComplete="off"
                    customInput={TextField}
                    color={error ? "error" : "primary"}
                    onChange={onChange}
                />
            )}
        />
    )
}

export default Amount