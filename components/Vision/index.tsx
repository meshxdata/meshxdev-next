
import React from "react";
import Vision from "./Vision";
import ProcessSteps from "./ProcessSteps";
import PlatformInfo from "./PlatformInfo";
import FutureVision from "./FutureVision";
import DataProblem from "./DataProblem";
import DataVisualization from "./DataVisualization";
import DataBarriers from "./DataBarriers";
import Footer from "./Footer";

const VisionPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-slate-50">
      <main>
        <Vision />
        <ProcessSteps />
        <PlatformInfo />
        <FutureVision />
        <DataProblem />
        <DataVisualization />
        <DataBarriers />
      </main>
      <Footer />
    </div>
  );
};

export default VisionPage;
