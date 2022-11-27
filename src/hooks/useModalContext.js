import { useContext } from 'react';

import ModalContext from 'context/ModalContext/ModalContext';

const useModalContext = () => useContext(ModalContext);

export default useModalContext;
