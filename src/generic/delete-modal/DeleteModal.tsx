import {
  ActionRow,
  Button,
  AlertModal,
} from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';
import LoadingButton from '../loading-button';

interface DeleteModalProps {
  isOpen: boolean;
  close: () => void;
  category?: string;
  onDeleteSubmit: () => void | Promise<void>;
  title?: string;
  description?: React.ReactNode | React.ReactNode[];
  variant?: string;
  btnLabel?: string;
  icon?: React.ElementType;
  buttonVariant?: 'tertiary' | 'brand' | 'primary' | 'danger';
  cancelButtonVariant?: 'tertiary' | 'brand' | 'primary' | 'default';
  /** Blocks the confirm button, e.g. while a typed confirmation is incomplete. */
  isDeleteDisabled?: boolean;
}

const DeleteModal = ({
  category = '',
  isOpen,
  close,
  onDeleteSubmit,
  title,
  description,
  variant = 'default',
  buttonVariant = 'danger',
  cancelButtonVariant = 'default',
  btnLabel,
  icon,
  isDeleteDisabled = false,
}: DeleteModalProps) => {
  const intl = useIntl();

  const modalTitle = title || intl.formatMessage(messages.title, { category });
  const modalDescription = description || intl.formatMessage(messages.description, { category });
  const defaultBtnLabel = btnLabel || intl.formatMessage(messages.deleteButton);

  return (
    <AlertModal
      title={modalTitle}
      isOpen={isOpen}
      onClose={close}
      variant={variant}
      icon={icon}
      footerNode={(
        <ActionRow>
          <Button
            variant={cancelButtonVariant}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              close();
            }}
          >
            {intl.formatMessage(messages.cancelButton)}
          </Button>
          <LoadingButton
            onClick={async (e) => {
              e.preventDefault();
              e.stopPropagation();
              await onDeleteSubmit();
            }}
            variant={buttonVariant}
            label={defaultBtnLabel}
            disabled={isDeleteDisabled}
          />
        </ActionRow>
      )}
    >
      <div>{modalDescription}</div>
    </AlertModal>
  );
};

export default DeleteModal;
