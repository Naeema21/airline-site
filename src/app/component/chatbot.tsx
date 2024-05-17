// components/Chatbot.js
import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
const Chatbot = () => {
  useEffect(() => {
    addResponseMessage('Welcome! How can I help you with your flight booking today?');
  }, []);

  const handleNewUserMessage = (newMessage: string) => {
    console.log(`New message incoming! ${newMessage}`);
    // Here you can add logic to handle the incoming message and respond accordingly
    if (newMessage.toLowerCase().includes('book flight')) {
      addResponseMessage('Sure, I can help with that. Where are you flying to?');
    } else {
      addResponseMessage("I'm sorry, I can only assist with flight bookings.");
    }
  };

  return (
    <div className="fixed-bottom mb-3 mr-3">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Flight Booking Assistant"
        subtitle="Ask me about flight tickets"
      />
    </div>
  );
};

export default Chatbot;
