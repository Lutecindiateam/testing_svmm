import BecomeVolunteer from "@/components/BecomeVolunteer/BecomeVolunteer";
import ContactPage from "@/components/ContactPage/ContactPage";
import DonationForm from "@/components/FormPage/Form";
import Form from "@/components/FormPage/Form";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";

const Personal = () => {
  return (
    <Layout pageTitle="Donation Form">
      <PageHeader pageTitle="Donation Form" />
      <DonationForm />
      
    </Layout>
  );
};

export default Personal;
