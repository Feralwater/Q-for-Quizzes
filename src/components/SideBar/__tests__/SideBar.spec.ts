import { mount } from '@vue/test-utils';
import SideBar from '@/components/SideBar/SideBar.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createVuetify } from 'vuetify';
import { Routers } from '../../../router/Routers';

describe('SideBar', () => {
  const vuetify = createVuetify();

  const props = {
    progress: 50,
    headerName: 'Test Header',
    headerIcon: 'Test Icon',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const wrapper = mount(SideBar, { props, global: { plugins: [vuetify] } });

  it('renders the sidebar when mdAndDown is false', () => {
    expect(wrapper.find('v-navigation-drawer').isVisible()).toBe(true);
  });

  it('does not render the sidebar when mdAndDown is true', async () => {
    await wrapper.setProps({ mdAndDown: true });
    expect(wrapper.findComponent({ name: 'v-navigation-drawer' }).exists()).toBe(false);
  });

  it('renders the header name and icon correctly', () => {
    expect(wrapper.find('.sidebar__header v-img').attributes('src')).toBe('Test Icon');
    expect(wrapper.find('.sidebar__header').text()).toContain('Test Header');
  });

  it('renders the progress correctly when progress prop is defined', () => {
    expect(wrapper.find('.sidebar__footer').text()).toContain('50% completed');
  });

  it('does not render the progress when progress prop is undefined', async () => {
    await wrapper.setProps({ progress: undefined });
    expect(wrapper.findComponent({ name: 'v-progress-linear' }).exists()).toBe(false);
  });

  it('navigates to Dashboard when Dashboard link is clicked', async () => {
    await wrapper.find(`.sidebar__item router-link[to="${Routers.Dashboard}"]`).trigger('click');

  });

  it('navigates to Profile when Profile link is clicked', async () => {
    await wrapper.find(`.sidebar__item router-link[to="${Routers.Profile}"]`).trigger('click');

  });
});