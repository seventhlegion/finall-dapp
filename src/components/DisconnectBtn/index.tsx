import Button from '@mui/material/Button';
import { ReactElement } from 'react';
import { DisconnectButtonProps } from './type';

function DisconncetButton({ deactivate }: DisconnectButtonProps): ReactElement {
    return (
        <Button
            color={"primary"}
            variant='outlined'
            onClick={() => {
                deactivate();
            }}>
            Disconncet
        </Button>
    )
}

export default DisconncetButton;