import { mount } from '@vue/test-utils';
import NotFoundView from '@/views/NotFoundView/NotFoundView.vue';
import { Routers } from '@/router/Routers';
import { describe, it, expect } from 'vitest';
import { createVuetify } from 'vuetify';

describe('NotFoundView', () => {
  const vuetify = createVuetify();
  const wrapper = mount(NotFoundView, {
    global: {
      mocks: {
        $vuetify: {
          breakpoint: {
            mdAndDown: true,
          },
        },
      },
      plugins: [vuetify],
    },
  });

  it('displays 404 error message', () => {
    expect(wrapper.find('.error__404').text()).toBe('404 Not Found');
  });

  it('displays scarecrow image', () => {
    expect(wrapper.find('.error__image v-img').attributes('src')).toBe('/src/assets/images/scarecrow.png');
  });

  it('displays error header and description', () => {
    expect(wrapper.find('.error__header').text()).toBe('Oops!');
    expect(wrapper.find('.error__description').text()).toContain('The page you are looking for might be removed or is temporarily unavailable.');
  });

  it('has a link to the homepage', () => {
    const link = wrapper.find('.error__link');
    expect(link.text()).toBe('Back to homepage');
    expect(link.attributes('to')).toBe(Routers.Dashboard);
  });

  it('applies mobile styles when display size is mdAndDown', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.error__main').classes()).toContain('error__main__mobile');
    expect(wrapper.find('.error__header').classes()).toContain('error__header__mobile');
    expect(wrapper.find('.error__description').classes()).toContain('error__description__mobile');
    expect(wrapper.find('.error__link').classes()).toContain('error__link__mobile');
  });
});