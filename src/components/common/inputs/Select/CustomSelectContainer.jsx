import React, { useMemo, useCallback } from 'react';

import { components } from 'react-select';

import CustomSelect from 'components/common/inputs/Select/CustomSelect';

const CustomSelectContainer = ({ options, freeOptionsKeys, ...props }) => {
  const customOptions = useMemo(
    () => options?.map(opt => ({ ...opt, isPremium: freeOptionsKeys?.includes(opt?.value) })),
    [freeOptionsKeys, options],
  );

  const Option = useCallback(
    optionProps =>
      optionProps.data.isPremium ? (
        <components.Option {...optionProps} />
      ) : (
        <div className="upgrade">
          <components.Option {...optionProps} />
        </div>
      ),
    [],
  );

  return <CustomSelect components={{ Option }} options={customOptions} {...props} />;
};

export default CustomSelectContainer;
