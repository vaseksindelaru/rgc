import { notStrictEqual } from "assert"

export const Note =({id,symbol,image}) => 
{ return (
    <strong>
    <p>{id}</p>
    <p>{image}</p>
    <p>{symbol}</p>
    </strong>)}

