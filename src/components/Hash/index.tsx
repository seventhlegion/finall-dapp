import { ReactElement } from 'react';
import { HashProps } from './type';

function Hash({ transfer }: HashProps): ReactElement {

    if (!!transfer?.hash) {
        return (
            <div className='grow'>
                <h1 className='text-slate-300 text-lg transition-all duration-200 ease-in'>
                    Transaction Completed 😃
                </h1>
            </div>
        )
    } else {
        return (
            <div className='grow'></div>
        )
    }
}

export default Hash;