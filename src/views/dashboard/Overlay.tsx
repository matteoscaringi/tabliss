import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { useFullscreen, useKeyPress } from '../../hooks';
import { toggleFocus, toggleSettings } from '../../store/actions';
import './Overlay.sass';

const Overlay: FC = () => {
  const dispatch = useDispatch();
  const handleToggleFocus = () => dispatch(toggleFocus());
  const handleToggleSettings = () => dispatch(toggleSettings());

  useKeyPress(handleToggleFocus, ['w']);
  useKeyPress(handleToggleSettings, ['s']);

  // Hooks inside a condition? Works because the condition always resolves the same
  const [, handleToggleFullscreen] = useFullscreen();
  if (handleToggleFullscreen) useKeyPress(handleToggleFullscreen, ['f']);

  return (
    <div className="Overlay" />
  );
};

export default Overlay;
