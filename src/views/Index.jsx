/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import DemoFooter from "components/Footers/DemoFooter.jsx";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.jsx";
import SectionNavbars from "views/index-sections/SectionNavbars.jsx";
import SectionNavigation from "views/index-sections/SectionNavigation.jsx";
import SectionProgress from "views/index-sections/SectionProgress.jsx";
import SectionNotifications from "views/index-sections/SectionNotifications.jsx";
import SectionTypography from "views/index-sections/SectionTypography.jsx";
import SectionJavaScript from "views/index-sections/SectionJavaScript.jsx";
import SectionCarousel from "views/index-sections/SectionCarousel.jsx";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.jsx";
import SectionDark from "views/index-sections/SectionDark.jsx";
import SectionLogin from "views/index-sections/SectionLogin.jsx";
import SectionExamples from "views/index-sections/SectionExamples.jsx";
import SectionDownload from "views/index-sections/SectionDownload.jsx";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      {/* <IndexHeader />
      <ExamplesNavbar />
      <div className="main">
        <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <DemoFooter />
      </div> */}
    </>
  );
}

export default Index;
