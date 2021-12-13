import React from 'react'
import { v4 as uuid } from 'uuid';

interface Props {
    RenderArr: number[];
}

export const ListView: React.FC<Props> = ({RenderArr}) =>{
    const listItems = RenderArr.map((number) =>
    <li key={uuid()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

