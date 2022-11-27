import { useEffect } from 'react';

import { useRouter } from 'next/router';

const PageNotFound = () => {
  const { replace } = useRouter();

  useEffect(() => {
    replace('/spousal-support-calculator/');
  }, [replace]);

  return null;
};

export default PageNotFound;
