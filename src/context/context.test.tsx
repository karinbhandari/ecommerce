import { SuperUserMenu } from '../modules/core/components/Layout/menu';
import { context } from './interface';

import { context as contextType } from 'react';

const dummyContext: contextType = {
  lang: 'en',
  loggedInBy: 'super-user',
  menu: SuperUserMenu,
  snackMessage: {
    snackOpen: false,
    message: '',
    type: '',
  },
  setSnackMessage: jest.fn(),
};

test('to be truthy', () => {
  expect(2 + 2).toBe(4);
});

export { dummyContext };
