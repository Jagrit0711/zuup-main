export const routes = {
  home: '/',
  about: '/about',
  ourStory: '/our-story',
  schools: '/schools',
  join: '/join',
  saas: '/saas',
  empower: '/empower',
  events: '/events',
  moza: '/moza',
  privacy: '/privacy',
  careers: '/careers',
  jobAdmin: '/jobadmin',
  zuupStore: '/zuup-store',
  store: '/store',
  zuupCities: '/zuup-cities',
  apply: '/apply',
} as const;

export function zuupCity(slug: string): string {
  return `/zuup-in/${slug}`;
}

export function careersDetail(slug: string): string {
  return `/careers/${encodeURIComponent(slug)}`;
}
