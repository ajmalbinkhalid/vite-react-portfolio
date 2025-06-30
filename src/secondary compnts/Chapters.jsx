// import React from 'react';

// const Chapters = () => {
//   return (
//     <div className="fontFam px-4 py-10 max-w-screen-xl mx-auto">
//       {/* Section Title */}
//       <div className="text-center mb-10">
//         <div className="flex justify-center items-center gap-2 sm:gap-4">
//           <div className="text-base sm:text-2xl text-neutral-500">{'<h3>'}</div>
//           <div className="text-4xl sm:text-6xl font-bold text-white">Chapters</div>
//           <div className="text-base sm:text-2xl text-neutral-500">{'</h3>'}</div>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
//         {/* Card 1 */}
//         <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md hover:bg-red-800
//                         transition-all duration-300 flex flex-col justify-between w-full min-h-72">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-2">Techolas Technologies</h3>
//           <p className="text-sm sm:text-base leading-relaxed mb-4">
//             Developed simple responsive websites using HTML, CSS, and JavaScript.
//             Built projects with React and Tailwind using component-based architecture.
//           </p>
//           <p className="text-sm sm:text-base font-medium">01/2025 - PRESENT</p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md hover:bg-red-800
//                         transition-all duration-300 flex flex-col justify-between w-full min-h-72">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-2">A M Motors</h3>
//           <p className="text-sm sm:text-base leading-relaxed mb-4">
//             Managed branch-level financial records, billing, and reporting.
//             Used Excel and accounting software to track transactions.
//             Ensured accuracy and timely reporting to senior management.
//           </p>
//           <p className="text-sm sm:text-base font-medium">12/2023 - 12/2024</p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md hover:bg-red-800
//                         transition-all duration-300 flex flex-col justify-between w-full min-h-72">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-2">Sree Sankaracharya</h3>
//           <p className="text-sm sm:text-base leading-relaxed mb-4">
//             Assisted with data entry, maintaining financial records, and preparing reports.
//             Supported bookkeeping tasks like invoicing, reconciliations, and tax preparation.
//           </p>
//           <p className="text-sm sm:text-base font-medium">11/2022 - 11/2022</p>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-neutral-800 text-white rounded-xl p-6 shadow-md hover:bg-red-800
//                         transition-all duration-300 flex flex-col justify-between w-full min-h-72">
//           <h3 className="text-xl sm:text-2xl font-semibold mb-2">SMI Arts College</h3>
//           <p className="text-sm sm:text-base leading-relaxed mb-4">
//             Project: Impact of e-commerce on traditional retail.
//             Studied how eCommerce disrupted traditional models and how retailers can adapt.
//           </p>
//           <p className="text-sm sm:text-base font-medium">07/2019 - 07/2022</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chapters;
import React from 'react';
import ChapterCard from '../props compnts/ChapterCard';

const Chapters = () => {
  return (
    <div className="fontFam px-6 py-10 max-w-screen-lg mx-auto space-y-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">My Chapters</h2>
      </div>

      <ChapterCard
        logo="/images/techolas-logo.png"
        company="Techolas Technologies"
        role="Frontend Trainee"
        description="Developed responsive web apps with React and Tailwind. Built reusable UI components and followed clean coding practices."
        duration="Jan 2025 – Present"
      />

      <ChapterCard
        logo="/images/am-motors-logo.png"
        company="A M Motors"
        role="Accounts Executive"
        description="Managed financial records, handled billing systems, and prepared monthly reports for management review."
        duration="Dec 2023 – Dec 2024"
      />
      <ChapterCard
        logo="/images/am-motors-logo.png"
        company="A M Motors"
        role="Accounts Executive"
        description="Managed financial records, handled billing systems, and prepared monthly reports for management review."
        duration="Dec 2023 – Dec 2024"
      />
      <ChapterCard
        logo="/images/am-motors-logo.png"
        company="A M Motors"
        role="Accounts Executive"
        description="Managed financial records, handled billing systems, and prepared monthly reports for management review."
        duration="Dec 2023 – Dec 2024"
      />

      {/* Add more ChapterCard components here */}
    </div>
  );
};

export default Chapters;
