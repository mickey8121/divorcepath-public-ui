const scrollToError = () => {
  setTimeout(() => {
    const elements =
      typeof document !== 'undefined' && document
        ? document.querySelectorAll('.invalid-feedback')
        : null;

    let currentElement = null;

    elements.forEach(element => {
      if (!currentElement && element.innerHTML) currentElement = element;
    });

    if (!currentElement) return;

    currentElement.previousSibling.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 10);
};

export default scrollToError;
