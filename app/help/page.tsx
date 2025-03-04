import Link from 'next/link';

import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

import FormSearch from './components/FormSearch';

const Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={1} color='gray' text='Help' />
          <p className='gray'>Welcome to our help center. How can we help today?</p>

          <div className='top-search'>
            <FormSearch />
          </div>
          <div className='help-top flex flex-v-center flex-space-around'>
            <div className='center'>
              <Heading type={5} color='gray' text='About us' />
              <Link href='/about' className='blue'>
                <span className='material-symbols-outlined yellow'>star</span>
                What do we do?
              </Link>
            </div>
            <div className='center'>
              <Heading type={5} color='gray' text='Account' />
              <Link href='/help/answer/1' className='blue'>
                <span className='material-symbols-outlined yellow'>star</span>
                How to reset my password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>

    <Section className='gray-background'>
      <div className='container'>
        <div className='center'>
          <Heading type={3} color='gray' text='Any questions?' />
          <p className='gray'>
            If you can&apos;t find what you are looking for or need further support please contact
            us and we will be happy to help.
          </p>

          <div className='button-container'>
            <ButtonLink
              color='blue-filled'
              rightIcon='arrow_forward'
              text='Contact us'
              url='contact'
            />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Help';
const canonical = 'https://modern-ticketing.com/help';
const description = 'Modern ticketing is a modern ticketing solution';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'modern ticketing',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'Modern Ticketing',
    images: 'https://modern-ticketing.com/logo192.png',
  },
};

export default Page;
