import { TextField } from '@mui/material'
import { ReactElement } from 'react'
import { Controller } from 'react-hook-form'
import { AddressProps } from './type'

function Address({ control, error }: AddressProps): ReactElement {
    return (
        <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
                <TextField
                    className="w-full"
                    label={"Address"}
                    autoComplete="off"
                    color={error ? "error" : "primary"}
                    onChange={onChange}
                />
            )}
        />
    )
}

export default Address