import React from 'react';
import { STYLE } from '../constants';

import { BooleanPredicate, InternalProps } from '../types';

export interface SeparatorProps
  extends InternalProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'hidden'> {
  /**
   * Disable the `Submenu`. If a function is used, a boolean must be returned
   */
  disabled?: BooleanPredicate;

  data?: any;
}

const Separator: React.FC<SeparatorProps> = ({ data, disabled, style }) => {
  console.log(data, disabled);
  return <div className={STYLE.separator} style={style} />;
};

export default Separator;
