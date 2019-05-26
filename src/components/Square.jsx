import React from 'react';
import classNames from 'classnames';

const Square = ({ isBlack, children }) => <div className={classNames('square', { black: isBlack })}>{children}</div>;

export default Square;
