import React, { FC, memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useKeyPress } from '../../hooks';
import { resetStore, toggleSettings } from '../../store/actions';
import Logo from '../shared/Logo';
import Background from './Background';
import Feedback from './Feedback';
import Homepage from './Homepage';
import System from './System';
import Widgets from './Widgets';
import './Settings.sass';

const Settings: FC = () => {
  const dispatch = useDispatch();
  const handleToggleSettings = useCallback(() => dispatch(toggleSettings()), [
    dispatch,
  ]);
  const handleReset = useCallback(() => dispatch(resetStore()), [dispatch]);

  useKeyPress(handleToggleSettings, ['Escape']);

  return (
    <div className="Settings">
      <a onClick={handleToggleSettings} className="fullscreen" />

      <div className="plane">
        <Logo />

        <Background />

        <Widgets />

        <System />

        {process.env.BUILD_TARGET === 'firefox' && <Homepage />}

        <Feedback />

        <p>
          <a onClick={handleReset}>Reset to default</a>
        </p>
      </div>
    </div>
  );
};

export default memo(Settings);
