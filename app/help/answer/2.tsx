import Link from 'next/link';
import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Answer2Page: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='flex'>
          <div className='help-left'>
            <Heading type={2} color='gray' text='Account' />
            <ul>
              <li>
                <Link href='/help/answer/1' className='blue'>
                  Reset your password
                </Link>
              </li>
              <li>
                <Link href='/help/answer/2' className='blue'>
                  How to View My Tickets?
                </Link>
              </li>
            </ul>
          </div>
          <div className='help-right'>
            <Heading type={1} color='gray' text='Help article' />
            <div className='help-container'>
              <div className='card'>
                <h2 className='card-title'>How to View My Tickets</h2>
                <div className='card-body'>
                  <p>If you’ve purchased tickets through WYD?, here’s how you can view them:</p>
                  <ol>
                    <li><strong>Go to Your Account:</strong> Once logged in, navigate to your account by clicking on your profile or the account icon in the top right corner.</li>
                    <li><strong>Find Your Tickets:</strong> Once on the account page, look for the "My Tickets" section. This will display all your current and past tickets.</li>
                    <li><strong>Download or Send to Email:</strong>
                      <ul>
                        <li>To download a ticket, click the "Download" button next to the ticket you wish to view.</li>
                        <li>To send a ticket to your email, click the "Send to Email" button. This will send a copy of the ticket to the email address associated with your account.</li>
                      </ul>
                    </li>
                  </ol>
                  <p>That’s it! You’ll now have access to your tickets whenever you need them.</p>
                </div>
              </div>
            </div>

            <div className='button-container right'>
              <ButtonLink color='gray-overlay' text='Back to category' url='help/category/1' />
              &nbsp; &nbsp;
              <ButtonLink color='blue-filled' text='Back to help page' url='help' />
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
            If you can&apos;t find what you are looking for or need further support, please contact
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

const title = 'How to View My Tickets';
const canonical = 'https://modern-ticketing.com/help/answer/2';
const description = 'Learn how to view your tickets on WYD?';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'view tickets',
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

export default Answer2Page;