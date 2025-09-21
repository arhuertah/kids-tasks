const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-6 text-center text-sm text-gray-600">
      <div className="space-y-2">
        <p className="font-medium">
          Created with 💻 and ✨ by Armando Huerta Hoffmann
        </p>
        <p className="text-xs">
          Powered by Microsoft Copilot, GitHub Copilot, and Claude Sonnet 3.5
        </p>
        <p className="text-xs">
          &copy; {currentYear} Kids Tasks. All rights reserved.
        </p>
        <p className="text-[10px] mt-2">
          This project is open-source and provided &quot;as is&quot; without warranty of any kind.
          Not for commercial use. All trademarks are property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;