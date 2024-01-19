import {  shallowMount } from '@vue/test-utils';
import DashboardView from '@/views/DashboardView/DashboardView.vue';
import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
import { quizzes } from '../../../assets/questions/quizzes';
import { describe, it, expect } from 'vitest';
import { createVuetify } from 'vuetify';
import DialogWindow from '../../../components/DialogWindow/DialogWindow.vue';
import i18n from '@/i18n';
import LanguageSwitcher from '../../../components/LanguageSwitcher/LanguageSwitcher.vue';
const vuetify = createVuetify();

describe('DashboardView.vue', () => {
  const wrapper = shallowMount(DashboardView, {
    global: {
      plugins: [vuetify, i18n],
    },
  });
  
  it('renders the correct number of QuizCard components', () => {
    const quizCards = wrapper.findAllComponents(QuizCard);
    expect(quizCards.length).toBe(quizzes.length);
  });

  it('renders the DialogWindow component', () => {
    const dialogWindow = wrapper.findComponent(DialogWindow);
    expect(dialogWindow.exists()).toBe(true);
  });

  it('renders the LanguageSwitcher component', () => {
    const languageSwitcher = wrapper.findComponent(LanguageSwitcher);
    expect(languageSwitcher.exists()).toBe(true);
  });

  it('renders the profile button', () => {
    const profileButton = wrapper.find('.header__profile');
    expect(profileButton.exists()).toBe(true);
  });
});