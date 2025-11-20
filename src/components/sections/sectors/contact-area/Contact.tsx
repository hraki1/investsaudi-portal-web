
import React from 'react';
import ContactCard from './ContactCard';
import { contactsData } from '../../../../data/contactData';

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bukra-bold">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto bukra-regular">
            Connect with our expert team to explore investment opportunities and get the support you need to succeed in Saudi Arabia.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactsData.map((contact) => (
            <ContactCard
              key={contact.id}
              title={contact.title}
              icon={`${"icons/" + contact.icon}`}
              description={contact.description}
              color={contact.color}
              phone={contact.phone}
              email={contact.email}
              qrCode={contact.qrCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
