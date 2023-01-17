import { mount } from '@vue/test-utils';
import { installQuasar } from '@quasar/quasar-app-extension-testing-unit-vitest';
import { Notify } from 'quasar';

import Dummy from 'src/components/Dummy.vue';

installQuasar({ plugins: { Notify } });

function factory() {
  return mount(Dummy, {});
}

describe('Dummy Component', () => {
  it('should call notify on submit', async () => {
    expect(Dummy).toBeTruthy();

    const wrap = factory();
    const spy = vi.spyOn(wrap.vm.$q, 'notify');
    console.log(wrap.html());

    const formInput = wrap.get('[data-test=form-top]');

    expect(spy).not.toHaveBeenCalled();
    await formInput.trigger('submit');
    // console.log(wrap.emitted());

    expect(spy).toHaveBeenCalled();
  });
});
