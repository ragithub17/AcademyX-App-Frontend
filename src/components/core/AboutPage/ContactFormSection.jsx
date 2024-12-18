import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center border-4 border-richblack-300 p-8 rounded-xl shadow-xl">
        <h1 className="text-center text-4xl font-semibold text-richblack-25">
          Get in Touch
        </h1>
        <p className="text-center text-richblack-200 mt-3">
          We&apos;d love to hear from you, Please fill out this form.
        </p>
      </div>

      <div className="mt-8 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;
