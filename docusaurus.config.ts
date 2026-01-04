import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The8ArmsHub',
  tagline: 'Master algorithms, mathematics, and distributed systems - your comprehensive guide to computational thinking and system design',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://the8armshub.com',
  baseUrl: '/',

  organizationName: 'the8armshub',
  projectName: 'the8armshub',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/the8armshub/the8armshub/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/the8armshub/the8armshub/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/the8armshub-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'light',
    },
    navbar: {
      title: 'The8ArmsHub',
      logo: {
        alt: 'The8ArmsHub Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/l00pss/the8armshub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Algorithms',
              to: '/docs/algorithms/intro',
            },
            {
              label: 'Mathematics',
              to: '/docs/mathematics/intro',
            },
            {
              label: 'Distributed Systems',
              to: '/docs/distributed-systems/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/the8armshub',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/the8armshub',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/the8armshub',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/the8armshub/the8armshub',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/the8armshub/the8armshub/blob/main/CONTRIBUTING.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The8ArmsHub. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['go', 'bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

