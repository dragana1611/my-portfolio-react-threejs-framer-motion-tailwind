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
          <p className="w-full mb-10 lg:leading-8 sm:text-justify lg:text-lg text-base p-5">
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
            <div className="flex flex-col gap-5 lg:gap-[20px]">
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
            transition={{ delay: 3, duration: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            className="absolute stroke-yellow"
          >
            <svg width="350px" height="350px" viewBox="0 0 32 32" className="relative  top-10 left-20 lg:scale-150">
              <motion.path
                strokeWidth={1.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 15 }}
                d="M15.1007 15.0272L14.5569 14.5107L15.1007 15.0272ZM15.5562 14.5477L16.1 15.0642H16.1L15.5562 14.5477ZM17.9728 14.2123L17.5987 14.8623H17.5987L17.9728 14.2123ZM19.8833 15.312L19.5092 15.962L19.8833 15.312ZM20.4217 18.7584L20.9655 19.2749L20.4217 18.7584ZM19.0011 20.254L18.4573 19.7375L19.0011 20.254ZM17.6763 20.9631L17.7499 21.7095L17.6763 20.9631ZM7.81536 16.4752L8.35915 15.9587L7.81536 16.4752ZM3.00289 6.96594L2.25397 7.00613L2.25397 7.00613L3.00289 6.96594ZM9.47752 8.50311L10.0213 9.01963H10.0213L9.47752 8.50311ZM9.63424 5.6931L10.2466 5.26012L9.63424 5.6931ZM8.37326 3.90961L7.76086 4.3426V4.3426L8.37326 3.90961ZM5.26145 3.60864L5.80524 4.12516L5.26145 3.60864ZM3.69185 5.26114L3.14806 4.74462L3.14806 4.74462L3.69185 5.26114ZM11.0631 13.0559L11.6069 12.5394L11.0631 13.0559ZM15.6445 15.5437L16.1 15.0642L15.0124 14.0312L14.5569 14.5107L15.6445 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4573 19.7375L19.5449 20.7705L20.9655 19.2749L19.8779 18.2419ZM17.6026 20.2167C16.1676 20.3584 12.4233 20.2375 8.35915 15.9587L7.27157 16.9917C11.7009 21.655 15.9261 21.8895 17.7499 21.7095L17.6026 20.2167ZM8.35915 15.9587C4.48303 11.8778 3.83285 8.43556 3.75181 6.92574L2.25397 7.00613C2.35322 8.85536 3.1384 12.6403 7.27157 16.9917L8.35915 15.9587ZM9.7345 9.32159L10.0213 9.01963L8.93372 7.9866L8.64691 8.28856L9.7345 9.32159ZM10.2466 5.26012L8.98565 3.47663L7.76086 4.3426L9.02185 6.12608L10.2466 5.26012ZM4.71766 3.09213L3.14806 4.74462L4.23564 5.77765L5.80524 4.12516L4.71766 3.09213ZM9.1907 8.80507C8.64691 8.28856 8.64622 8.28929 8.64552 8.29002C8.64528 8.29028 8.64458 8.29102 8.64411 8.29152C8.64316 8.29254 8.64219 8.29357 8.64121 8.29463C8.63924 8.29675 8.6372 8.29896 8.6351 8.30127C8.63091 8.30588 8.62646 8.31087 8.62178 8.31625C8.61243 8.32701 8.60215 8.33931 8.59116 8.3532C8.56918 8.38098 8.54431 8.41512 8.51822 8.45588C8.46591 8.53764 8.40917 8.64531 8.36112 8.78033C8.26342 9.0549 8.21018 9.4185 8.27671 9.87257C8.40742 10.7647 8.99198 11.9644 10.5193 13.5724L11.6069 12.5394C10.1793 11.0363 9.82761 10.1106 9.76086 9.65511C9.72866 9.43536 9.76138 9.31957 9.77432 9.28321C9.78159 9.26277 9.78635 9.25709 9.78169 9.26437C9.77944 9.26789 9.77494 9.27451 9.76738 9.28407C9.76359 9.28885 9.75904 9.29437 9.7536 9.30063C9.75088 9.30375 9.74793 9.30706 9.74476 9.31056C9.74317 9.31231 9.74152 9.3141 9.73981 9.31594C9.73896 9.31686 9.73809 9.31779 9.7372 9.31873C9.73676 9.3192 9.73608 9.31992 9.73586 9.32015C9.73518 9.32087 9.7345 9.32159 9.1907 8.80507ZM10.5193 13.5724C12.0422 15.1757 13.1923 15.806 14.0698 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4022 15.7387 15.4823 15.6819C15.5223 15.6535 15.5556 15.6266 15.5824 15.6031C15.5959 15.5913 15.6077 15.5803 15.618 15.5703C15.6232 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6367 15.5518 15.6387 15.5497C15.6397 15.5487 15.6407 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6431 15.5452C15.6438 15.5444 15.6445 15.5437 15.1007 15.0272C14.5569 14.5107 14.5576 14.51 14.5583 14.5093C14.5585 14.509 14.5592 14.5083 14.5596 14.5078C14.5605 14.5069 14.5614 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5674 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.583 14.4846 14.5885 14.4796 14.5933 14.4754C14.6028 14.467 14.6099 14.4616 14.6145 14.4584C14.6239 14.4517 14.6229 14.454 14.6102 14.459C14.5909 14.4666 14.5 14.4987 14.3103 14.4679C13.9077 14.4025 13.0391 14.0472 11.6069 12.5394L10.5193 13.5724ZM8.98565 3.47663C7.97206 2.04305 5.94384 1.80119 4.71766 3.09213L5.80524 4.12516C6.32808 3.57471 7.24851 3.61795 7.76086 4.3426L8.98565 3.47663ZM3.75181 6.92574C3.73038 6.52644 3.90425 6.12654 4.23564 5.77765L3.14806 4.74462C2.61221 5.30877 2.20493 6.09246 2.25397 7.00613L3.75181 6.92574ZM18.4573 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.7499 21.7095C18.497 21.6357 19.1016 21.2373 19.5449 20.7705L18.4573 19.7375ZM10.0213 9.01963C10.9889 8.00095 11.0574 6.40678 10.2466 5.26012L9.02185 6.12608C9.44399 6.72315 9.37926 7.51753 8.93372 7.9866L10.0213 9.01963ZM19.5092 15.962C20.33 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2704 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8861 13.1113 15.0124 14.0312L16.1 15.0642Z"
              />
            </svg>
          </motion.div>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
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
