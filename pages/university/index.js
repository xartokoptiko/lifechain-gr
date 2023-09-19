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
  Toast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Head from "next/head";
import { Dropdown, Avatar, Grid, User } from "@nextui-org/react";
import Link from "next/link";
import InstructionsText from "../../components/instructions-text";
import useTranslation from "next-translate/useTranslation";
import { sendContactForm } from "../../lib/api";
import { useRouter } from "next/router";
import MobileApp from "../../components/application/mobile-app";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function University() {
  const { t } = useTranslation("common");
  const [currentStep, setCurrentStep] = useState(1);
  const [step, setStep] = useState(1);
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const router = useRouter();
  const [subState, setSubState] = useState({
    message: "",
    email: "",
    loading: false,
  });

  const emailHandler = (e) => {
    let updatedEmail = e.target.value;
    setSubState({ email: updatedEmail });
  };

  const subscribeUser = async (e) => {
    setSubState({
      loading: true,
    });
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({ email: subState.email }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
    });

    const json_res = await res.json();

    setSubState({
      message: json_res.message,
      email: "",
      loading: false,
    });

    toast({
      title: json_res.message,
      status: "success",
      duration: 2000,
      position: "top",
    });

  };

  const { values, isLoading, error } = state;

  const stepContent = [
    {
      title: t("instructions_one_title"),
      text: t("instructions_one_text"),
      imageSrc: t("homepage"),
    },
    {
      title: t("instructions_two_title"),
      text: t("instructions_two_text"),
      imageSrc: t("countdown"),
    },
    {
      title: t("instructions_three_title"),
      text: t("instructions_three_text"),
      imageSrc: t("buttons"),
    },
  ];

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

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

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="flex flex-col w-full">
        {/* START OF HEADER */}
        <div className="flex flex-col bg-gradient-to-br to-redonebg  from-redtwobg via-90%">
          <div>
            <div className="flex flex-row p-8 items-center w-screen">
              <div className="flex flex-row items-center">
                <img src="../../logo.png" className="w-[200px] h-[80px]" />
              </div>
              <div className="flex flex-row items-center ml-14 text-white text-lg font-bold max-sm:hidden">
                <a className="mr-5" onClick={scrollToElementWhat} href="#">
                  {t("menu_what")}
                </a>
                <a className="mr-5" onClick={scrollToElementHow} href="#">
                  {t("menu_how")}
                </a>
                <a className="mr-5" onClick={scrollToElementContact} href="#">
                  {t("menu_contact")}
                </a>
              </div>
              <div className=" flex flex-row flex-1 justify-end">
                <button
                  onClick={scrollToElementApp}
                  className="bg-gradient-to-br to-blueshadow  from-white via-90% rounded-2xl shadow-2xl  p-3 font-bold text-redonebg max-sm:hidden "
                >
                  {t("menu_get")}
                </button>

                <div className=" xl:hidden lg:hidden md:hidden">
                  <Dropdown>
                    <Dropdown.Trigger>
                      <Avatar src="../../menu.png" />
                    </Dropdown.Trigger>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Text onClick={scrollToElementWhat}>
                          {t("menu_what")}
                        </Text>
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <Text onClick={scrollToElementHow}>
                          {t("menu_how")}
                        </Text>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Text onClick={scrollToElementContact}>
                          {t("menu_contact")}
                        </Text>
                      </Dropdown.Item>

                      <Dropdown.Item>
                        <Text onClick={scrollToElementApp}>
                          {t("menu_get")}
                        </Text>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                <div>
                  <Dropdown>
                    <Dropdown.Trigger>
                      <button className=" ml-3 rounded-full p-3 bg-gradient-to-br to-blueshadow  from-white via-90% shadow-2xl ">
                        <p className=" font-extrabold text-redonebg">
                          {t("lang")}
                        </p>
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
                          <h2>Ελληνικά</h2>
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>

          {/* FIRST SECTION */}
          <div
            className="flex flex-row p-10 xl:h-[80vh] shadow-lg shadow-redonebg
                               max-sm:flex-col lg:h-[70vh]
                                               md:h-[50vh]"
          >
            <div
              className="flex flex-col text-center w-1/2 items-center justify-evenly text-3xl font-extrabold text-white
                                                      max-sm:w-full"
            >
              <p className="text-5xl text-white font-extrabold max-sm:mb-10">
                Lifechain University
              </p>
              <div className="flex flex-row w-[300px] h-[10px] rounded-2xl bg-white shadow-lg shadow-white max-sm:mb-10"></div>
              <div className="fjustify-center items-center max-sm:mb-12">
                <p>{t("catch_one")}</p>
                <p>{t("catch_two")}</p>
              </div>
            </div>

            <div
              className="flex flex-col w-1/2 items-center justify-center
                                          max-sm:w-full"
            >
              <p className="text-center text-white text-xl font-extrabold mb-5" >Test the app bellow</p>
              {/* PLACE MOCK UP HERE ! */}
              <MobileApp />
              {/* <img
                src={t("loginpage")}
                className="w-[172px] h-[373px] rounded-xl shadow-2xl shadow-white"
              /> */}
            </div>
          </div>
        </div>

        {/* SECOND SECTION */}

        <div
          id="whatisit"
          className="flex flex-row max-sm:flex-col xl:h-[100vh] w-full bg-gradient-to-br to-blueshadow  from-white via-90%
                                                      lg:h-[80vh]
                                                      md:h-[60vh]
                                                      max-sm:h-[150vh] max-sm:justify-evenly"
        >
          <div className="flex flex-col p-5 items-center justify-evenly w-1/2 max-sm:w-full max-sm:h-1/2 max-sm:justify-evenly">
            <div
              className="flex flex-row p-10 xl:h-[30vh] bg-gradient-to-br to-redonebg  from-redtwobg via-90%
                                            lg:h-[30vh]
                                            md:h-[25vh]
                                            max-sm:h-[20vh]
                rounded-2xl shadow-2xl 
            text-white text-2xl font-extrabold text-center max-sm:text-lg items-center justify-evenly w-full"
            >
              <img
                src="../../warning.png"
                className="w-[64px] h-[64px]
                           max-sm:w-[32px] max-sm:h-[32px]"
              />

              <div className="flex flex-col">
                <p>{t("info_one_one")}</p>
                <p>{t("info_one_two")}</p>
              </div>
            </div>

            <div
              className="flex flex-row p-10 xl:h-[30vh] bg-gradient-to-br to-redonebg  from-redtwobg via-90%
              lg:h-[30vh]
              md:h-[25vh]
              max-sm:h-[20vh]
                rounded-2xl shadow-2xl 
            text-white text-2xl font-extrabold text-center max-sm:text-lg items-center justify-evenly w-full"
            >
              <img
                src="../../phone.png"
                className="w-[64px] h-[64px]
                                                      max-sm:w-[32px] max-sm:h-[32px]"
              />

              <div className="flex flex-col">
                <p>{t("info_two_one")}</p>
                <p>{t("info_two_two")}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-5 items-center justify-evenly w-1/2 max-sm:w-full max-sm:h-1/2">
            <div
              className="flex flex-row p-10 xl:h-[30vh]  bg-gradient-to-br to-redonebg  from-redtwobg via-90%
              lg:h-[30vh]
                                            md:h-[25vh]
                                            max-sm:h-[20vh]
                rounded-2xl shadow-2xl 
            text-white text-2xl font-extrabold text-center max-sm:text-lg items-center justify-evenly w-full"
            >
              <img
                src="../../map.png"
                className="w-[64px] h-[64px]
                                                      max-sm:w-[32px] max-sm:h-[32px]"
              />

              <div className="flex flex-col">
                <p>{t("info_three_one")}</p>
                <p>{t("info_three_two")}</p>
              </div>
            </div>

            <div
              className="flex flex-row p-10 xl:h-[30vh]  bg-gradient-to-br to-redonebg  from-redtwobg via-90%
              lg:h-[30vh]
                                            md:h-[25vh]
                                            max-sm:h-[20vh]
                rounded-2xl shadow-2xl 
            text-white text-2xl font-extrabold text-center max-sm:text-lg items-center justify-evenly w-full"
            >
              <img
                src="../../help.png"
                className="w-[64px] h-[64px]
                                                      max-sm:w-[32px] max-sm:h-[32px]"
              />

              <div className="flex flex-col">
                <p>{t("info_four_one")}</p>
                <p>{t("info_four_two")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* THIRD SECTION */}

        <div
          className="flex flex-col xl:h-[90vh] p-10
                                      lg:h-[95vh]
                                      md:h-[50vh]"
        >
          <p className="text-4xl font-extrabold text-redonebg text-center mb-12">
            {t("works")}
          </p>
          <div
            id="howitworks"
            className="flex flex-row h-full justify-evenly
                               max-sm:flex-col"
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={stepContent[step - 1].imageSrc}
                className="xl:w-[172px] xl:h-[373px] rounded-xl shadow-2xl shadow-redonebg
                           lg:w-[172px] lg:h-[373px]
                           md:w-[155px] md:h-[300px]
                           max-sm:w-[155px] max-sm:h-[300px] max-sm:mb-12"
              />
            </div>

            <div className="flex flex-col justify-center items-center text-center">
              <InstructionsText
                title={stepContent[step - 1].title}
                text={stepContent[step - 1].text}
              />
            </div>

            <div className="flex flex-col justify-evenly items-center text-2xl text-white font-extrabold">
              <button
                className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
                onClick={() => handleStepChange(1)}
              >
                {t("step_one")}
              </button>
              <button
                className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
                onClick={() => handleStepChange(2)}
              >
                {t("step_two")}
              </button>
              <button
                className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
                onClick={() => handleStepChange(3)}
              >
                {t("step_three")}
              </button>
            </div>
          </div>
        </div>

        {/* FOURTH SECTION */}

        <div
          id="gettheapp"
          className="flex flex-col bg-gradient-to-br to-redonebg  from-redtwobg via-90% p-10 items-center
                                      "
        >
          <p className="text-4xl font-extrabold text-white text-center mb-10 max-sm:text-2xl">
            {t("soon")}
          </p>
          <div
            className="flex flex-row xl:w-[100vh] justify-evenly
                                        lg:w-[100vh]
                                        md:w-[50vh]
                                        max-sm:w-[40vh]"
          >
            <div className="flex flex-row w-fit text-xl font-extrabold text-white items-center">
              <img
                src="../../google-play.png"
                className="w-[64px] h-[64pxpx]
                           max-sm:w-[32px] max-sm:h-[32px] "
              />
              <p className="text-xl ml-4">Google play</p>
            </div>

            <div className="flex flex-row w-fit text-xl font-extrabold text-white items-center">
              <img
                src="../../app-store.png"
                className="w-[64px] h-[64pxpx]
                              max-sm:w-[32px] max-sm:h-[32px]"
              />
              <p className="text-xl ml-4">App store</p>
            </div>
          </div>
          <Container maxW="700px" mt={8} textAlign="center" textColor="white">
            <Heading mb={3}>{t("sub")}</Heading>
            <FormLabel mb={4} textAlign="center">
              {t("not")}
            </FormLabel>

            <FormControl mb={4}>
              <Input
                type="email"
                placeholder="Email"
                textColor="white"
                _placeholder={{ color: "white" }}
                value={subState.email}
                onChange={emailHandler}
              />
            </FormControl>

            <Button
              alignSelf="start"
              variant="outline"
              colorScheme="white"
              isLoading={subState.loading}
              onClick={subscribeUser}
            >
              {t("submit")}
            </Button>
          </Container>
        </div>

        {/* CONDACT US SECTION */}

        <div id="contactus" className="flex flex-col">
          <Container maxW="500px" mt={12} id="contactus">
            <Heading className="mb-5">{t("menu_contact")}</Heading>
            <div
              className="xl:w-[40vh] xl:h-[2vh] bg-dark-blue rounded-3xl mb-5
                        lg:w-[40vh] lg:h-[2vh]
                        md:w-[20vh] md:h-[1vh]
                        max-sm:w-[30vh] max-sm:h-[1vh]"
            ></div>
            <FormLabel>{t("free")}</FormLabel>
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
              <FormLabel>{t("name")}</FormLabel>
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
              <FormLabel>{t("subject")}</FormLabel>
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
              <FormLabel>{t("message")}</FormLabel>
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
              {t("submit")}
            </Button>
          </Container>
        </div>

        {/* FOOTER SECTION */}
        <div
          className="flex flex-col items-center justify-evenly text-center text-white xl:h-[50vh] text-xs font-extrabold
        bg-gradient-to-br to-redonebg  from-redtwobg via-90%                        lg:h-[40vh]
                                                                                        md:h-[20vh]
                                                                                        max-sm:h-[30vh]"
        >
          <p>Lifechain university</p>
          <p>Email : info@lifechain.gr</p>
          <p>
            {t("open")}{" "}
            <a href="https://github.com/xartokoptiko/lifechain-gr">github</a>
          </p>
          <div
            className="flex flex-row justify-evenly w-[35vh] align-middle items-center
                                                    max-sm:w-[30vh]
                                                    lg:w-[35vh]
                                                    md:w-[20vh]"
          >
            <img src="../../linkedin.png" className="w-[32px] h-[32px]" />
            <img src="../../twitter.png" className="w-[32px] h-[32px]" />
            <img src="../../facebook.png" className="w-[32px] h-[32px]" />
            <a href="https://github.com/xartokoptiko/lifechain-gr">
              <img src="../../github.png" className="w-[32px] h-[32px]" />
            </a>
          </div>
          <p><a href="http://localhost:3000/privacy">Privacy</a> {"  "} | {"  "} <a href="http://localhost:3000/tou" >Terms Of use</a></p>
          <p>{t("right")}</p>
        </div>
      </main>
    </>
  );
}
