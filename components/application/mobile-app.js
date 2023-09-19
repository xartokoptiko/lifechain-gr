import React, { useState } from 'react';
import LoginPageApp from './loginpage-app';
import HomePageApp from './homepage-app';
import HealthPageApp from './healthpage-app';
import AlertPageApp from './alertpage-app';

export default function MobileApp() {
  const [currentPage, setCurrentPage] = useState('login'); // Initial page is 'login'

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Render the appropriate component based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPageApp onNext={() => handlePageChange('home')} />;
      case 'home':
        return (
          <HomePageApp
            onHealthClick={() => handlePageChange('health')}
          />
        );
      case 'health':
        return (
          <HealthPageApp
            onCancel={() => handlePageChange('home')}
            onSendHelp={() => handlePageChange('alert')}
          />
        );
      case 'alert':
        return (
          <AlertPageApp
            onCancel={() => handlePageChange('home')}
          />
        );
      default:
        return <LoginPageApp onNext={() => handlePageChange('home')} />;
    }
  };

  return <>{renderPage()}</>;
}