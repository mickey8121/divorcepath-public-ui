const redirectToUpgrade = () => {
  if (typeof window !== 'undefined')
    window.open(`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/upgrade`);
};

export default redirectToUpgrade;
