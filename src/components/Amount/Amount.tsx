import { TextField } from "@mui/material"
import { Controller } from "react-hook-form"
import { NumericFormat } from "react-number-format"

function Amount({ control, errors }: any) {
    return (
        <Controller
            name="amount"
            control={control}
            rules={{ required: true, pattern: /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/g }}
            render={({ field: { onChange } }) => (
                <NumericFormat
                    className="w-full"
                    label={"Amount"}
                    decimalScale={18}
                    customInput={TextField}
                    color={errors.amount?.type === 'required' ? 'error' : 'primary'}
                    onChange={onChange}
                />
            )}
        />
    )
}

export default Amount