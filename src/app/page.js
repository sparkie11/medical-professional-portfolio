import Image from "next/image";

import doctorProfile from '../data/doctorProfile.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const { personalInfo, experience, accolades, publications, specializations } = doctorProfile;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{personalInfo.name}</h1>
              <h2 className="text-2xl text-gray-700 mb-4">{personalInfo.title}</h2>
              <p className="text-gray-600 mb-6">{personalInfo.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.education.map((edu, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-gray-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-gray-700">{exp.institution}</p>
                <p className="text-gray-500 mb-4">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Accolades Section */}
        <section id="accolades" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Accolades & Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {accolades.map((accolade, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900">{accolade.title}</h3>
                <p className="text-gray-700">{accolade.organization}</p>
                <p className="text-gray-500 mb-2">{accolade.year}</p>
                <p className="text-gray-600">{accolade.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Publications</h3>
            {publications.map((pub, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="font-semibold text-gray-800">{pub.title}</h4>
                <p className="text-gray-600">{pub.journal}, {pub.year}</p>
                <p className="text-gray-500">{pub.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">{personalInfo.contact.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">{personalInfo.contact.phone}</p>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                <p className="text-gray-600">{personalInfo.contact.office}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Areas of Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specializations.map((spec, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                <p className="text-gray-800 font-medium">{spec}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
