import React from "react";
import { useNavigate } from "react-router-dom";

import { loader } from "../assets";
import FundCard from "./FundCard";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign)=>{
    navigate(`/campaign-details/${campaign.title}`,{state:campaign})
  }

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title}({campaigns.length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && (
          <img
            src={loader}
            alt="loader"
            className="w-[10px] h-[10px] object-contain "
          />
        )}
        {!isLoading && campaigns.length === 0 && (
          <p className="fornt-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaign yet.
          </p>
        )}
        {!isLoading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <FundCard
              key={campaigns.id}
              {...campaign}
              handleClick={() => hadleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
