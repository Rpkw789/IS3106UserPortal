import { Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';

const SubscriptionPage: React.FC = () => (
  <Master>
    <Section className='white-background'>
      <div className='container'>
        <div className='text-center'>
          <Heading type={1} color='gray' text='Subscription Plans' />
          
          {/* Short description */}
          <p className='gray text-center'>
            Choose the plan that suits you best. Whether you’re an individual or part of a family,
            we offer flexible subscription options to help you get the most out of your experience.
          </p>
        </div>

        {/* Cards for Subscription Plans (Side-by-Side Layout) */}
        <div className='subscription-cards'>
          {/* Individual Subscription Plan Card */}
          <div className='card'>
            <h2 className='card-title'>Individual Subscription Plan</h2>
            <div className='card-body'>
              <p><strong>$50/ month</strong></p>
              <p><strong>65 credits</strong></p>
              <p><strong>1 person</strong></p>
              <p>
                <strong>Add a Guest:</strong> With individual plans, users can add guests, and the cost of the activity will be credited to the guest’s account. This makes it easy to share experiences without the hassle of managing payments.
              </p>
            </div>
            <div className='card-footer'>
              <ButtonLink color='blue-filled' text='Subscribe Now' url='/subscribe/individual' />
            </div>
          </div>

          {/* Group Subscription Plan Card */}
          <div className='card'>
            <h2 className='card-title'>Group Subscription Plan</h2>
            <div className='card-body'>
              <p><strong>$175/ month</strong></p>
              <p><strong>260 credits</strong></p>
              <p><strong>Up to 4 people</strong></p>
              <p>
                <strong>Add a Guest:</strong> With Group Plans, users can add guests, and the cost of the activity will be credited to the guest’s account. This makes it easy to share experiences without the hassle of managing payments.
              </p>
            </div>
            <div className='card-footer'>
              <ButtonLink color='blue-filled' text='Subscribe Now' url='/subscribe/family' />
            </div>
          </div>
        </div>
      </div>
    </Section>
    
    <Section className='gray-background'>
      <div className='container'>
        <div className='text-center'>
          <Heading type={3} color='gray' text='Need Help? Contact Us' />
          <p className='gray'>
            If you have any questions or need assistance with selecting the right plan, feel free to reach out to us.
          </p>

          <div className='button-container'>
            <ButtonLink color='blue-filled' rightIcon='arrow_forward' text='Contact Us' url='/contact' />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'Subscription Plans';
const canonical = 'https://modern-ticketing.com/subscription';
const description = 'Choose the best subscription plan for you or your family.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'subscription plans, individual plan, family plan, credits',
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

export default SubscriptionPage;