/*
 * GitHub Contribution Configuration
 *
 * This file contains the configuration for the GitHub contribution graph.
 * Update the username to match your GitHub profile.
 */

export const githubConfig = {
  username: 'jubairmoaj',
  apiUrl: 'https://github-contributions-api.deno.dev',

  // Display settings
  title: 'GitHub Activity',
  subtitle: 'coding journey over the past year',

  // Chart settings
  blockSize: 11,
  blockMargin: 3,
  fontSize: 12,
  maxLevel: 4,

  // Month labels
  months: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  // Weekday labels (empty for weekends, M for Monday, etc.)
  weekdays: ['', 'M', '', 'W', '', 'F', ''],

  // Total count label template
  totalCountLabel: '{{count}} contributions in the last year',

  // Theme configuration for dark and light modes
  theme: {
    dark: [
      'rgb(22, 27, 34)', // Very dark for no contributions
      'rgb(14, 68, 41)', // Dark green
      'rgb(0, 109, 50)', // Medium green
      'rgb(38, 166, 65)', // Bright green
      'rgb(57, 211, 83)', // Very bright green
    ],
    light: [
      'rgb(227, 233, 227)', // Light gray
      'rgb(139, 224, 153)', // Light green
      'rgb(57, 196, 94)', // Medium green
      'rgb(42, 158, 73)', // Dark green
      'rgb(33, 110, 57)', // Very dark green
    ],
  },

  // Error state configuration
  errorState: {
    title: 'Unable to load GitHub contributions',
    description: 'Check out my profile directly for the latest activity',
    buttonText: 'View on GitHub',
  },

  // Loading state configuration
  loadingState: {
    title: 'Loading contributions...',
    description: 'Fetching your GitHub activity data',
  },
};
