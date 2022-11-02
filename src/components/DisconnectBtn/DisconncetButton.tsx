import Button from '@mui/material/Button';
import { Fragment, ReactElement } from 'react';
import { DisconnectButtonProps } from './DisconnectButton.type';

function DisconncetButton({ deactivate }: DisconnectButtonProps): ReactElement {
    return (
        <Fragment>
            <Button
                className='text-slate-300 font-bold border-slate-300 hover:text-yellow-400 hover:border-yellow-400 rounded-lg'
                variant='outlined'
                onClick={() => {
                    deactivate();
                }}>
                Disconncet
            </Button>
        </Fragment>
    )
}

export default DisconncetButton