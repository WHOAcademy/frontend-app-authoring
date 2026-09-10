import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.studio-home.heading.title',
    defaultMessage: '{studioShortName} home',
  },
  addNewCourseBtnText: {
    id: 'course-authoring.studio-home.add-new-course.btn.text',
    defaultMessage: 'New course',
  },
  addNewLibraryBtnText: {
    id: 'course-authoring.studio-home.add-new-library.btn.text',
    defaultMessage: 'New library',
  },
  homePageLoadFailedMessage: {
    id: 'course-authoring.studio-home.page-load.failed.message',
    defaultMessage: 'Failed to load Studio home. Please try again later.',
  },
  emailStaffBtnText: {
    id: 'course-authoring.studio-home.email-staff.btn.text',
    defaultMessage: 'Email staff to create course',
  },
  defaultSection_1_Title: {
    id: 'course-authoring.studio-home.default-section-1.title',
    defaultMessage: 'Are you staff on an existing {studioShortName} course?',
  },
  defaultSection_1_Description: {
    id: 'course-authoring.studio-home.default-section-1.description',
    defaultMessage: 'The course creator must give you access to the course. Contact the course creator or administrator for the course you are helping to author.',
  },
  defaultSection_2_Title: {
    id: 'course-authoring.studio-home.default-section-2.title',
    defaultMessage: 'Create your first course',
  },
  defaultSection_2_Description: {
    id: 'course-authoring.studio-home.default-section-2.description',
    defaultMessage: 'Your new course is just a click away!',
  },
  btnAddNewCourseText: {
    id: 'course-authoring.studio-home.btn.add-new-course.text',
    defaultMessage: 'Create your first course',
  },
  btnReRunText: {
    id: 'course-authoring.studio-home.btn.re-run.text',
    defaultMessage: 'Re-run course',
  },
  btnDropDownText: {
    id: 'course-authoring.studio-home.btn.dropdown.text',
    defaultMessage: 'Course actions',
  },
  viewLiveBtnText: {
    id: 'course-authoring.studio-home.btn.view-live.text',
    defaultMessage: 'View live',
  },
  btnDeleteCourseText: {
    id: 'course-authoring.studio-home.btn.delete-course.text',
    defaultMessage: 'Delete course',
  },
  deleteCourseModalTitle: {
    id: 'course-authoring.studio-home.delete-course.modal.title',
    defaultMessage: 'Delete this course permanently?',
  },
  deleteCourseModalWarningTitle: {
    id: 'course-authoring.studio-home.delete-course.modal.warning-title',
    defaultMessage: 'Warning: Deleting a course is permanent',
  },
  deleteCourseModalWarningIrreversible: {
    id: 'course-authoring.studio-home.delete-course.modal.warning.irreversible',
    defaultMessage: 'This action is irreversible.',
  },
  deleteCourseModalWarningLinks: {
    id: 'course-authoring.studio-home.delete-course.modal.warning.links',
    defaultMessage: 'Any linked pages may break with a "page not found" error.',
  },
  deleteCourseModalWarningLearners: {
    id: 'course-authoring.studio-home.delete-course.modal.warning.learners',
    defaultMessage: 'If students are enrolled, their experience will be disrupted.',
  },
  deleteCourseModalWarningData: {
    id: 'course-authoring.studio-home.delete-course.modal.warning.data',
    defaultMessage: 'All enrollments and data will be deleted.',
  },
  deleteCourseModalBody: {
    id: 'course-authoring.studio-home.delete-course.modal.body',
    defaultMessage: 'This action cannot be undone. Deleting this course will remove all content, '
      + 'learner data, and analytics associated with it.',
  },
  deleteCourseModalConfirmPrompt: {
    id: 'course-authoring.studio-home.delete-course.modal.confirm-prompt',
    defaultMessage: 'Type DELETE to delete the course',
  },
  deleteCourseModalConfirmPlaceholder: {
    id: 'course-authoring.studio-home.delete-course.modal.confirm-placeholder',
    defaultMessage: 'Type DELETE to confirm',
  },
  deleteCourseSuccess: {
    id: 'course-authoring.studio-home.delete-course.success',
    defaultMessage: 'Course deleted.',
  },
  deleteCourseFailure: {
    id: 'course-authoring.studio-home.delete-course.failure',
    defaultMessage: 'Course could not be deleted. Please try again.',
  },
  courseTitleLabel: {
    id: 'course-authoring.studio-home.delete-course.modal.label.title',
    defaultMessage: 'Name:',
  },
  courseOrgLabel: {
    id: 'course-authoring.studio-home.delete-course.modal.label.org',
    defaultMessage: 'Organization:',
  },
  courseNumberLabel: {
    id: 'course-authoring.studio-home.delete-course.modal.label.number',
    defaultMessage: 'Course number:',
  },
  courseRunLabel: {
    id: 'course-authoring.studio-home.delete-course.modal.label.run',
    defaultMessage: 'Course Run:',
  },
  organizationTitle: {
    id: 'course-authoring.studio-home.organization.title',
    defaultMessage: 'Organization and library settings',
  },
  organizationLabel: {
    id: 'course-authoring.studio-home.organization.label',
    defaultMessage: 'Show all courses in organization:',
  },
  organizationSubmitBtnText: {
    id: 'course-authoring.studio-home.organization.btn.submit.text',
    defaultMessage: 'Submit',
  },
  organizationInputPlaceholder: {
    id: 'course-authoring.studio-home.organization.input.placeholder',
    defaultMessage: 'For example, MITx',
  },
  organizationInputNoOptions: {
    id: 'course-authoring.studio-home.organization.input.no-options',
    defaultMessage: 'No options',
  },
  libraryMigrationStatusText: {
    id: 'course-authoring.studio-home.library-v1.card.status',
    description: 'Status text in v1 library card in studio informing user of its migration status',
    defaultMessage: 'Previously migrated library. Any problem bank links were already moved to',
  },
});

export default messages;
