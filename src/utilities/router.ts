import { NextRouter } from 'next/router';

const goBack = (router: NextRouter): void => {
  router.back();
};

const navigateTo = (href: string, as: string, router: NextRouter): void => {
  router.push(href, as);
};

export { goBack, navigateTo };
