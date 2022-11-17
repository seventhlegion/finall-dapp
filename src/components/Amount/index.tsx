import { TextField } from "@mui/material"
import { ReactElement } from "react"
import { Controller } from "react-hook-form"
import { NumericFormat } from "react-number-format"
import { AmountProps } from "./type"

function Amount({ control, validation }: AmountProps): ReactElement {
    return (
        <Controller
            name="amount"
            control={control}
            rules={validation}
            render={({ field: { onChange }, formState: { errors } }) => (
                <NumericFormat
                    fullWidth
                    label={"Amount"}
                    decimalScale={18}
                    autoComplete="off"
                    customInput={TextField}
                    color={errors.amount?.type === 'required' ? "error" : "primary"}
                    onChange={onChange}
                />
            )}
        />
    )
}

export default Amount