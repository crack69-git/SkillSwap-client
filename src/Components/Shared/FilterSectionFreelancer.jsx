import React from "react";

const FilterSectionFreelancer = () => {
  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      {/* Search Form */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((freelancer) => (
          <FreelancerBrowse key={freelancer._id} data={freelancer} />
        ))}
      </div>
    </div>
  );
};

export default FilterSectionFreelancer;
