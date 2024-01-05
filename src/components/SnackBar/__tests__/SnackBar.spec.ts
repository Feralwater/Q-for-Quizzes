import { mount } from '@vue/test-utils';
import SnackBar from '@/components/SnackBar/SnackBar.vue';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { createVuetify } from 'vuetify';

describe('SnackBar', () => {
  const vuetify = createVuetify();

  const props = {
    snackbar: true,
    snackbarText: 'Test Snackbar Text',
    color: 'red',
  };

  beforeEach(() => {
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const wrapper = mount(SnackBar, {
    props,
    global: {
      plugins: [vuetify],
    },
  });

  it('renders the snackbar when snackbar prop is true', () => {
    expect(wrapper.find('v-snackbar').isVisible()).toBe(true);
  });

  it('does not render the snackbar when snackbar prop is false', async () => {
    await wrapper.setProps({ snackbar: false });
    expect(wrapper.findComponent({ name: 'v-snackbar' }).exists()).toBe(false);
  });

  it('displays the correct snackbar text', () => {
    expect(wrapper.find('v-snackbar').text()).toBe('Test Snackbar Text');
  });
});