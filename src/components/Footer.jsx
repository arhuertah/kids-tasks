const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-6 text-center text-sm text-gray-600">
      <div className="space-y-3">
        <div>
          <p className="font-medium">
            Created with 💻 and ✨ by{" "}
            <a 
              href="https://armandohuertahoffmann.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors underline"
            >
              Armando Huerta Hoffmann
            </a>
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a 
              href="https://github.com/arhuertah/kids-tasks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              title="View source on GitHub"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
            </a>
            <a 
              href="https://armandohuertahoffmann.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              title="Visit my website"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
          </div>
        </div>
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