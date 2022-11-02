import { Fragment, ReactElement } from "react";
import { ActiveProps } from "./Active.type";

function Active({ active }: ActiveProps): ReactElement {
    return (
        <Fragment>
            {active
                ? (<div className='w-4 h-4 bg-green-500 rounded-full' />)
                : !active
                    ? (<div className='w-4 h-4 bg-red-500 rounded-full' />)
                    : (<div className='w-4 h-4 bg-zinc-500 rounded-full' />)}
        </Fragment>
    )
}

export default Active;