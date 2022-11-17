import { TextField } from '@mui/material';
import { ReactElement } from 'react';
import { Controller } from 'react-hook-form';
import { AddressProps } from './type';

function Address({ control, validation }: AddressProps): ReactElement {

    return (
        <Controller
            name="address"
            control={control}
            rules={validation}
            render={({ field: { onChange }, formState: { errors } }) => (
                <TextField
                    fullWidth
                    label={"Address"}
                    autoComplete="off"
                    color={errors.address?.type === 'required' ? "error" : "primary"}
                    onChange={onChange}
                />
            )}
        />
    )
}

export default Address