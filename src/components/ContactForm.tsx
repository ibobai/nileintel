import React, { useState } from 'react';

interface ContactFormProps {
  language: 'en' | 'ar' | 'fr';
  t: any;
}

const ContactForm: React.FC<ContactFormProps> = ({ language, t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-6">
      {submitStatus === 'success' && (
        <div className="mb-6 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded">
          {t.contact.form.successMessage}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded">
          {t.contact.form.errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              {t.contact.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              placeholder={t.contact.form.namePlaceholder}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              {t.contact.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              placeholder={t.contact.form.emailPlaceholder}
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
              {t.contact.form.subject}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            >
              <option value="">{t.contact.form.subjectPlaceholder}</option>
              {t.contact.form.subjects.map((subject: string, index: number) => (
                <option key={index} value={subject}>{subject}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              placeholder={t.contact.form.messagePlaceholder}
            ></textarea>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md font-medium text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {t.contact.form.sending}
                </>
              ) : (
                t.contact.form.submit
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;