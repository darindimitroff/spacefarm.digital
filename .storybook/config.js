import { configure } from '@kadira/storybook';
import '@storybook/addon-knobs/register'

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
