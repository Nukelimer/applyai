import { IoBriefcaseOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

const AppFeatures = () => {
  return (
    <div className="pt-32  p-4 md:p-12 lg:p-4">
      <div className="max-w-4xl  mx-auto sm:px-6 lg:px-8">
        <div className="text-center ">
          <h1
            className="text-2xl sm:text-3xl font-bold mb-4 mt-10"
            data-aos="fade-up">
            App Features
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personalized Job Matching */}
          <div
            className="flex flex-col items-center bg-slate-200 rounded-lg shadow-lg p-4 text-center"
            data-aos="fade-up">
            <div className="bg-[#D0CAF9] bg-opacity-50 w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center rounded-xl">
              <IoBriefcaseOutline size={32} color="green" />
            </div>
            
            <h2
              className="text-md sm:text-lg font-semibold mt-2"
              data-aos="fade-up">
              Personalized Job Matching
            </h2>
            <p
              className="text-xs sm:text-sm text-center mt-1"
              data-aos="fade-up">
              Our intelligent algorithm matches you with job opportunities that
              align with your skills, experience, and career goals.
            </p>
          </div>

          {/* Effortless Application Process */}
          <div
            className="flex flex-col items-center bg-slate-200 rounded-lg shadow-lg p-4 text-center"
            data-aos="fade-up">
            <div className="bg-[#D0CAF9] bg-opacity-50 w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center rounded-xl">
              <FaFileInvoice size={32} color="#5724E1" />
            </div>
            <h2
              className="text-md sm:text-lg font-semibold mt-2"
              data-aos="fade-up">
              Effortless Application Process
            </h2>
            <p
              className="text-xs sm:text-sm text-center mt-1"
              data-aos="fade-up">
              Apply to multiple jobs with just a few clicks, saving you time and
              effort.
            </p>
          </div>

          {/* User-Friendly Interface */}
          <div
            className="flex flex-col items-center bg-slate-200 rounded-lg shadow-lg p-4"
            data-aos="fade-up">
            <div className="bg-[#D0CAF9] bg-opacity-50 w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center rounded-xl">
              <MdOutlineComputer size={32} color="#FFD465" />
            </div>
            <h2
              className="text-md sm:text-lg font-semibold mt-2"
              data-aos="fade-up">
              User-Friendly Interface
            </h2>
            <p
              className="text-xs sm:text-sm text-center mt-1"
              data-aos="fade-up">
              Our intuitive interface makes navigating the job search process a
              breeze, even for beginners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeatures;
