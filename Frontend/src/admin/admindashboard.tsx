import React, { useEffect } from "react";
import  Sidebar  from "../admin/adminslidebar";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="bg-slate-300 flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="bg-slate-800"></div>
      </div>
    </>
  );
};

export default Dashboard;
