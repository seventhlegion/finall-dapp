import Button from '@mui/material/Button';
import { ReactElement } from 'react';
import { DisconnectButtonProps } from './type';

function DisconncetButton({ deactivate }: DisconnectButtonProps): ReactElement {
    return (
        <Button
            sx={{ borderRadius: "0.5rem" }}
            color={"error"}
            variant='outlined'
            onClick={() => {
                deactivate();
            }}>
            Disconncet
        </Button>
    )
}

export default DisconncetButton;