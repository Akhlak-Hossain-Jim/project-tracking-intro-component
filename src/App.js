import React, { useState } from "react";
import { AppBody, AppContainer, AppHeader } from "./style";

function App() {
  const [HamState, setHamState] = useState(false);
  return (
    <AppContainer>
      <AppHeader>
        <div className="brand_logo">
          <img src="/images/logo.svg" alt="brand logo" />
        </div>
        <div className="navigation_menu">
          <div className="ham_menu" onClick={() => setHamState(!HamState)}>
            {HamState ? (
              <img src="/images/icon-close.svg" alt="opened" />
            ) : (
              <img src="/images/icon-hamburger.svg" alt="closed" />
            )}
          </div>
          <nav className={HamState ? "opened" : ""}>
            <a href="/PRODUCT" className="nav_link">
              PRODUCT
            </a>
            <a href="/FEATURES" className="nav_link">
              FEATURES
            </a>
            <a href="PRICING" className="nav_link">
              PRICING
            </a>
            <span className="nav_link_divider"></span>
            <a href="/login" className="nav_link two">
              LOGIN
            </a>
          </nav>
        </div>
      </AppHeader>
      <AppBody>
        <div className="body__element">
          <div className="body__element_content">
            <div className="body__element_content__line1">
              <span>new</span>
              <p>MONDGRAPH DASHBOARD</p>
            </div>
            <div className="body__element_content__lineTitle">
              <h1>POWERFUL INSIGHTS INTO YOUR TEAM</h1>
              <p>Project planning and time tracking for agile teams</p>
            </div>
            <div className="body__element_content__linePreview">
              <button>SCHEDULE A DEMO</button>
              <p>TO SEE A PREVIEW</p>
            </div>
          </div>
        </div>
        <div className="body__element">
          <img src="/images/illustration-devices.svg" alt="" />
        </div>
      </AppBody>
    </AppContainer>
  );
}

export default App;
