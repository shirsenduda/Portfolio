import React from 'react';
import { Mail, Github } from 'lucide-react';

function ContactPage() {
  const contacts = [
    { icon: Mail, label: 'Email', value: 'contact@example.com', link: 'mailto:contact@example.com' },
    { icon: Github, label: 'GitHub', value: '@shirsenduda', link: 'https://github.com/shirsenduda' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-400 text-lg">Let's discuss your next project</p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur border border-gray-800/50 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contacts.map((contact, i) => {
              const ContactIcon = contact.icon;
              return (
                <a
                  key={i}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-800 transition group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition">
                    <ContactIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{contact.label}</div>
                    <div className="font-semibold">{contact.value}</div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-purple-500/30"
            >
              <Mail size={20} />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;