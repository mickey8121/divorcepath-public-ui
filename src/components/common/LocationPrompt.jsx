import React, { useCallback, useMemo } from 'react';

import difference from 'components/calculations/utils/difference';

// link changed
const LocationPrompt = ({ initialValues, values }) => {
  const isBlocking = useMemo(() => {
    const diff = difference(values, initialValues);

    return !!Object.keys(diff)?.length;
  }, [initialValues, values]);

  const onRouteChange = useCallback(() => {
    return true;
  }, []);

  return null;
};

export default LocationPrompt;
