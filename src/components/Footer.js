import doctorProfile from '../data/doctorProfile.json';

const Footer = () => {
  const { siteInfo } = doctorProfile;

  return (
    <footer className="bg-gray-100 mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm">
            <p>© {siteInfo.created} Dr. Jefferson George. All rights reserved.</p>
            <p className="mt-1">Last updated: {siteInfo.lastUpdated}</p>
          </div>
          <div className="text-gray-600 text-sm mt-4 md:mt-0">
            <p>Maintained by: {siteInfo.maintainedBy}</p>
            <p className="mt-1">Version: {siteInfo.version}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;