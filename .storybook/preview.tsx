import type { Preview, StoryContext, StoryFn } from '@storybook/react';
// Decorator to toggle dark mode

// Example decorator to toggle dark mode
const withTheme = (Story: StoryFn, context: StoryContext) => {
  const { globals, args } = context;

  // Dynamically apply 'dark' class
  const html = document.documentElement;
  if (globals.theme === 'dark') {
    html.classList.add('dark');
    html.style.backgroundColor = 'rgb(15 23 42)';
  } else {
    html.classList.remove('dark');
    html.style.backgroundColor = 'white';
  }

  // Render the story by calling it as a function
  return Story(args, context);
};

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global Theme For Components',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
        dynamicTitle: true
      }
    }
  }
};

export default preview;
