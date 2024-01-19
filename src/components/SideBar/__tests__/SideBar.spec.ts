import { mount } from '@vue/test-utils';
import SideBar from '@/components/SideBar/SideBar.vue';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createVuetify } from 'vuetify';
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import i18n from '../../../i18n';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView/DashboardView.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView/ProfileView.vue'),
  },
];

const router = createRouter({
  end: undefined, sensitive: undefined, strict: undefined,
  history: createWebHistory(),
  routes: routes,
});


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

  const wrapper = mount(SideBar, { props, global: { plugins: [vuetify, router, i18n] } });

  it('renders the sidebar when mdAndDown is false', () => {
    expect(wrapper.find('v-navigation-drawer').isVisible()).toBe(true);
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
    router.push = vi.fn();

    const dashboardLink  =  wrapper.find('.sidebar__item a.sidebar__Link[href="/"]');
    expect(dashboardLink.exists()).toBe(true);
    expect(dashboardLink.text()).toBe('Go to Dashboard');
    expect(dashboardLink.attributes('href')).toBe('/');

    await dashboardLink.trigger('click');
    expect(router.push).toHaveBeenCalledWith('/');
  });

  it('navigates to Profile when Profile link is clicked', async () => {
    router.push = vi.fn();

    const profileLink  =  wrapper.find('.sidebar__item a.sidebar__Link[href="/profile"]');
    expect(profileLink.exists()).toBe(true);
    expect(profileLink.text()).toBe('Go to My Profile');
    expect(profileLink.attributes('href')).toBe('/profile');

    await profileLink.trigger('click');
    await wrapper.vm.$nextTick();
    expect(router.push).toHaveBeenCalledWith('/profile');
  });
});

// import { mount } from '@vue/test-utils';
// import SideBar from '@/components/SideBar/SideBar.vue';
// import { describe, it, expect, vi, beforeEach } from 'vitest';
// import { createVuetify } from 'vuetify';
// import { Routers } from '@/router/Routers';
// import type { RouteRecordRaw } from 'vue-router';
//
// const router: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: Routers.Dashboard,
//     component: vi.fn(),
//   },
//   {
//     path: '/profile',
//     name: Routers.Profile,
//     component: vi.fn(),
//   },
// ];
//
//
// describe('SideBar', () => {
//   const vuetify = createVuetify();
//
//   const props = {
//     progress: 50,
//     headerName: 'Test Header',
//     headerIcon: 'Test Icon',
//   };
//
//   beforeEach(() => {
//     vi.clearAllMocks();
//   });
//
//   const wrapper = mount(SideBar, { props, global: { plugins: [vuetify, router] } });
//
//   it('renders the sidebar when mdAndDown is false', () => {
//     expect(wrapper.find('v-navigation-drawer').isVisible()).toBe(true);
//   });
//
//   it('does not render the sidebar when mdAndDown is true', async () => {
//     expect(wrapper.findComponent({ name: 'v-navigation-drawer' }).exists()).toBe(false);
//   });
//
//   it('renders the header name and icon correctly', () => {
//     expect(wrapper.find('.sidebar__header v-img').attributes('src')).toBe('Test Icon');
//     expect(wrapper.find('.sidebar__header').text()).toContain('Test Header');
//   });
//
//   it('renders the progress correctly when progress prop is defined', () => {
//     expect(wrapper.find('.sidebar__footer').text()).toContain('50% completed');
//   });
//
//   it('does not render the progress when progress prop is undefined', async () => {
//     await wrapper.setProps({ progress: undefined });
//     expect(wrapper.findComponent({ name: 'v-progress-linear' }).exists()).toBe(false);
//   });
//
//   it('navigates to Dashboard when Dashboard link is clicked', async () => {
//     const dashboardLink = wrapper.find('.sidebar__item router-link.sidebar__Link[to="/"]');
//     expect(dashboardLink.exists()).toBe(true);
//     expect(dashboardLink.text()).toBe('Go to Dashboard');
//     expect(dashboardLink.attributes('to')).toBe('/');
//
//     await dashboardLink.trigger('click');
//   });
//
//   it('navigates to Profile when Profile link is clicked', async () => {
//     const profileLink = wrapper.find('.sidebar__item router-link.sidebar__Link[to="/profile"]');
//     expect(profileLink.exists()).toBe(true);
//     expect(profileLink.text()).toBe('Go to My Profile');
//     expect(profileLink.attributes('to')).toBe('/profile');
//
//     await profileLink.trigger('click');
//   });
// });