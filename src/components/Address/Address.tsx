import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

function Address({ control, errors }: any) {
    return (
        <Controller
            name="address"
            control={control}
            rules={{ required: true, pattern: /^0x[a-fA-F0-9]{40}$/g }}
            render={({ field: { onChange } }) => (
                <TextField
                    className="w-full"
                    label={"Address"}
                    color={errors.address?.type === 'required' ? 'error' : 'primary'}
                    onChange={onChange}
                />
            )}
        />
    )
}

export default Address