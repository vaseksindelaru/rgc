import { notStrictEqual } from "assert"

export const Note =({id,symbol,image}) => 
{ return (
    <strong>
    <p>{id}</p>
    <img src={image} alt='crypto'></img>
    <p>{symbol}</p>
    </strong>)}

