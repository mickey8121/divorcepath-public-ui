import React from 'react';

import classnames from 'classnames';

import Modal from 'components/common/Modal';
import Button from 'components/common/Button';
import FeaturesList from 'components/modals/upgrade/FeaturesList';

import useCalculationContext from 'hooks/useCalculationContext';

import redirectToUpgrade from 'utils/redirectToUpgrade';

export const UPGRADE_PLAN_MODAL_NAME = 'UPGRADE_PLAN';

const UpgradePlanModal = () => {
  const { isProfessional } = useCalculationContext();

  return (
    <Modal
      autoFocus={false}
      size="lg"
      name={UPGRADE_PLAN_MODAL_NAME}
      className={classnames('upgrade-plan-modal', { pro: isProfessional, client: !isProfessional })}
      title="Upgrade for Premium Features"
      showCloseButton
      closeButtonTitle=""
      cancelBtnTitle="Not Now"
      borderedHeader={false}
      borderedFooter={false}
      returnFocusAfterClose={false}
      customOkBtn={
        <Button
          color="primary"
          size="md"
          onClick={redirectToUpgrade}
          type="button"
          className="btn-submit"
        >
          Choose Plan
        </Button>
      }
    >
      <FeaturesList />
    </Modal>
  );
};

export default UpgradePlanModal;
