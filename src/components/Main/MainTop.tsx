import React from "react";
import { Helmet } from "react-helmet";

interface MainTopProps {
  children?: any;
  pageTitle?: string;
}
export function MainTop({ children, pageTitle }: MainTopProps) {
  return (
    <>
      <Helmet>
        <title>{`Planlife | ${pageTitle}`}</title>
      </Helmet>
      <section className="main--top">
        <div className="main--top__userWelcome">
          <p className="main--top__welcome">
            Hi
            <span className="main--top__name">Name,</span>
          </p>
          <div className="main--top__div">
            <div className="main--top__intro">
              <h2 className="main--top__title">Discover Recipes</h2>
            </div>
            <div className="main--top__search">
              <input
                className="main--top__input"
                type="search"
                placeholder="Search for Recipes, Ingredients, and Tags"
              />
            </div>
          </div>
        </div>
      </section>
      {children}
    </>
  );
}
export default MainTop;
