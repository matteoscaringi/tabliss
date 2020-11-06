import React, { FC, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { useSelector } from './store';
import { Dashboard } from './views/dashboard';
import { Settings } from './views/settings';
import StoreError from './views/shared/StoreError';

const messages = defineMessages({
  pageTitle: {
    id: 'app.pageTitle',
    description: 'Page title that Tabliss displays in the title bar.',
    defaultMessage: 'New Tab',
  },
});

const Root: FC = () => {
  const showSettings = useSelector(state => state.ui.settings);
  const storeError = useSelector(state => state.ui.storeError);

  const intl = useIntl();
  useEffect(() => {
    document.title = intl.formatMessage(messages.pageTitle);
  }, [intl]);

  return (
    <>
      <Dashboard />
      {showSettings && <Settings />}
      {storeError && <StoreError error={storeError} />}
    </>
  );
};

export default Root;
