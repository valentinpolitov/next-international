import React from 'react';
import { GetStaticProps } from 'next';
import { getLocaleStaticProps, useChangeLocale, useI18n } from '../locales';

const Home = () => {
  const t = useI18n();
  const changeLocale = useChangeLocale();

  return (
    <div>
      <p>Hello: {t('hello')}</p>
      <p>
        Hello:{' '}
        {t('welcome', {
          name: 'John',
        })}
      </p>
      <p>
        Hello:{' '}
        {t('about.you', {
          age: '23',
          name: 'Doe',
        })}
      </p>
      <button type="button" onClick={() => changeLocale('en')}>
        EN
      </button>
      <button type="button" onClick={() => changeLocale('fr')}>
        FR
      </button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = getLocaleStaticProps();

export default Home;
