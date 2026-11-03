import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'course-authoring.page.title': {
    id: 'course-authoring.page.title',
    defaultMessage: 'Studio | {siteName}',
    description: 'Title tag',
  },
  'course-authoring.page.title.no-site-name': {
    id: 'course-authoring.page.title.no-site-name',
    defaultMessage: 'Studio',
    description: 'Title tag used when no site name is configured',
  },
});

export default messages;
