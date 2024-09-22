/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

      alert("✔️ email successfully sent check inbox");
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section name="contact" ref={ref} className="section relative">
      <div>
        <p className="text-2xl lg:text-4xl font-bold border-b-4 border-yellow p-2 inline">
          Contact
        </p>
        <p className="mt-10">I have got just what you need</p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full h-full lg:h-screen flex flex-col lg:flex-row justify-between items-center gap-6 py-10 md:py-16 mx-auto mt-14 px-2 md:px-4"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="w-full h-full flex flex-col justify-start p-4 rounded-[32px] relative border-[1px] border-[#6A6A6A]"
        >
          <p className="w-full xxl:mb-11 lg:mb-7 mb-10 xxl:leading-10 lg:leading-7 sm:text-justify xxl:text-[1.5rem] lg:text-[0.9rem] text-base p-5">
            You are looking for a quality developer who is efficient, meticulous
            and skillful? You want a broadly communicative co-worker who fits
            the team on professional, drive dynamics and human level? The one
            who is reliable, dedicated, alert, concentrated and easy to
            collaborate with? I will be glad to work with you!
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={"w-full last:mx-auto flex flex-col justify-between"}
          >
            <div className="flex flex-col gap-5 lg:gap-[15px]">
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
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 4 }}
            viewport={{ once: false }}
            className="absolute stroke-yellow xs:scale-75 scale-100"
          >
            <svg
              fill="#fdcc49"
              height="350px"
              width="350px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <motion.path
                    strokeWidth={3}
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView && { pathLength: 1 }}
                    transition={{ duration: 5 }}                    
                    d="M442.182,360.727v-26.764c0-19.782-15.127-34.909-34.909-34.909h-6.982c-27.927,0-55.855-4.655-81.455-12.8    c-15.127-4.655-31.418,1.164-40.727,13.964l-10.473,17.455c-3.491,4.655-10.473,6.982-15.127,4.655    c-57.018-30.255-102.4-75.636-132.655-132.655c-2.327-5.818-1.164-11.636,4.655-15.127l17.455-10.473    c13.964-8.146,19.782-25.6,13.964-40.727c-9.309-26.764-12.8-53.527-12.8-81.455v-6.982C143.127,15.127,128,0,108.218,0H58.182    C25.6,0,0,25.6,0,58.182c0,211.782,172.218,384,384,384c13.964,0,27.927-4.655,38.4-15.127c4.655-4.655,5.818-11.636,1.164-16.291    c-4.655-4.655-11.636-5.818-16.291-1.164c-5.818,5.818-15.127,8.145-23.273,8.145C185.018,418.909,23.273,257.164,23.273,58.182    c0-19.782,15.127-34.909,34.909-34.909h11.636v23.273c0,30.255,3.491,60.509,11.636,89.6c1.164,4.655,5.818,8.145,11.636,8.145    c1.164,0,2.327,0,3.491,0c5.818-1.164,9.309-8.145,8.145-13.964c-8.145-26.764-11.636-55.855-11.636-83.782V23.273h15.127    c6.982,0,11.636,4.655,11.636,11.636v6.982c0,30.255,4.655,60.509,13.964,88.436c1.164,4.655,0,10.473-4.655,13.964    l-17.455,10.473c-15.127,9.309-20.945,30.255-12.8,46.545c32.582,60.509,81.455,109.382,141.964,141.964    c16.291,8.145,36.073,3.491,46.545-12.8l10.473-17.455c2.327-4.655,8.145-6.982,13.964-4.655    c29.091,9.309,58.182,13.964,88.436,13.964h6.982c6.982,0,11.636,4.655,11.636,11.636v26.764h-23.273    c-27.927,0-57.018-3.491-83.782-11.636c-5.818-1.164-12.8,2.327-13.964,8.145c-1.164,5.818,2.327,12.8,8.145,13.964    c29.091,8.146,59.345,11.636,89.6,11.636h34.909h5.818c29.091,0,52.364,23.273,52.364,52.364    c0,29.091-23.273,53.527-52.364,53.527H186.182c-29.091,0-52.364-23.273-52.364-52.364c0-41.891-33.745-75.636-75.636-75.636    c-6.982,0-11.636,4.655-11.636,11.636S51.2,384,58.182,384c29.091,0,52.364,23.273,52.364,52.364    c0,41.891,33.745,75.636,75.636,75.636h250.182C478.255,512,512,478.255,512,436.364C512,396.8,481.745,364.218,442.182,360.727z"
                  />
                </g>
              </g>
            </svg>
          </motion.div>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 6, duration: 1 }}
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full lg:h-screen flex flex-col justify-between items-centar gap-2 mt-10 lg:mt-0"
          >
            <div className="w-full flex flex-col md:flex-row justify-between gap-3">
              <input
                type="text"
                defaultValue=""
                {...register("name", { required: true })}
                className="contactInput w-full md:basis-1/2"
                placeholder="Name*"
              />
              {errors.name && (
                <span className="block text-xs text-[#f44646;]">
                  This field is required
                </span>
              )}
              <input
                type="email"
                defaultValue=""
                {...register("email", { required: true })}
                className="contactInput w-full md:basis-1/2"
                placeholder="Email*"
              />
              {errors.email && (
                <span className="block text-xs text-[#f44646;]">
                  This field is required
                </span>
              )}
            </div>
            <input
              type="text"
              defaultValue=""
              {...register("subject")}
              className="contactInput"
              placeholder="Subject"
            />
            <textarea
              className="contactInput h-auto lg:h-[20rem]"
              defaultValue=""
              {...register("message", { required: true })}
              placeholder="Message*"
            />
            {errors.message && (
              <span className="block text-xs text-[#f44646;]">
                This field is required
              </span>
            )}
            <Buttons type={"submit"} name={"Submit"} />
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
