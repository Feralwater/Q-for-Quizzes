import { mount } from '@vue/test-utils';
import DialogWindow from '@/components/DialogWindow/DialogWindow.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createVuetify } from 'vuetify';

const activatorComponent = {
  template: '<button name="activator">Click me</button>',
};

describe('DialogWindow', () => {
  const vuetify = createVuetify();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const wrapper = mount(DialogWindow, {
    props: {
      dialogTitle: 'Test Dialog',
      activator: activatorComponent,
      dialogContent: {},
    },
    global: {
      stubs: {
        'v-dialog': {
          template: '<div><slot /></div>',
        },
      },
      plugins: [vuetify],
    },
  });

  it('displays the correct dialog title', () => {
    expect(wrapper.find('.dialog__title').text()).toBe('Test Dialog');
  });

  it('does not render the dialog content when dialog is not activated', () => {
    expect(wrapper.findComponent({ name: 'dialogContent' }).exists()).toBe(false);
  });
});