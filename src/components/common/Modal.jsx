import React, { useCallback, useMemo } from 'react';

import classnames from 'classnames';
import { Modal as BootstrapModal, ModalBody, ModalFooter } from 'reactstrap';

import Button from 'components/common/Button';

import useModalContext from 'hooks/useModalContext';

const Modal = ({
  customOkBtn,
  okButton,
  name,
  form,
  title,
  titleComponent,
  children,
  onClosed,
  hideCancel,
  description,
  onSubmitClick,
  onCancelClick,
  selectedItems,
  showCloseButton,
  centered = true,
  borderedHeader = true,
  borderedFooter = true,
  customContent = false,
  submitButtonTitle = 'OK',
  closeButtonTitle = 'Close',
  submitButtonColor = 'primary',
  cancelBtnTitle = 'Cancel',
  titleScalingForDescription = true,
  ...modalProps
}) => {
  const { toggle, isOpen } = useModalContext();

  const handleCancel = useCallback(async () => {
    if (onCancelClick) await onCancelClick();
    toggle();
  }, [toggle, onCancelClick]);

  const handleSubmit = useCallback(
    async e => {
      if (onSubmitClick) await onSubmitClick(e);
      toggle();
    },
    [onSubmitClick, toggle],
  );

  const headerClassName = classnames({ bordered: borderedHeader });
  const footerClassName = classnames({ bordered: borderedFooter });

  const props = useMemo(
    () => ({
      isOpen,
      toggle,
      centered,
      ...modalProps,
    }),
    [centered, isOpen, modalProps, toggle],
  );

  const renderCancelBtn = useCallback(() => {
    if (hideCancel) return <span />;

    return (
      <Button size="sm" color="secondary" onClick={handleCancel} className="btn-cancel">
        {cancelBtnTitle}
      </Button>
    );
  }, [handleCancel, hideCancel, cancelBtnTitle]);

  const renderSubmitBtn = useCallback(() => {
    if (customOkBtn) return customOkBtn;

    return (
      <Button
        form={form}
        color={submitButtonColor}
        size="sm"
        type={form ? 'submit' : 'button'}
        onClick={form ? undefined : handleSubmit}
        {...okButton}
      >
        {submitButtonTitle}
      </Button>
    );
  }, [customOkBtn, form, handleSubmit, okButton, submitButtonColor, submitButtonTitle]);

  if (customContent) {
    return (
      <BootstrapModal {...props}>
        {children && (
          <ModalBody className="custom-content">
            {React.Children.map(children, child => React.cloneElement(child))}
          </ModalBody>
        )}
      </BootstrapModal>
    );
  }

  return (
    <BootstrapModal {...props}>
      {(title || titleComponent) && (
        <div
          className={classnames('modal-header', headerClassName, {
            'with-close': showCloseButton,
          })}
        >
          <div className="modal-header-title-row">
            <h5
              className={classnames('modal-title', {
                'with-description': !!description && titleScalingForDescription,
              })}
            >
              {title && title}
              {titleComponent && titleComponent}
            </h5>
          </div>
          {!!description && (
            <p
              className={classnames('modal-description', {
                'no-scaled-title': !titleScalingForDescription,
              })}
            >
              {description}
            </p>
          )}
          {showCloseButton && (
            <Button onClick={handleCancel} className="modal-close">
              {closeButtonTitle}
            </Button>
          )}
        </div>
      )}
      {children && (
        <ModalBody>
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child);
            }

            return child;
          })}
        </ModalBody>
      )}
      <ModalFooter className={footerClassName}>
        {renderCancelBtn()}
        {renderSubmitBtn()}
      </ModalFooter>
    </BootstrapModal>
  );
};

export default Modal;
