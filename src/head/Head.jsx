import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

const Head = () => {
  const intl = useIntl();
  const siteName = getConfig().SITE_NAME?.trim();
  const title = siteName
    ? intl.formatMessage(messages['course-authoring.page.title'], { siteName })
    : intl.formatMessage(messages['course-authoring.page.title.no-site-name']);

  useEffect(() => {
    document.querySelectorAll('link[rel*="icon"]:not([data-react-helmet])')
      .forEach(element => element.remove());
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="shortcut icon" href={getConfig().FAVICON_URL} type="image/x-icon" />
    </Helmet>
  );
};

export default Head;
