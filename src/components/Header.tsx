const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#003023] backdrop-blur-md border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-center h-20 px-4 sm:px-6 lg:px-8">
          {/* Logo - Centered */}
          <a href="#" className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dix4pzu0k/image/upload/v1769062177/Screenshot_from_2026-01-22_10-55-06_vnnabf.png" alt="LHT Logo" className="h-20 w-auto object-contain" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
