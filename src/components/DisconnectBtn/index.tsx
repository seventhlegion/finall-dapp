import Button from '@mui/material/Button';
import { ReactElement } from 'react';
import { DisconnectButtonProps } from './type';

function DisconncetButton({ deactivate }: DisconnectButtonProps): ReactElement {
    return (
        <Button
            className='text-slate-300 font-bold border-slate-300 hover:text-yellow-400 hover:border-yellow-400 rounded-lg'
            variant='outlined'
            onClick={() => {
                deactivate();
            }}>
            Disconncet
        </Button>
    )
}

export default DisconncetButton;