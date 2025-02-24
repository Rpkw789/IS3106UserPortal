'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // or 'next/navigation' if using Next.js 13 app router
import Link from 'next/link';

const TicketActions: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const router = useRouter();

  // Example: retrieve the user's email from your backend when the component mounts
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const res = await fetch('/api/get-user-email'); // Your backend endpoint
        if (!res.ok) throw new Error('Failed to retrieve email');
        const data = await res.json();
        setUserEmail(data.email); // Assuming response structure: { email: "user@example.com" }
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserEmail();
  }, []);

  const handleSendTickets = async () => {
    setSending(true);
    try {
      // Replace with your actual API endpoint for sending tickets
      const response = await fetch('/api/send-ticket-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userEmail,       // Retrieved from backend
          ticketId: '21EX9P',      // Replace with dynamic ticket data as needed
          event: 'Bungee Jumping', // Replace with event data as needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send ticket email');
      }

      const data = await response.json();
      alert('Tickets sent successfully!');
      router.push('/members/tickets');
    } catch (error: any) {
      console.error("Error sending tickets:", error);
      alert('Error sending ticket email: ' + error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="actions">
      <Link href="/members/tickets" title="Download tickets">
        <span className="material-symbols-outlined" aria-label="Download ticket">
          download
        </span>
      </Link>
      <button
        onClick={handleSendTickets}
        title="Send tickets"
        disabled={sending || !userEmail} // Disable if sending or if email hasn't loaded yet
        aria-label="Send tickets"
        style={{ cursor: sending ? 'not-allowed' : 'pointer' }}
      >
        <span className="material-symbols-outlined">forward_to_inbox</span>
      </button>
      {sending && <p>Sending your tickets...</p>}
    </div>
  );
};

export default TicketActions;