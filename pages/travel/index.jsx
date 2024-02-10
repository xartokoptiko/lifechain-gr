import Head from "next/head";
import React, { useState } from "react";
import InstructionsText from "@/components/instructions-text";
import Link from "next/link";
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
import useTranslation from "next-translate/useTranslation";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Travel() {
  const [step, setStep] = useState(1);
  const [state, setState] = useState(initState);
  const { t } = useTranslation("common");
  const [touched, setTouched] = useState({});
  const toast = useToast();
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

  const stepContent = [
    {
      title: "Press the SOS button",
      text: "press the sos button when you need help",
      imageSrc: "/privateapp/privatehome.png",
    },
    {
      title: "2) Click the Ask for 'Help button'",
      text: "Optionally, you can add more information and upload a photo of the incident",
      imageSrc: "../../countdown_en.png",
    },
    {
      title: "3) Keep calm, help is on the way !",
      text: "As soon as the guide receives your signal, the corresponding message will appear on your screen and he will soon be at your location to help you",
      imageSrc: "../../buttons_en.png",
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
  
  const { values, isLoading, error } = state;
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
    <>
      <Head>
        <title>Lifehain Travel</title>
      </Head>
      <div className=" flex flex-col px-[10] bg-gradient-to-br to-redonebg  from-redtwobg via-90%">
        <div className="flex flex-row px-[40px] py-[30px]">
          <Link href={"/"}>
            <img src="logo.png" className="min-w-[200px] max-w-[200px] min-h-[80px] max-h-[80px] mr-[35px]" />
          </Link>
          <div className="flex flex-row w-full justify-between items-center text-extrabold text-white ">
            <div className="flex flex-row space-x-5 font-extrabold text-white ">
              <a href="#">Info</a>
              <a href="#">How it works</a>
              {/* <a href="#">Travel agences</a> */}
              <a href="#">Contact us</a>
            </div>
            <div className="flex flex-row space-x-4 items-center">
              <p className="px-[25px] cursor-pointer py-[10px] text-redonebg font-extrabold bg-white rounded-lg shadow-white shadow-2xl">
                Get the app
              </p>
              <p className="px-[25px] cursor-pointer py-[10px] text-redonebg font-extrabold bg-white rounded-lg shadow-white shadow-2xl">
                Login
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[25px] py-[40px] w-full">
          <div className="flex flex-col w-1/2 items-center justify-center space-y-10">
            <p className="text-4xl text-white font-extrabold">
              Life Chain Travel
            </p>
            <div className="flex flex-col w-[300px] h-[5px] bg-white shadow-white shadow-3xl rounded-full"></div>
            <p className="text-xl text-white font-extrabold">
              The safe way to travel
            </p>
            <p className="text-xl text-white font-extrabold">
              Every time everywhere
            </p>
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center">
            <img
              src="/privateapp/privatehome.png"
              className="w-[160px] h-[350px] shadow-white shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-row bg-white w-full px-[25px] py-[100px]">
        <div className="flex flex-col w-1/2 items-center justify-center">
          <img
            src="/privateapp/privatemore.png"
            className="w-[160px] h-[350px] shadow-redonebg shadow-2xl rounded-lg"
          />
        </div>
        <div className="flex flex-col w-1/2 items-center">
          <p className="text-3xl text-[#424242] font-extrabold text-center pb-[20px]">
            Enjoy your trip at it's fullest
            <br />
            Feeling safe with
          </p>
          <div className="flex flex-col w-full lg:max-w-[300px] md:max-w-[300px] max-sm:px-[10px] max-sm:items-center">
            <p className="text-lg font-extrabold text-[#424242] mt-[15px] lg:font-bold md:font-bold">
              With just one click
            </p>
            <div className="space-y-3 mt-[25px]">
              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Alert the travel guide for every emergency
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Usefull words and phrases in the local language
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Keep track of the trip schedule
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Explore local hot destinations
                </p>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <img src="/checklist.png" className="w-[25px] h-[25px]" />
                <p className="text-[#424242] font-extrabold lg:font-bold md:font-bold">
                  Embassy and other importand numbers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col xl:py-[50px] px-10
                                      lg:py-[50px]
                                      md:py-[50px]
                                      max-sm:py-[25px]"
      >
        <p className="text-4xl font-extrabold text-redonebg text-center mb-12">
          How it Works
        </p>
        <div
          id="howitworks"
          className="grid grid-cols-3 w-full justify-evenly
                               max-sm:grid-cols-1"
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
              Step 1
            </button>
            <button
              className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
              onClick={() => handleStepChange(2)}
            >
              Step 2
            </button>
            <button
              className="rounded-2xl bg-gradient-to-br to-redonebg from-redtwobg via-90% w-[250px] py-8 max-sm:mb-5"
              onClick={() => handleStepChange(3)}
            >
              Step 2
            </button>
          </div>
        </div>
      </div>
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
        <div
          className="flex flex-col items-center text-center text-white xl:py-[50px] text-xs font-extrabold
        bg-gradient-to-br to-redonebg  from-redtwobg via-90%                        lg:py-[50px]
                                                                                        md:py-[50px]
                                                                                        max-sm:py-[25px]
                                                                                        space-y-[20px]"
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
          <p><a href="/privacy">Privacy</a> {"  "} | {"  "} <a href="/tou" >Terms Of use</a></p>
          <p>{t("right")}</p>
        </div>
    </>
  );
}
