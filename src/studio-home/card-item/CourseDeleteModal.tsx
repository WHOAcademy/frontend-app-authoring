import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert, Form } from '@openedx/paragon';
import { Warning } from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import DeleteModal from '@src/generic/delete-modal/DeleteModal';
import { ToastContext } from '@src/generic/toast-context';
import { deleteCourseQuery } from '../data/thunks';
import messages from '../messages';

const CONFIRM_WORD = 'DELETE';

interface Props {
  isOpen: boolean;
  close: () => void;
  courseKey: string;
  displayName: string;
  org: string;
  number: string;
  run: string;
}

const CourseDeleteModal = ({
  isOpen, close, courseKey, displayName, org, number, run,
}: Props) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const { showToast } = useContext(ToastContext);
  const [confirmText, setConfirmText] = useState('');
  const isConfirmed = confirmText.trim().toUpperCase() === CONFIRM_WORD;

  const handleClose = () => {
    setConfirmText('');
    close();
  };

  const handleDelete = async () => {
    const succeeded = await (
      dispatch(deleteCourseQuery(courseKey)) as unknown as Promise<boolean>
    );
    handleClose();
    showToast(intl.formatMessage(
      succeeded ? messages.deleteCourseSuccess : messages.deleteCourseFailure,
    ));
  };

  return (
    <DeleteModal
      isOpen={isOpen}
      close={handleClose}
      variant="danger"
      icon={Warning}
      title={intl.formatMessage(messages.deleteCourseModalTitle)}
      description={(
        <>
          <Alert variant="danger">
            <Alert.Heading>
              {intl.formatMessage(messages.deleteCourseModalWarningTitle)}
            </Alert.Heading>
            <ul className="mb-0 pl-4">
              <li>{intl.formatMessage(messages.deleteCourseModalWarningIrreversible)}</li>
              <li>{intl.formatMessage(messages.deleteCourseModalWarningLinks)}</li>
              <li>{intl.formatMessage(messages.deleteCourseModalWarningLearners)}</li>
              <li>{intl.formatMessage(messages.deleteCourseModalWarningData)}</li>
            </ul>
          </Alert>
          <p>{intl.formatMessage(messages.deleteCourseModalBody)}</p>
          <ul className="pl-4 text-break">
            <li><b>{intl.formatMessage(messages.courseTitleLabel)}</b> {displayName}</li>
            <li><b>{intl.formatMessage(messages.courseOrgLabel)}</b> {org}</li>
            <li><b>{intl.formatMessage(messages.courseNumberLabel)}</b> {number}</li>
            <li><b>{intl.formatMessage(messages.courseRunLabel)}</b> {run}</li>
          </ul>
          <Form.Group>
            <Form.Label>
              {intl.formatMessage(messages.deleteCourseModalConfirmPrompt)}
            </Form.Label>
            <Form.Control
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder={intl.formatMessage(messages.deleteCourseModalConfirmPlaceholder)}
              data-no-autofocus
            />
          </Form.Group>
        </>
      )}
      onDeleteSubmit={handleDelete}
      isDeleteDisabled={!isConfirmed}
    />
  );
};

export default CourseDeleteModal;
