import React, { useState, useRef, useEffect } from 'react';
import wave from "../../assets/waving_hand.gif";
import G from "../../assets/a3.png"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: '👋 Welcome to Urbanrise Galleria Gardens @Shadnagar. Ready to Build Villa Plots', sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
      // Simulate bot response after a short delay
      setTimeout(() => {
        setMessages([...messages, { text: getBotResponse(inputValue), sender: 'bot' }]);
      }, 500);
    }
  };

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('cost')) {
      return 'Please fill out the enquiry form for detailed pricing information.';
    } else if (lowerCaseMessage.includes('location')) {
      return 'Urbanrise Galleria Gardens is located at Shadnagar.';
    } else if (lowerCaseMessage.includes('amenities')) {
      return 'We offer a wide range of amenities including a clubhouse, swimming pool, and more. Please check our website for the full list.';
    } else if (lowerCaseMessage.includes('site visit')) {
      return 'Would you like to schedule a site visit? Please click the "Yes" button or fill out the enquiry form.';
    } else {
      return "Thank you for your message! We will get back to you shortly.";
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="fixed-bottom p-3 d-flex flex-column align-items-end"
      style={{ zIndex: 1000 }}
    >
      {isOpen && (
        <div
          className="bg-white rounded shadow-lg p-3 mb-2"
          style={{ width: '300px', maxHeight: '400px', overflowY: 'auto' }}
          ref={chatContainerRef}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded ${message.sender === 'user' ? 'bg-success text-white align-self-end' : 'bg-light text-dark align-self-start' } d-inline-block`}
              style={{ maxWidth: '80%', wordBreak: 'break-word' }}
            >
              {message.text}
            </div>
          ))}
          <div className="mt-2 d-flex">
            <input
              type="text"
              className="form-control form-control-sm me-2"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={handleInputChange}
            />
            <button className="btn btn-success btn-sm" onClick={handleSendMessage}>
              Send
            </button>
          </div>
          {messages.some(msg => msg.text.toLowerCase().includes('site visit')) && (
            <div className="mt-2 d-flex justify-content-end">
              <button className="btn btn-outline-success btn-sm">Yes</button>
            </div>
          )}
        </div>
      )}
      <button
        className="btn btn-success rounded-circle"
        style={{ width: '60px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        onClick={toggleChat}
      >
        <img
          src={G} 
          alt="chat icon"
          style={{ width: '60px', height: '60px' }}d
        />
      </button>
    </div>
  );
};

export default Chatbot;
