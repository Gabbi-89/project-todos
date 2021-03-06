import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { tasks } from 'reducers/tasks';

import { Emoji } from 'styles/textstyles';
import { Button } from 'styles/button';

export const RemoveAll = () => {
  const items = useSelector(store => store.tasks.items);
  const enabled = items.length > 0;

  const dispatch = useDispatch();

  const handleRemoveButton = () => {
    dispatch(tasks.actions.removeAll())
  }

  return (
    <Button onClick={handleRemoveButton} disabled={!enabled}>
      <Emoji role="img" aria-label="Bin">🗑</Emoji>
      Remove all tasks!
    </Button>
  );
};
