import { Fragment, ReactElement } from 'react';
import { HashProps } from './Hash.type';

function Hash({ transfer }: HashProps): ReactElement {

    if (transfer?.hash !== undefined) {
        return (
            <Fragment>
                <div className='grow'>
                    <h1 className='text-slate-300 text-lg transition-all duration-200 ease-in'>
                        Transaction Completed 😃
                    </h1>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <div className='grow'></div>
            </Fragment>
        )
    }
}

export default Hash;