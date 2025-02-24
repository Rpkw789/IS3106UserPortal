import { type Metadata } from 'next';

// components
import Master from '@components/Layout/Master';
import Section from '@components/Section/Section';
import Heading from '@components/Heading/Heading';
import ButtonLink from '@components/Button/ButtonLink';
import React from 'react';

const Page: React.FC = () => (
  <Master>
    {/* Hero Section */}
    <Section className="white-background">
      <div className="container">
        <div className="padding-bottom center">
          <Heading type={1} color="gray" text="What We Do" />
          <p className="gray form-information">
            At <strong>WYD?</strong> (What You Doing?), we're here to make discovering exciting and affordable activities easy! 
            Our platform offers a budget-friendly subscription model where users can earn credits to unlock personalized hangout experiences.
          </p>
        </div>
      </div>
    </Section>

    {/* Our Story */}
    <Section className="gray-background">
      <div className="container">
        <div className="center">
          <Heading type={5} color="gray" text="Our Story" />
          <p className="gray form-information">
            Founded with the mission to help young adults in Singapore, WYD? is here to provide affordable and fun hangout options that suit every taste. We want to eliminate the hassle of searching for activities and make sure you're always ready for a good time with friends.
          </p>
        </div>
      </div>
    </Section>

   {/* Our Values */}

{/* Our Values */}
<Section className="white-background">
  <div className="container">
    <div className="center">
      <Heading type={5} color="gray" text="Our Values" />
      <p className="gray form-information">
        <strong>Affordability:</strong> We believe that fun should be accessible to everyone without the high price tag.
        <br />
        <strong>Personalization:</strong> Tailoring experiences to your preferences is what makes hangouts more memorable.
        <br />
        <strong>Community:</strong> Building a community where young adults can connect and share experiences is at the heart of our platform.
      </p>
    </div>
  </div>

</Section>
    
      

    {/* Get in Touch */}
    <Section className="gray-background">
      <div className="container">
        <div className="center">
          <Heading type={5} color="gray" text="Get in Touch" />
          <p className="gray form-information">
            Got any questions or ideas? We'd love to hear from you!
          </p>
          <div className="button-container">
          <ButtonLink 
            color="blue-filled" 
            text="Contact Us" 
            rightIcon="arrow_forward" 
            url="/contact"  // internal route to the contact page
          />
          </div>
        </div>
      </div>
    </Section>
  </Master>
);

const title = 'About WYD?';
const mainUrl = 'https://www.wyd.com';
const canonical = `${mainUrl}/about`;
const description = 'Learn more about WYD?, our mission, values, and user experiences.';

export const metadata: Metadata = {
  title,
  description,
  keywords: 'WYD?, about us, affordable hangouts, Singapore',
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: 'website',
    siteName: 'WYD?',
    images: `${mainUrl}/logo192.png`,
  },
};

export default Page;