import React, { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CalculationsTypeDropdown = ({
  icon,
  headerMenuLabel,
  header,
  clientId,
  blank,
  size = 'md',
  color = 'primary',
  right = true,
  btnToggleText = 'New Calculation',
  clientChildren = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  const disabled = useMemo(() => {
    if (!clientChildren.length) return false;

    return clientChildren.every(c => c?.isOfRelationship !== false);
  }, [clientChildren]);

  const links = useMemo(
    () => [
      {
        pathname: '/child-support-calculator',
        hasChildren: true,
        label: 'Child Support',
      },
      {
        pathname: '/spousal-support-calculator',
        hasChildren: false,
        label: 'Spousal Support',
        disabled,
      },
      {
        pathname: '/spousal-support-calculator',
        hasChildren: true,
        label: 'Child & Spousal Support',
      },
    ],
    [disabled],
  );

  const filteredLinks = useMemo(() => links.filter(l => !l.hide), [links]);

  const formattedLinks = useMemo(() => {
    if (!clientId && !header) return filteredLinks;

    return filteredLinks.map(({ label, pathname, ...values }) => ({
      ...values,
      pathname: clientId ? `${pathname}/${clientId}/create` : pathname,
      label: header ? `${label} Calculator` : label,
    }));
  }, [filteredLinks, clientId, header]);

  const dropdownClassName = useMemo(
    () => classNames('calculations-type-dropdown', `size-${size}`),
    [size],
  );

  return (
    <Dropdown toggle={toggle} isOpen={isOpen} className={dropdownClassName}>
      <DropdownToggle caret color={color}>
        {icon && (
          <span className="btn-inner--icon">
            <FontAwesomeIcon icon={icon} style={{ width: '14px', height: '16px' }} />
          </span>
        )}
        {btnToggleText}
      </DropdownToggle>
      <DropdownMenu {...{ right }}>
        {headerMenuLabel && (
          <DropdownItem header className="item-header">
            {headerMenuLabel}
          </DropdownItem>
        )}
        {formattedLinks.map(({ label, disabled: isDisabled, pathname }) => (
          <DropdownItem key={label}>
            <Link className="dropdown-item" href={pathname}>
              {label}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CalculationsTypeDropdown;
