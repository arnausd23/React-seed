import React from 'react';

import {storiesOf} from '@storybook/react';
import {linkTo} from '@storybook/addon-links';

import {Welcome} from '@storybook/react/demo';

// https://www.learnstorybook.com/react/es/simple-component/
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
