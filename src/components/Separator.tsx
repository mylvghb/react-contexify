import React from 'react';
import { STYLE } from '../constants';

import { BooleanPredicate, HandlerParamsEvent, InternalProps } from '../types';
import { getPredicateValue } from './utils';

export interface SeparatorProps
  extends InternalProps,
    Omit<React.HTMLAttributes<HTMLElement>, 'hidden'> {
  /**
   * Passed to the `Separator` disabled predicate. Accessible via `data`
   */
  data?: any;

  /**
   * Hide the `Separator`. If a function is used, a boolean must be returned
   */
  hidden?: BooleanPredicate;
}

const Separator: React.FC<SeparatorProps> = ({
  triggerEvent,
  data,
  propsFromTrigger,
  style,
  hidden = false,
}) => {
  const handlerParams = {
    data,
    triggerEvent: triggerEvent as HandlerParamsEvent,
    props: propsFromTrigger,
  };
  const isHidden = getPredicateValue(hidden, handlerParams);
  return isHidden ? null : <div className={STYLE.separator} style={style} />;
};

export default Separator;
