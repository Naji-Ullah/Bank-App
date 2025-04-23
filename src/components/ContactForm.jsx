import React, { useState, useRef } from "react";
import FormInput from "../components/FormInput";
import styles from "../style";
import { complex, motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm({ scaleUpVariants }) {
  const form = useRef();
  const [hasBeenSent, SetHasBeenSent] = useState(false);
  const [messageFeedback, SetMessageFeedback] = useState("");
  const [isLoading, SetIsLoading] = useState(false);

  const [values, setValues] = useState({
    username: "",
    email: "",
    textarea: "",
  });

  const inputs = [
    {
      id: 1,
      name: "user_name",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "user_email",
      type: "email",
      placeholder: "your@email.com",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "message",
      type: "textarea",
      placeholder: "Write your message here",
      label: "Message",
      rows: 10,
      required: false,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const updateFeedback = (text) => {
    return text === "OK"
      ? "Thank you for contacting us!"
      : "Something went wrong! Please refresh the page and try again.";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    SetIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          SetMessageFeedback(updateFeedback(result.text));
          SetHasBeenSent(true);
          console.log('Success, Emial Sent Successfully');
        },
        (error) => {
          SetMessageFeedback(updateFeedback(error.text));
          SetHasBeenSent(true);
          console.log('Error, Failed to Send Email');
        }
      );
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-black via-gray-800 to-black px-4 py-10 sm:px-8 md:px-12 lg:px-16" section id="Contact">
      <motion.section
        className="w-full max-w-7xl bg-[#0e0e0e] rounded-xl shadow-[0px_2px_12px_rgba(255,221,51,0.5)] p-6 sm:p-10"
        variants={scaleUpVariants}
        initial={scaleUpVariants.hidden}
        whileInView={scaleUpVariants.whileInView}
        viewport={{ once: true }}
      >
        <div className="flex flex-col w-full">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-50 inline-block text-transparent bg-clip-text mb-2" style={{ fontFamily: "'Special Gothic Expanded One', sans-serif" }}>
            Manage your finance with us!
          </h2>

          <p className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {!hasBeenSent ? (
            <div className="w-full">
              <form ref={form} onSubmit={sendEmail} className="my-5 w-full">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-8 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-50 text-black py-2 px-6 rounded-full hover:from-yellow-700 hover:to-yellow-300 transition duration-300 w-full sm:w-auto"
                >
                  {isLoading ? "Sending..." : "Contact Us"}
                </button>
              </form>

              <h4 className="font-medium font-poppins text-gray-200 text-center sm:text-left">
                By contacting us you are agreeing to our{" "}
                <span className="cursor-pointer text-yellow-800">
                  Terms and Conditions
                </span>
              </h4>
            </div>
          ) : (
            <h4 className="font-poppins font-semibold text-[18px] sm:text-[20px] leading-[30px] text-gray-200 mt-6 text-center">
              {messageFeedback}
            </h4>
          )}
        </div>
      </motion.section>
    </div>
  );
}
