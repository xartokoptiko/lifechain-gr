import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Heading,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import InstructionsText from "../components/instructions-text";
import { useState } from "react";
import { sendContactForm } from "../../lib/api";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Dropdown, Avatar, Grid, User } from "@nextui-org/react";
import Loginpage from "../svg/loginpage.svg"
import Homepage from "../svg/homepage.svg"
import Healthalert from "../svg/healthalert.svg"
import Docs from "../svg/docs.svg"
import ContactPhone from "../svg/contact.svg"
import ContactDesktop from "../svg/contactdesktop.svg"
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function University() {
  const {t} = useTranslation('common');
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const router = useRouter();

  const [refOne, inViewSectionOne] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of element visibility required to trigger the animation
  });

  const [refTwo, inViewSectionTwo] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of element visibility required to trigger the animation
  });

  const [refThree, inViewSectionThree] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.8, // Percentage of element visibility required to trigger the animation
  });

  const [refFour, inViewSectionFour] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Percentage of element visibility required to trigger the animation
  });

  const [refFive, inViewSectionFIve] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Percentage of element visibility required to trigger the animation
  });

  const scroll2El = (elID) => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: "smooth",
    });
  };

  const scrollToElementWhat = (e) => {
    setTimeout(() => {
      scroll2El("whatisit");
    }, 100);
  };

  const scrollToElementHow = (e) => {
    setTimeout(() => {
      scroll2El("howitworks");
    }, 100);
  };

  const scrollToElementContact = (e) => {
    setTimeout(() => {
      scroll2El("contactus");
    }, 100);
  };

  const scrollToElementApp = (e) => {
    setTimeout(() => {
      scroll2El("gettheapp");
    }, 100);
  };

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <main className="flex flex-col bg-dark-blue">
      {/* ######################## Header ######################## */}

      <div>
        <div
          className="flex p-3 w-screen xl:h-[15vh] bg-yellow
                             lg:h-[10vh]
                             md:h-[10vh] md:text-sm"
        >
          <div
            className="flex flex-row w-screen items-center justify-end text-dark-blue font-extrabold mr-5
                            md:mr-5"
          >
            <a
              href="#"
              className="mr-5 max-sm:hidden "
              onClick={scrollToElementWhat}
            >
              {t('menu_what')}
            </a>
            <a
              href="#"
              className="mr-5 max-sm:hidden"
              onClick={scrollToElementHow}
            >
              {t('menu_how')}
            </a>
            <a
              href="#"
              className="mr-5 max-sm:hidden"
              onClick={scrollToElementContact}
            >
              {t('menu_contact')}
            </a>
            <div
              className="flex flex-row lg:w-[40vh]
                                          md:w-[20vh]
                                          max-sm:hidden"
            >
              <a
                href="#"
                onClick={scrollToElementApp}
                className="p-3 text-center mr-5 w-1/2 bg-dark-blue rounded-3xl text-yellow max-sm:hidden"
              >
                <p>{t('menu_get')}</p>
              </a>
            </div>

            <div>
              <Dropdown>
                <Dropdown.Trigger>
                  <button className=" mr-3 rounded-full p-3 bg-dark-blue">
                    <p className=" text-yellow">{t('lang')}</p>
                  </button>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item>
                  <Link href="/" locale="en">
                    <h2>English</h2>
                  </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link href="/" locale="gr">
                      <h2>Ελληνικα</h2>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className=" xl:hidden lg:hidden md:hidden">
              <Dropdown>
                <Dropdown.Trigger>
                  <Avatar className="bg-yellow" src="menu.png" />
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Text onClick={scrollToElementWhat}>{t('menu_what')}</Text>
                  </Dropdown.Item>

                  <Dropdown.Item >
                    <Text onClick={scrollToElementHow}>{t('menu_how')}</Text>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Text onClick={scrollToElementContact}>{t('menu_contact')}</Text>
                  </Dropdown.Item>

                  <Dropdown.Item >
                    <Text onClick={scrollToElementApp}>{t('menu_get')}</Text>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-yellow">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      {/* ######################## End of Header ######################## */}

      {/* ######################## First section ######################## */}
      <div
        className="flex xl:flex-row w-full xl:h-[80vh]
                           lg:flex-row     lg:h-[60vh]
                           md:flex-row     md:h-[40vh]
                           max-sm:flex-col max-sm:min-h-screen "
      >
        <div
          className="flex flex-col w-1/2 justify-center p-10
                            max-sm:w-full"
        >
          <div className="flex flex-col w-full h-1/2 max-sm:mb-3" ref={refOne}>
            {inViewSectionOne && (
              <motion.div
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >

                <div className="mr-4 ml-4 max-sm:mb-3">
                  <div
                    className="flex flex-col xl:text-3xl w-full items-center font-extrabold text-yellow
                                         lg:text-2xl
                                         md:text-xl
                                         max-sm:text-xl"
                  >
                    <p className="mb-5">Smart Alert university</p>
                    <div
                      className="flex xl:w-[50vh] xl:h-[2vh] bg-yellow rounded-3xl mb-16
                                  lg:w-[50vh] lg:h-[2vh]
                                  md:w-[25vh] md:h-[1vh]
                                  max-sm:w-[30vh] max-sm:h-[1vh]"
                    ></div>
                    <div
                  className="text-center xl:text-3xl text-yellow font-extrabold
                                     lg:text-2xl
                                     md:text-xl
                                     max-sm:text-xl"
                >
                  <p>{t('catch_one')}</p>
                  <p>{t('catch_two')}</p>
                </div>
                  </div>
                </div>

              </motion.div>
            )}
          </div>

          <div
            className="flex flex-row justify-center items-center w-full h-1/2"
            ref={refOne}
          >
            {inViewSectionOne && (
              <motion.div
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <img
                    src="uniLogo.png"
                    className="xl:w-[150px] xl:h-[150px]
                           lg:w-[150px] lg:h-[150px]
                           md:w-[120px] md:h-[120px]
                           max-sm:w-[100px] max-sm:h-[100px] max-sm:mb-3"
                  />
              </motion.div>
            )}
          </div>
        </div>
        <div
          ref={refOne}
          className="flex w-1/2 justify-center items-center
                        max-sm:w-full"
        >
          {inViewSectionOne && (
            <motion.div
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Final state
              transition={{ duration: 1 }} // Animation duration
            >
              <Loginpage
                className="xl:w-[70vh] xl:h-[69vh]
                                   lg:w-[55vh] lg:h-[53vh]
                                   md:w-[40vh] md:h-[35vh]"
              />
            </motion.div>
          )}
        </div>
      </div>
      {/* ######################## Second section ######################## */}
      <div
        className="flex flex-col w-full xl:h-[80vh] bg-yellow
                                        lg:h-[80vh]
                                        md:h-[55vh]
                                        max-sm:h-[70vh]"
      >
        <div className="custom-shape-divider-top-1689445558">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="flex h-full flex-col p-10" id="whatisit" ref={refTwo}>
          <div className="flex flex-raw w-full justify-start h-1/3">
            {inViewSectionTwo && (
              <motion.div
                initial={{ opacity: 0, x: -20 }} // Initial state
                animate={{ opacity: 1, x: 10 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <div className="flex flex-raw items-center">
                  <div
                    className="flex flex-col xl:text-3xl mr-6 text-left text-dark-blue font-extrabold
                                         lg:text-2xl
                                         md:text-2xl"
                  >
                    <p>{t('info_one_one')}</p>
                    <p className="mb-5">{t('info_one_two')}</p>
                    <div
                      className="flex xl:w-[60vh] xl:h-[2vh] rounded-3xl bg-dark-blue
                                  lg:w-[50vh] lg:h-[2vh]
                                  md:w-[28vh] md:h-[1vh]
                                  max-sm:w-[25vh] max-sm:h-[1vh]"
                    ></div>
                  </div>
                  <img
                    src="red-cross.png"
                    className="xl:w-[64px] xl:h-[64px] rotate-12
                                       lg:w-[64px] lg:h-[64px]
                                       md:w-[64px] md:h-[64px]
                                       max-sm:w-[42px] max-sm:h-[42px]"
                  />
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex flex-row w-full justify-end h-1/3">
            {inViewSectionTwo && (
              <motion.div
                initial={{ opacity: 0, x: 30 }} // Initial state
                animate={{ opacity: 1, x: 10 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <div className="flex flex-raw items-center">
                  <img
                    src="warning.png"
                    className="xl:w-[64px] xl:h-[64px] rotate-12
                                       lg:w-[64px] lg:h-[64px]
                                       md:w-[64px] md:h-[64px]
                                       max-sm:w-[42px] max-sm:h-[42px]"
                  />
                  <div
                    className="flex flex-col xl:text-3xl text-right text-dark-blue font-extrabold
                                         lg:text-2xl
                                         md:text-2xl"
                  >
                    <p>{t('info_two_one')}</p>
                    <p className="mb-5">{t('info_two_two')}</p>
                    <div
                      className="flex xl:w-[60vh] xl:h-[2vh] rounded-3xl bg-dark-blue
                                  lg:w-[50vh] lg:h-[2vh]
                                  md:w-[28vh] md:h-[1vh]
                                  max-sm:w-[25vh] max-sm:h-[1vh]"
                    ></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex flex-row w-full justify-start h-1/3">
            {inViewSectionTwo && (
              <motion.div
                initial={{ opacity: 0, x: -20 }} // Initial state
                animate={{ opacity: 1, x: 10 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <div className="flex flex-raw items-center">
                  <div
                    className="flex flex-col xl:text-3xl mr-6 text-left text-dark-blue font-extrabold
                                         lg:text-2xl
                                         md:text-2xl"
                  >
                    <p>{t('info_three_one')}</p>
                    <p className="mb-5">{t('info_three_two')}</p>
                    <div
                      className="flex xl:w-[60vh] xl:h-[2vh] rounded-3xl bg-dark-blue
                                  lg:w-[50vh] lg:h-[2vh]
                                  md:w-[28vh] md:h-[1vh]
                                  max-sm:w-[25vh] max-sm:h-[1vh]"
                    ></div>
                  </div>
                  <img
                    src="map.png"
                    className="xl:w-[64px] xl:h-[64px] rotate-12
                                       lg:w-[64px] lg:h-[64px]
                                       md:w-[64px] md:h-[64px]
                                       max-sm:w-[42px] max-sm:h-[42px]"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="custom-shape-divider-bottom-1690065140">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      {/* ######################## Third section ######################## */}

      <div
        id="howitworks"
        className="flex flex-col xl:h-[105vh] bg-white p-10
                                    lg:h-[95vh]
                                    md:h-[60vh]"
      >
        <div className="flex flex-col text-dark-blue text-3xl font-extrabold">
          <div className="flex flex-col self-center mt-10 mb-5" ref={refThree}>
            {inViewSectionThree && (
              <motion.div
                initial={{ opacity: 0, y: 30 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <p className="mb-5">{t('works')}</p>
              </motion.div>
            )}
          </div>

        </div>

        <div
          className="flex flex-row w-full
                             max-sm:flex-col"
        >
          {inViewSectionThree && (
            <motion.div
              className="flex flex-col w-1/2 text-black justify-evenly xl:items-center
              lg:items-center
              max-sm:w-full"
              initial={{ opacity: 0, x: -20 }} // Initial state
              animate={{ opacity: 1, x: 10 }} // Final state
              transition={{ duration: 1 }} // Animation duration
            >
              <InstructionsText
                title={t('instructions_one_title')}
                text={t('instructions_one_text')}
              />
              <InstructionsText
                title={t('instructions_two_title')}
                text={t('instructions_two_text')}
              />
            </motion.div>
          )}

          <div
            className="flex flex-col w-1/2 items-center
                                        max-sm:w-full"
          >
            <Homepage
              className="xl:w-[60vh] xl:h-[60vh]
                                                   lg:w-[45vh] lg:h-[45vh]
                                                   md:w-[25vh] md:h-[25vh]"
            />
          </div>
        </div>
      </div>

      {/* ######################## Fourth section ######################## */}

      <div
        className="flex flex-col xl:h-[80vh] bg-white p-10
                                    lg:h-[70vh]
                                    md:h-[50vh]"
      >
        <div
          ref={refFour}
          className="flex flex-row w-full
                             max-sm:flex-col"
        >
          <div
            className="flex flex-col w-1/2 items-center
                                        max-sm:w-full"
          >
            <Healthalert
              className="xl:w-[60vh] xl:h-[60vh]
                                                   lg:w-[45vh] lg:h-[45vh]
                                                   md:w-[25vh] md:h-[25vh]
                                                   max-sm:mb-5"
            />
          </div>

          {inViewSectionFour && (
            <motion.div
              className="flex flex-col w-1/2 text-black justify-evenly xl:items-center
                                                                          lg:items-center
                                        max-sm:w-full"
              initial={{ opacity: 0, x: 30 }} // Initial state
              animate={{ opacity: 1, x: 10 }} // Final state
              transition={{ duration: 1 }} // Animation duration
            >
              <InstructionsText
                title={t('instructions_three_title')}
                text={t('instructions_three_text')}
              />
              <InstructionsText
                title={t('instructions_four_title')}
                text={t('instructions_four_text')}
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* ######################## fifth section ######################## */}

      <div
        ref={refFive}
        className="flex flex-col bg-white xl:h-screen
                                               lg:h-[80vh]
                                               md:h-[50vh]
                                               max-sm:h-[120vh]"
      >
        <div className="flex flex-col w-full items-center text-center text-3xl text-dark-blue font-extrabold mb-16">
          {inViewSectionFIve && (
            <motion.div
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Final state
              transition={{ duration: 1 }} // Animation duration
            >
              <p
                className="xl:max-w-[90vh] text-center
                        lg:max-w-[70vh]
                        md:max-w-[50vh]
                        max-sm:max-w-[40vh]"
              >
                {t('wait')}
              </p>
            </motion.div>
          )}
        </div>

        <div
          className="flex flex-row w-full
                             max-sm:flex-col"
        >
          <div
            className="flex flex-col w-1/2 items-center
                                          max-sm:w-full max-sm:mb-10"
          >
            {inViewSectionFIve && (
              <motion.div
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }} // Final state
                transition={{ duration: 1 }} // Animation duration
              >
                <Docs
                  className="xl:w-[60vh] xl:h-[60vh]
                                                   lg:w-[45vh] lg:h-[45vh]
                                                   md:w-[30vh] md:h-[30vh]"
                />
              </motion.div>
            )}
          </div>
          {inViewSectionFIve && (
            <motion.div
              className="flex flex-col w-1/2 items-center justify-center text-dark-blue font-extrabold
                                          max-sm:w-full"
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Final state
              transition={{ duration: 1 }} // Animation duration
            >
              <p className="text-3xl mb-24">{t('simple')}</p>
              <p className="text-xl mb-5">{t('instructions')}</p>
              <div
                className="flex bg-yellow xl:w-[30vh] xl:h-[2vh] rounded-3xl mb-5
                                               lg:w-[30vh] lg:h-[2vh]
                                               md:w-[25vh] md:h-[1vh]"
              ></div>
              <a href="/university/docs" className="bg-dark-blue p-3 px-5 rounded-2xl">
                <p className="text-2xl text-yellow">{t('docs')}</p>
              </a>
            </motion.div>
          )}
        </div>
      </div>

      {/* ######################## sixth section ######################## */}

      <div
        id="gettheapp"
        className="flex flex-col bg-white xl:h-screen pt-10 pl-10 pb-10 max-sm:p-10
                                               lg:h-[90vh]
                                               md:h-[50vh]"
      >
        <div className="flex flex-row w-full items-center justify-center mb-10">
          <img
            src="smart-alert-uni-logo.png"
            className="xl:w-[74px] xl:h-[74px]
                           lg:w-[74px] lg:h-[74px]
                           md:w-[64px] md:h-[64px]
                           max-sm:w-[60px] max-sm:h-[60px]"
          />
          <p
            className="text-3xl text-center text-dark-blue font-extrabold
                        max-sm:text-2xl "
          >
            Smart alert University
          </p>
          <img
            src="uniLogo.png"
            className="xl:w-[74px] xl:h-[74px]
                           lg:w-[74px] lg:h-[74px]
                           md:w-[64px] md:h-[64px]
                           max-sm:w-[60px] max-sm:h-[60px]"
          />
        </div>
        <div
          className="flex flex-row
                        max-sm:flex-col"
        >
          <div
            className="flex flex-col w-1/2 items-center
                                        max-sm:w-full"
          >
            <p className="text-3xl font-extrabold text-dark-blue mb-10">
              {t('soon')}
            </p>
            <div
              className="flex xl:w-[30vh] xl:h-[2vh] bg-dark-blue rounded-3xl
                                 lg:w-[30vh] lg:h-[1vh]
                                 md:w-[25vh] md:h-[1vh]"
            ></div>
            <img
              src="google play.png"
              className="xl:w-[60vh] xl:h-[28vh]
                                                  lg:w-[60vh] lg:h-[28vh]
                                                  md:w-[50vh] md:h-[16vh]
                                                  max-sm:w-[40vh] max-sm:h-[17vh]"
            />
            <img
              src="app-store.png"
              className="xl:w-[55vh] xl:h-[18vh]
                 lg:w-[55vh] lg:h-[18vh]
                                                md:w-[45vh] md:h-[10vh]
                                                max-sm:w-[35vh] max-sm:h-[13vh]
                                                max-sm:mb-10"
            />
          </div>

          <div
            className="flex flex-col w-1/2 items-end
                                        max-sm:w-full"
          >
            <ContactDesktop
              
              className="xl:w-[60vh] xl:h-[60vh]
                                                           lg:w-[60vh] lg:h-[60vh]
                                                           md:w-[20vh] md:h-[20vh]
                                                           max-sm:hidden"
            />

            <ContactPhone
              className=" self-center 2xl:hidden xl:hidden lg:hidden md:hidden"
            />
          </div>
        </div>
      </div>

      {/* ######################## contuct us section ######################## */}

      <div className="flex flex-col bg-yellow">
        <div className="custom-shape-divider-top-1690065140">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <Container maxW="500px" mt={12} id="contactus">
          <Heading className="mb-5">{t('menu_contact')}</Heading>
          <div
            className="xl:w-[40vh] xl:h-[2vh] bg-dark-blue rounded-3xl mb-5
                        lg:w-[40vh] lg:h-[2vh]
                        md:w-[20vh] md:h-[1vh]
                        max-sm:w-[30vh] max-sm:h-[1vh]"
          ></div>
          <FormLabel>
            {t('free')}
          </FormLabel>
          {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
          )}

          <FormControl
            isRequired
            isInvalid={touched.name && !values.name}
            mb={5}
          >
            <FormLabel>{t('name')}</FormLabel>
            <Input
              type="text"
              name="name"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.email && !values.email}
            mb={5}
          >
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              errorBorderColor="red.300"
              value={values.email}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            mb={5}
            isRequired
            isInvalid={touched.subject && !values.subject}
          >
            <FormLabel>{t('subject')}</FormLabel>
            <Input
              type="text"
              name="subject"
              errorBorderColor="red.300"
              value={values.subject}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
            mb={5}
          >
            <FormLabel>{t('message')}</FormLabel>
            <Textarea
              name="message"
              rows={4}
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>

          <Button
            mb={10}
            variant="outline"
            colorScheme="blue"
            isLoading={isLoading}
            disabled={
              !values.name ||
              !values.email ||
              !values.subject ||
              !values.message
            }
            onClick={onSubmit}
          >
            {t('submit')}
          </Button>
        </Container>
      </div>

      {/* ######################## Footer section ######################## */}

      <div className="flex flex-col bg-graywhite">
        <div className="custom-shape-divider-bottom-1690080106">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div
          className="flex flex-col text-dark-blue font-extrabold justify-center items-center mt-20
                                                                                                    max-sm:mt-10"
        >
          <p className="mb-10">
            Email : <span className="underline">info@lifechain.gr</span>
          </p>
          <div
            className="flex flex-row justify-evenly xl:w-[60vh] mb-10 align-middle items-center
                                                           lg:w-[60vh]
                                                           md:w-[40vh]
                                                           max-sm:w-[30vh]"
          >
            <p className="text-center">
              {t('open')} {"  "}
              <a className=" underline" href="https://github.com/xartokoptiko/lifechain-gr">
                github
              </a>
            </p>
            <img src="github.png" className="w-[32px] h-[32px]" />
          </div>
          <div
            className="flex flex-row justify-evenly w-[35vh] mb-10 align-middle items-center
                                                           max-sm:w-[30vh]"
          >
            <p>{t('find')}</p>
            <img src="linkedin.png" className="w-[32px] h-[32px]" />
            <img src="twitter.png" className="w-[32px] h-[32px]" />
            <img src="facebook.png" className="w-[32px] h-[32px]" />
          </div>
          <p className="mb-10">{t('right')}</p>
        </div>
      </div>
    </main>
  );
}
