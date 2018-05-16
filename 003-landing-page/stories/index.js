import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';

storiesOf('Button', module)
  .add('some text', () => (
    <Button text='Hello Button' />
  ))
  .add('with some emoji', () => (
    <Button text='so cool 😀 😎 👍 💯' />
  ))