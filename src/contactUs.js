import React from "react";
import { useForm, Controller } from "react-hook-form";
import { notification } from "antd";
import './App.css';

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    const sendContact = () => {
     
      setTimeout(() => {
      
        reset({
          firstName: "",
          lastName: "",
          mobileNumber: "",
          email: "",
          message: "",
        });

        notification.success({
          message: "Submitted",
          description: "Your form has been successfully submitted.",
        });
      }, 1000);
    };

    sendContact();
  };

  return (
    <form className="supportForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="outeralign">
        <div className="inneralign">
          <label htmlFor="firstName">First Name</label>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <input {...field} placeholder="Enter your first name" />
            )}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div className="inneralign">
          <label htmlFor="lastName">Last Name</label>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <input {...field} placeholder="Enter your last name" />
            )}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
      </div>

      <br />

      <div className="outeralign">
        <div className="inneralign">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <Controller
            name="mobileNumber"
            control={control}
            rules={{ required: "Mobile number is required" }}
            render={({ field }) => (
              <input {...field} placeholder="Enter your mobile number" />
            )}
          />
          {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
        </div>

        <div className="inneralign">
          <label htmlFor="email">Email</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input {...field} placeholder="Enter your email id" />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
      </div>

      <br />

      <div className="inneralign">
        <label htmlFor="message">Message</label>
        <Controller
          name="message"
          control={control}
          rules={{ required: "Message is required" }}
          render={({ field }) => (
            <textarea {...field} placeholder="Enter your query" />
          )}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <br />

      <button style={{backgroundColor:'rgb(24, 78, 119)',height:'30px'}} type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
