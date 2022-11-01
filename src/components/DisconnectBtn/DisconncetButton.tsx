import Button from '@mui/material/Button';
import { Fragment, ReactElement } from 'react';

function DisconncetButton({ deactivate }: any): ReactElement {
    return (
        <Fragment>
            <Button className='text-slate-300 font-bold border-slate-300 hover:text-yellow-400 hover:border-yellow-400' variant='outlined' onClick={() => {
                deactivate();
            }}>
                Disconncet
            </Button>
        </Fragment>
    )
}

export default DisconncetButton