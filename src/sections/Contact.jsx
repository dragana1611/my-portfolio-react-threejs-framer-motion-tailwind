/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Buttons from "../components/Buttons";
import InsightCard from "../components/InsightCard";
import { insights } from "../data/data";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const serviceId = "service_pinb11i";
    const templateId = "template_eg05wml";
    const publicKey = "iCDtBguqdkseD6nb_";

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Dragana",
      subject: data.subject,
      message: data.message,
    };
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      form.current.reset();

      // alert("email successfully sent check inbox");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className='section relative'>
      <div>
        <p className='text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline'>
          Contact
        </p>
        <p className='mt-10'>I have got just what you need</p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='w-full h-full lg:h-screen flex flex-col lg:flex-row justify-between items-center gap-6 py-10 md:py-16 mx-auto mt-14 px-2 md:px-4'
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className='w-full h-full flex flex-col justify-start p-4 rounded-[32px] relative border-[1px] border-[#6A6A6A]'
        >
          <p className='w-full mb-10 lg:leading-8 text-justify lg:text-lg text-base p-5'>
            You are looking for a quality developer who is efficient, meticulous
            and skillful? You want a broadly communicative co-worker who fits
            the team on professional, drive dynamics and human level? The one
            who is reliable, dedicated, alert, concentrated and easy to
            collaborate with? I will be glad to work with you!
          </p>
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={"w-full last:mx-auto flex flex-col justify-between"}
          >
            <div className='flex flex-col gap-5 lg:gap-[20px]'>
              {insights.map((item, index) => (
                <InsightCard
                  key={`insight-${index}`}
                  {...item}
                  index={index + 1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className='relative w-full h-full flex flex-col justify-center'
        >
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className='w-full h-full lg:h-screen flex flex-col justify-between items-centar gap-2 mt-10 lg:mt-0'
          >
            <div className='w-full flex flex-col md:flex-row justify-between gap-3'>
              <input
                type='text'
                defaultValue=''
                {...register("name", { required: true })}
                className='contactInput w-full md:basis-1/2'
                placeholder='Name'
              />
              {errors.name && <span>This field is required</span>}
              <input
                type='email'
                defaultValue=''
                {...register("email", { required: true })}
                className='contactInput w-full md:basis-1/2'
                placeholder='Email'
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <input
              type='text'
              defaultValue=''
              {...register("subject")}
              className='contactInput'
              placeholder='Subject'
            />
            <textarea
              className='contactInput h-auto lg:h-[20rem]'
              defaultValue=''
              {...register("message", { required: true })}
              placeholder='Message'
            />
            {errors.message && <span>This field is required</span>}
            <Buttons type={"submit"} name={"Submit"} />
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
