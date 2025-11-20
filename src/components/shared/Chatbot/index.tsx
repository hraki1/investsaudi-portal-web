import { useState } from "react";
import { useTranslation } from "react-i18next";
import ChatButton from "./ChatButton";
import type { Message } from "./types";
import ChatWindow from "./ChatWindow";

export default function Chatbot() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: t("chat.welcome_message", "Hello! How can I help you with investment opportunities in Saudi Arabia?"),
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword-based responses - can be replaced with API call
    if (lowerMessage.includes("investment") || lowerMessage.includes("استثمار")) {
      return t("chat.responses.investment", "Saudi Arabia offers excellent investment opportunities across various sectors including technology, energy, tourism, and manufacturing. Would you like to know more about a specific sector?");
    }
    if (lowerMessage.includes("visa") || lowerMessage.includes("تأشيرة") || lowerMessage.includes("سفر")) {
      return t("chat.responses.visa", "For visa and travel information, please visit our services section or contact our support team directly.");
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("اتصال") || lowerMessage.includes("تواصل")) {
      return t("chat.responses.contact", "You can reach us through our contact form, email, or phone. Check the footer section for all contact details.");
    }
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("مرحبا") || lowerMessage.includes("السلام")) {
      return t("chat.responses.greeting", "Hello! I'm here to help you with investment opportunities in Saudi Arabia. What would you like to know?");
    }
    if (lowerMessage.includes("sector") || lowerMessage.includes("قطاع")) {
      return t("chat.responses.sectors", "Key investment sectors include Energy & Renewables, Tourism & Entertainment, Technology & Innovation, Manufacturing, Healthcare, and Finance. Which sector interests you?");
    }
    if (lowerMessage.includes("opportunity") || lowerMessage.includes("فرصة")) {
      return t("chat.responses.opportunities", "Explore our opportunities section to discover regional investment opportunities across different regions of Saudi Arabia.");
    }
    
    return t("chat.responses.default", "Thank you for your message. Our team will get back to you soon. In the meantime, you can explore our website for more information about investment opportunities in Saudi Arabia.");
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(currentInput),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatWindow
        isOpen={isOpen}
        onClose={toggleChat}
        messages={messages}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSendMessage={handleSendMessage}
        isTyping={isTyping}
      />
      <ChatButton isOpen={isOpen} onToggle={toggleChat} />
    </>
  );
}

