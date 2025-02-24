import Link from 'next/link';
import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const Answer1Page: React.FC = () => (
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
                <h2 className='card-title'>How to Reset Your Password</h2>
                <div className='card-body'>
                  <p>If you’ve forgotten your password or need to reset it, follow these simple steps:</p>
                  <ol>
                    <li><strong>Go to the Login Page:</strong> Start by going to the WYD? login page.</li>
                    <li><strong>Click on 'Forgot Password?':</strong> Below the password field, you’ll see a "Forgot Password?" link. Click on it.</li>
                    <li><strong>Enter Your Email:</strong> You’ll be prompted to enter the email address associated with your account.</li>
                    <li><strong>Check Your Email:</strong> After submitting your email, we’ll send you a password reset link to your inbox.</li>
                    <li><strong>Reset Your Password:</strong> Open the email and click the link. You’ll be redirected to a page where you can create a new password for your account.</li>
                    <li><strong>Login with Your New Password:</strong> Once your password is reset, return to the login page and sign in with your new credentials.</li>
                  </ol>
                  <p>If you’re still having trouble, don’t hesitate to contact our support team for further assistance.</p>
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

const title = 'How to Reset Your Password';
const canonical = 'https://modern-ticketing.com/help/answer/1';
const description = 'Learn how to reset your password on WYD?';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'password reset',
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

export default Answer1Page;