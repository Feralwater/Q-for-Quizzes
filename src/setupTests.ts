import { vi } from 'vitest';

vi.mock('vue-i18n', () => ({
  createI18n: () => ({
    t: (key: string) => key,
  }),
}));