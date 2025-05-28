// ep-04
      // import React from 'react';
      // import ReactDOM from 'react-dom/client';

      const Header = () => {
        return (
          <div className="header">
            <div className="logo-container">
              <img className="logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8PdTwWntckIGEB8nLe5GYBqJbrFLL1CjZA&s"
                alt="Logo"
              />
            </div>
            <div className="nav-item">
              <ul>
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
        );
      };

      const AppLayout = () => {
        return (
          <div className="app">
            <Header />
          </div>
        );
      };

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(<AppLayout />);