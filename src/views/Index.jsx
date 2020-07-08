
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
// import IndexHeader from "components/Headers/IndexHeader.jsx";
import SlideHeader from "components/Headers/SlideHeader.jsx";
// import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
// import DemoFooter from "components/Footers/DemoFooter.jsx";
// import SectionButtons from "views/index-sections/SectionButtons.jsx";
// import SectionNavbars from "views/index-sections/SectionNavbars.jsx";
// import SectionNavigation from "views/index-sections/SectionNavigation.jsx";
// import SectionProgress from "views/index-sections/SectionProgress.jsx";
// import SectionNotifications from "views/index-sections/SectionNotifications.jsx";
// import SectionTypography from "views/index-sections/SectionTypography.jsx";
// import SectionJavaScript from "views/index-sections/SectionJavaScript.jsx";
// import SectionCarousel from "views/index-sections/SectionCarousel.jsx";
// import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.jsx";
// import SectionDark from "views/index-sections/SectionDark.jsx";
// import SectionLogin from "views/index-sections/SectionLogin.jsx";
// import SectionExamples from "views/index-sections/SectionExamples.jsx";
// import SectionDownload from "views/index-sections/SectionDownload.jsx";

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
      {/* IndexNavber ทำงาเมื่อเลื่อนลง */}
      {/* <IndexHeader /> */}
      <SlideHeader />
      {/* <ExamplesNavbar /> */}
      <div className="main">
        {/* <SectionButtons /> */}
        {/* <SectionNavbars /> */}
        {/* <SectionNavigation /> */}
        {/* <SectionProgress /> */}
        {/* <SectionNotifications /> */}
        {/* <SectionTypography /> */}
        {/* <SectionJavaScript /> */}
        {/* <SectionCarousel /> */}
        {/* <SectionNucleoIconss /> */}
        {/* <SectionDark /> */}
        {/* <SectionLogin /> */}
        {/* <SectionExamples /> */}
        {/* <SectionDownload /> */}
        {/* <DemoFooter /> */}
      </div>
    </>
  );
}

export default Index;
