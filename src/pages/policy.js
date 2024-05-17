// import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
// import TeamOne from "@/components/TeamOne/TeamOne";
// import BeTerms from "@/components/Links/Terms";
// import Link from "next/link";
import React from "react";
import BePolicy from "@/components/Links/policy";

const Policy = () => {
  return (
   
    <Layout pageTitle="Privacy Policy">
        <PageHeader pageTitle="Privacy Policy" />
       
         <BePolicy/>
    </Layout>
  );
};

export default Policy;
