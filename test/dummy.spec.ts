import { mount } from '@vue/test-utils';
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { qLayoutInjections } from './injections';

import Dummy from 'src/components/Dummy.vue';

installQuasar();

describe('Dummy Component', () => {
  it('Trigger a button', async () => {
    const wrap = mount(Dummy, {
      global: {
        provide: qLayoutInjections(),
        mocks: {
          $q: {
            notify: vi.fn(),
          },
        },
      },
    });

    await wrap.get('[data-test=form-top]').trigger('submit');
    console.log(wrap.emitted());
  });
});
