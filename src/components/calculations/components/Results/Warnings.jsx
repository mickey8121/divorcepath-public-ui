/* eslint-disable prettier/prettier */
import React, { useMemo } from 'react';



const Warnings = ({
  ssPayorIncomeLowRange,
  ssPayorIncomeBelowFloor,
  ssPayorIncomeAboveCeiling,
  csPayorIncomeAboveCeiling,
  ssChildDisability,
  ssPayorDisability,
  ssPayorNonTaxableIncome,
  ssCustodialPayor,
  showSpousalSupport,
  showChildSupport,
  retroactiveSupport,
  taxYear,
}) => {
  const incomes = useMemo(
    () =>
      [
        retroactiveSupport && {
          title: 'Retroactive Support',
          subtitle: 'Figures are Retroactive not Prospective',
          description: `This calculation is for a previous tax year (${taxYear}), not current or future support obligations. All figures should be verified using actual information.`,
        },
        showChildSupport &&
          csPayorIncomeAboveCeiling && {
          title: 'Child Support Guideline Income Higher than $150,000',
          subtitle: 'Exception to Child Support Guidelines',
          description:
              "The support tables in the Child Support Guidelines set out support payments based on the payor's income, up to an income of $150,000. For incomes over that amount, the Guidelines provide formulas to calculate the amount of child support payable. For payors with very high incomes, these formulas can result in extremely large payments that may exceed a child's reasonable expenses. For this reason, section 4 of the Guidelines permits the court to depart from the guidelines in certain circumstances, and to order a lesser amount of child support.",
        },
        showSpousalSupport &&
          ssPayorIncomeAboveCeiling && {
          title: 'Spousal Support Guideline Income Higher than $350,000',
          subtitle: 'Exception to Spousal Support Advisory Guidelines',
          description:
              'The Spousal Support Advisory Guidelines provide a ceiling of $350,000 in gross annual payor income. Above this amount, the formulas may result in a spousal support payment that is innaproprately high. After the payor\'s gross annual income reaches the $350,000 ceiling, the formulas should no longer be automatically applied. The ceiling is not a "cap" on spousal support, however the court may exercise its discretion in determining whether to apply the guideline formulas to the payor\'s income that is above $350,000.',
        },
        showSpousalSupport &&
          ssPayorIncomeBelowFloor && {
          title: "Payor's Income Less than $20,000",
          subtitle: 'Exception to Spousal Support Advisory Guidelines',
          description:
              "The Spousal Support Guidelines provide that there should generally not be any spousal support payable until the payor's income exceeds $20,000 per year. Below this level, the payor would have too little incentive to continue working, given prevailing tax rates. Judges almost never order spousal support where payors make less than $20,000 or even somewhat more. However, below this floor there will sometimes be cases that warrant an award of spousal support.",
        },
        showSpousalSupport &&
          ssPayorIncomeLowRange && {
          title: "Payor's Income Less than $30,000",
          subtitle: 'Exception to Spousal Support Advisory Guidelines',
          description:
              'The "floor" for spousal support formulas is $20,000 per year. Below that floor, spousal support orders are rare and therefore exceptional. For payor incomes between $20,000 and $30,000 there is no presumption against spousal support, but it may be necessary to depart from the lower end of the formula ranges to account for the payor\'s ability to pay.',
        },
        showSpousalSupport &&
          ssChildDisability && {
          title: 'Special Needs of a Child',
          subtitle: 'Exception to Spousal Support Advisory Guidelines',
          description:
              'Where the recipient of support is the caregiver for a child with special needs, the guideline amount and duration of spousal support may need to be adjusted above the upper range.',
        },
        showSpousalSupport &&
          ssPayorDisability && {
          title: 'Payor has a Disability',
          subtitle: 'Exception to Spousal Support Advisory Guidelines',
          description:
              'Illness or disability is a frequent issue in the case law and a common exception. Many disability issues can be resolved within the formulas. The exception may be relevant where the marriage is short-to-medium length and there are no children in the care of the recipient, but the disability is long term. Courts have taken divergent approaches towards resolving issues relating to illness and disability.',
        },
        showSpousalSupport &&
          ssPayorNonTaxableIncome && {
          title: 'Non-Taxable Payor Income',
          subtitle: 'Exception to Spousal Support Advisory Guidelines',
          description:
              "Spousal support is tax deductible to the payor. Where the payor's income is based almost entirely on non-taxable income, the payor is unable to deduct the support paid, contrary to this assumption. There are some self-adjusting mechanisms at work that may limit the need to depart from the guidelines in these situations. However, in some situations it will be necessary to depart from the guidelines to balance the tax positions and interests of the spouses.",
        },
        showSpousalSupport &&
          ssCustodialPayor && {
          title: 'Non-Custodial Parent to Fulfil Parenting Role',
          subtitle: 'Exception to Spousal Support Advisory Guidelines',
          description:
              "In shorter relationships where the non-custodial recipient of spousal support plays an important role in the child's care and upbringing after separation, and the child is younger, and the ranges for amount and duration are low enough and short enough that the non-custodial parent may not be able to continue to fulfil his or her parental role, it may be necessary to depart from the guideline amount and duration for spousal support in order to enable the non-custodial recipient to fulfil his or her parenting role.",
        },
      ].filter(i => i),
    [
      ssPayorIncomeLowRange,
      ssPayorIncomeBelowFloor,
      ssPayorIncomeAboveCeiling,
      csPayorIncomeAboveCeiling,
      ssChildDisability,
      ssPayorDisability,
      ssPayorNonTaxableIncome,
      ssCustodialPayor,
      showSpousalSupport,
      showChildSupport,
      retroactiveSupport,
      taxYear,
    ],
  );

  return incomes.map(({ title, subtitle, description }) => (
    <React.Fragment key={title}>
      <div className="row border-top ml-1 mr-1 pt-4 pb-0 mb-4" id="warnings">
        <div className="col-12 align-items-justify mb-2 pl-1">
          <div className="d-flex align-items-center">
            <span className="avatar">
              <img alt="placeholder" src="/canada/images/icons/dusk/png/icons8-error-64.png" width='50px' height='50px' className="img-saturate" />
            </span>
            <div className="avatar-content">
              <h5 className="mb-0">{title}</h5>
              <small className="d-block text-muted">{subtitle}</small>
            </div>
          </div>
        </div>
      </div>
      <p>{description}</p>
    </React.Fragment>
  ));
};

export default Warnings;
