import React, { type FC } from 'react';
import style from './index.less';

const Foo: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

export default Foo;
