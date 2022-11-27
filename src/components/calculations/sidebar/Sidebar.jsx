/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { connect, useFormikContext } from 'formik';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import classNames from 'classnames';
import throttle from 'lodash/throttle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SidebarTimelineItem from 'components/calculations/sidebar/SidebarTimelineItem';
import ResultsSection from 'components/calculations/sidebar/ResultsSection';
import CalculateButtons from 'components/calculations/CalculateButtons';
import regionNames from 'components/calculations/utils/regionNames';
import ChildSupportType from 'components/calculations/components/common/ChildSupportType';

import useCalculationContext from 'hooks/useCalculationContext';

import toUSD from 'utils/toUSD';

dayjs.extend(relativeTime);

const Sidebar = ({ isSubmitting, isChanged, setIsChanged, supportCalculation, showTaxes }) => {
  const { isProfessional, type } = useCalculationContext();
  const { values } = useFormikContext();

  const [current, setCurrent] = useState('#calculation');
  const [isHovered, setIsHovered] = useState(false);

  const profile = useMemo(() => values?.clientSupportProfile?.[type], [values, type]);
  const exProfile = useMemo(() => values?.exSupportProfile?.[type], [values, type]);

  const relationship = useMemo(
    () =>
      dayjs(values?.relationship?.separationDate).diff(
        values?.relationship?.cohabitationDate,
        'years',
      ),
    [values],
  );

  const children = useMemo(() => values?.children?.create, [values]);

  const totalIncome = useCallback(
    profileType =>
      values?.[profileType]?.create?.income?.create?.all?.create?.reduce(
        (acc, item) =>
          acc +
            parseInt(
              item?.data?.userAmount || item?.userAmount || item?.data?.amount || item?.amount,
              10,
            ) || 0,
        0,
      ) +
      values?.[profileType]?.create?.adjustments?.create?.all?.create?.reduce(
        (acc, item) =>
          acc +
            parseInt(
              item?.data?.userAmount || item?.userAmount || item?.data?.amount || item?.amount,
              10,
            ) || 0,
        0,
      ),
    [values],
  );

  const resultsSectionCount = useMemo(() => (showTaxes ? 6 : 5), [showTaxes]);

  const getChildParenting = useCallback(
    child => {
      if (!child?.isOfRelationship || !child?.parenting) return 'other';

      if (isProfessional) return child.parenting.toLowerCase();

      return child.parenting === 'CLIENT' ? 'you' : child.parenting.toLowerCase();
    },
    [isProfessional],
  );

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined' && document) {
      const mainNavLinks = document.querySelectorAll('.timeline-item a');
      const height = document.documentElement.clientHeight;

      const handleScroll = throttle(() => {
        if (window.scrollY === 0) {
          setCurrent('#calculation');
        } else {
          const currentLink = [...mainNavLinks].find(link => {
            if (link.hash) {
              const section = document.querySelector(link.hash);

              if (section) {
                const { top, bottom } = section.getBoundingClientRect();

                return (top >= 0 && top < height / 3) || bottom > height / 2;
              }
            }

            return false;
          });

          if (currentLink) {
            setCurrent(currentLink.hash);
          }
        }
      }, 100);

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    }

    return () => {};
  }, [supportCalculation]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div className="sidebar-container">
      <div className="custom-timeline">
        <div
          className="timeline-item my-0 pb-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleMouseLeave}
        >
          <Link href="#calculation">
            <div>
              <span
                className={classNames(
                  'custom-timeline-step bg-primary border-primary text-white',
                  'custom-timeline-step-hover-primary',
                  {
                    'custom-timeline-step-shadow-primary': current === '#calculation' || isHovered,
                  },
                )}
              >
                1
              </span>
              <div className={classNames('timeline-item-content', { underline: isHovered })}>
                <h6
                  className={classNames('text-sm mb-1', {
                    underline: current === '#calculation',
                  })}
                >
                  Calculation
                </h6>

                <div className="truncated">
                  <small className="text-muted timeline-item-text">
                    <FontAwesomeIcon
                      icon="file"
                      className="mr-2"
                      style={{ width: '9.594px', height: '12.797px' }}
                    />
                    {values?.title || 'Untitled calculation'}
                  </small>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <SidebarTimelineItem
        id="#background"
        index="2"
        color="info"
        title="Background"
        current={current}
      >
        <div className="text-muted text-sm truncated">
          {profile?.firstName || 'Client & '}
          {profile?.firstName && ' & '}
          {exProfile?.firstName || 'Ex'}
        </div>

        <div className="truncated">
          <small className="text-muted">
            <FontAwesomeIcon
              icon="user"
              className="mr-1"
              style={{ width: '11.188px', height: '12.797px' }}
            />
            {profile?.birthDate ? `${dayjs().diff(profile?.birthDate, 'years')} / ` : ''}
            {profile?.gender ? `${profile?.gender.charAt(0)} / ` : ''}
            {regionNames[profile?.residence]} /{profile?.hasNewPartner ? ` R` : ` S`}
          </small>
        </div>

        <div className="truncated">
          <small className="text-muted">
            <FontAwesomeIcon
              icon="user"
              className="mr-1"
              style={{ width: '11.188px', height: '12.797px' }}
            />
            {exProfile?.birthDate ? `${dayjs().diff(exProfile?.birthDate, 'years')} / ` : ''}
            {exProfile?.gender ? `${exProfile?.gender.charAt(0)} / ` : ''}
            {regionNames[exProfile?.residence]} /{exProfile?.hasNewPartner ? ` R` : ` S`}
          </small>
        </div>

        {!!relationship && (
          <div className="truncated">
            <small className="text-muted">
              <FontAwesomeIcon icon="clock" className="mr-1" />
              {relationship} year relationship
            </small>
          </div>
        )}
      </SidebarTimelineItem>

      <SidebarTimelineItem
        id="#children"
        index="3"
        color="success"
        title="Children"
        current={current}
      >
        {children?.map((child, index) => (
          <div className="truncated" key={child?.id || index}>
            <small className="text-muted">
              <FontAwesomeIcon
                icon="child"
                className="mr-1"
                style={{ width: '9.594px', height: '12.797px' }}
              />
              {child?.firstName} / {child?.birthDate && dayjs().diff(child.birthDate, 'years')} /{' '}
              {getChildParenting(child)} /{' '}
            </small>
            <ChildSupportType child={child} abridged />
            <br />
          </div>
        ))}

        {!children?.length && <small className="text-muted">N/A</small>}
      </SidebarTimelineItem>

      <SidebarTimelineItem id="#income" index="4" color="warning" title="Income" current={current}>
        {!values?.clientSupportProfile?.[type]?.income && (
          <div className="truncated">
            <small className="text-muted">N/A</small>
          </div>
        )}

        {totalIncome('clientSupportProfile') >= 0 && (
          <div className="truncated">
            <small className="text-muted">
              <FontAwesomeIcon
                icon="money-bill-alt"
                className="mr-1"
                style={{ width: '16px', height: '12.797px' }}
              />
              {isProfessional ? 'Client' : 'You'}: {toUSD(totalIncome('clientSupportProfile'))}
            </small>
          </div>
        )}

        {profile?.hasNewPartner && (
          <div className="truncated">
            <small className="text-muted">
              <FontAwesomeIcon
                icon="money-bill-alt"
                className="mr-1"
                style={{ width: '16px', height: '12.797px' }}
              />
              {isProfessional ? "Client's " : 'Your '} Partner: {toUSD(profile?.partnerIncome)}
            </small>
            <br />
          </div>
        )}

        {totalIncome('exSupportProfile') >= 0 && (
          <div className="truncated">
            <small className="text-muted">
              <FontAwesomeIcon
                icon="money-bill-alt"
                className="mr-1"
                style={{ width: '16px', height: '12.797px' }}
              />
              Ex: {toUSD(totalIncome('exSupportProfile'))}
            </small>
          </div>
        )}

        {exProfile?.hasNewPartner && (
          <div className="truncated">
            <small className="text-muted">
              <FontAwesomeIcon
                icon="money-bill-alt"
                className="mr-1"
                style={{ width: '16px', height: '12.797px' }}
              />
              Ex partner: {toUSD(exProfile?.partnerIncome)}
            </small>
          </div>
        )}
      </SidebarTimelineItem>

      {showTaxes && (
        <SidebarTimelineItem
          id="#tax"
          index="5"
          color="danger"
          title="Taxes & Benefits"
          current={current}
        >
          <div className="truncated">
            <small className="text-muted">
              <FontAwesomeIcon
                icon="calculator"
                className="mr-1"
                style={{ width: '11.188px', height: '12.797px' }}
              />
              {/* {isCalculated ? automatically calculated : enter inputs to calculate} */}
              Automatically calculated
            </small>
          </div>
        </SidebarTimelineItem>
      )}

      <SidebarTimelineItem
        id="#results"
        index={resultsSectionCount}
        color="dark"
        title="Results"
        current={current}
        noLink={!!supportCalculation?.calculationResult}
      >
        <ResultsSection
          supportCalculation={supportCalculation}
          isSubmitting={isSubmitting}
          values={values}
          type={type}
          isChanged={isChanged}
        />
      </SidebarTimelineItem>

      <div className="mt-3 sidebar-buttons">
        <CalculateButtons
          supportCalculation={supportCalculation}
          values={values}
          setIsChanged={setIsChanged}
          isChanged={isChanged}
        />
      </div>
    </div>
  );
};

export default connect(Sidebar);
