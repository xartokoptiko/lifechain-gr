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
import React, { useState } from "react";
import Head from "next/head";
import Login from "../../svg/login.svg";
import { Dropdown, Avatar, Grid, User } from "@nextui-org/react";
import Link from "next/link";
import InstructionsText from "../../components/instructions-text";
import HomePageNew from "../../svg/homepagenew.svg";
import GuardLogin from "../../svg/guardlogin.svg";
import HowOne from "../../components/how-one";
import HowTwo from "../../components/how-two";
import HowThree from "../../components/how-three";
import useTranslation from "next-translate/useTranslation";

import { sendContactForm } from "../../../lib/api";
import { useRouter } from "next/router";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function NewUI() {
  const [currentStep, setCurrentStep] = useState(1);

  const { t } = useTranslation("common");
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const router = useRouter();

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <HowOne onNext={goToNextStep} />;
      case 2:
        return <HowTwo onPrevious={goToPreviousStep} onNext={goToNextStep} />;
      case 3:
        return <HowThree onPrevious={goToPreviousStep} />;
      default:
        return null;
    }
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
    <>
      <Head>
        <title>University</title>
      </Head>
      <main className="bg-root flex flex-col">
        {/* START OF HEADER */}
        <div className="flex flex-row p-8 items-center w-screen">
          <div className="flex flex-row items-center">
            <img src="../../logo.png" className="w-[64px] h-[64px]" />
            <p className=" font-bold ml-5 text-2xl text-deepred">
              life<span className=" text-deepblue">chain</span>
            </p>
          </div>
          <div className="flex flex-row items-center ml-14 text-deepblue text-lg font-bold max-sm:hidden">
            <p className="mr-5">info</p>
            <p className="mr-5">How it works</p>
            <p className="mr-5">Contact us</p>
          </div>
          <div className=" flex flex-row flex-1 justify-end">
            <button className="bg-deepgreen p-3 rounded-full font-bold text-white max-sm:hidden ">
              Get the app
            </button>

            <div className=" xl:hidden lg:hidden md:hidden">
              <Dropdown>
                <Dropdown.Trigger>
                  <Avatar src="../../menu.png" />
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Text>Info</Text>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Text>How it works</Text>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Text>Contact us</Text>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Text>Get the app</Text>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div>
              <Dropdown>
                <Dropdown.Trigger>
                  <button className=" ml-3 rounded-full p-3 bg-deepgreen">
                    <p className=" font-extrabold text-white">En</p>
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
          </div>
        </div>
        {/* END OF HEADER */}

        {/* FIRST SECTION */}
        <div
          className="flex flex-row p-10
                             max-sm:flex-col"
        >
          <div
            className="flex flex-col justify-center items-center w-1/2 text-2xl font-extrabold text-deepblue
                                                                    max-sm:w-full"
          >
            <img
              src="../../mortarboard.gif"
              className="w-[128px] h-[128px]
                                                 max-sm:w-[64px] max-sm:h-[64px]"
            />

            <p
              className=" xl:text-4xl font-extrabold text-deepblue
                               lg:text-4xl
                               md:text-3xl
                               max-sm:text-3xl text-center"
            >
              Smart Alert University
            </p>
            <div
              className="flex xl:w-[40vh] h-[10px] bg-deepblue rounded-full mt-8 mb-8
                                     lg:w-[35vh]
                                     md:w-[20vh]
                                     max-sm:w-[20vh]"
            ></div>
            <p>
              The <span className=" text-deepgreen">smart</span> way to be safe
            </p>
            <p>
              inside the <span className=" text-deepred">university</span>
            </p>
          </div>

          <div
            className="flex w-1/2 items-center justify-center
                               max-sm:w-full"
          >
            <Login className="w-[80vh] h-[60vh]" />
          </div>
        </div>
        {/* SECOND SECTION */}

        <div
          className="flex flex-col xl:text-5xl
                                      lg:text-4xl
                                      md:text-4xl
                                      max-sm:text-xl"
        >
          <div
            className="flex flex-col xl:h-[60vh] justify-center items-center font-extrabold text-deepblue
                                      lg:h-[60vh]
                                      md:h-[40vh]
                                      max-sm:h-[30vh]"
          >
            <p>
              Alert the University{" "}
              <span className=" text-deepgreen">guards</span>
            </p>
            <p className="mb-5">
              for every <span className=" text-deepred">situation</span>
            </p>
            <img
              src="../../down.gif"
              className="w-[128px] h-[128px]
                                                 max-sm:w-[64px] max-sm:h-[64px]"
            />
          </div>

          <div
            className="flex flex-col xl:h-[80vh] justify-center items-center font-extrabold text-deepblue
                                      lg:h-[80vh]
                                      md:h-[60vh]
                                      max-sm:h-[40vh]"
          >
            <p>
              Instant <span className=" text-deepgreen">calls</span>
            </p>
            <p className="mb-5">
              on <span className=" text-deepred">Emergency</span> Numbers
            </p>
            <img
              src="../../down.gif"
              className="w-[128px] h-[128px]
                                                 max-sm:w-[64px] max-sm:h-[64px]"
            />
          </div>

          <div
            className="flex flex-col xl:h-[80vh] justify-center items-center font-extrabold text-deepblue
                                      lg:h-[80vh]
                                      md:h-[60vh]
                                      max-sm:h-[40vh]"
          >
            <p>
              <span className=" text-deepgreen">Usefull</span> links , maps and
              information{" "}
            </p>
            <p className="mb-5">
              About the <span className=" text-deepred">University</span> campus
            </p>
            <img
              src="../../down.gif"
              className="w-[128px] h-[128px]
                                                 max-sm:w-[64px] max-sm:h-[64px]"
            />
          </div>
        </div>

        {/* Third sections*/}
        <div
          className=" p-14 items-center justify-center
                         max-sm:p-5"
        >
          <p className="text-center mb-12 text-4xl font-extrabold text-deepblue">
            How it works
          </p>
          {renderStep()}
        </div>

        {/* Fourth sections*/}

        <p className="text-4xl font-extrabold text-deepblue text-center mt-10">
          Soon Available on
        </p>
        <div className="flex flex-row p-16 max-sm:flex-col">
          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
            <img
              src="../../google play.png"
              className="xl:w-[300px] xl:h-[200]
                                                  lg:w-[250px] lg:h-[150px]
                                                  md:w-[200px] md:h-[100]
                                                  max-sm:w-[170px] max-sm:h-[100px]"
            />
            <img
              src="../../app-store.png"
              className="xl:w-[300px] xl:h-[100px]
                 lg:w-[250px] lg:h-[100px]
                                                md:w-[200px] md:h-[80px]
                                                max-sm:w-[170px] max-sm:h-[60px]
                                                max-sm:mb-10"
            />
          </div>

          <div className="flex flex-col w-1/2 items-center justify-center max-sm:w-full">
            <GuardLogin className="w-[80vh] h-[60vh] max-sm:w-[60vh] max-sm:h-[40vh]" />
          </div>
        </div>

        {/* ######################## contuct us section ######################## */}

        <div className="flex flex-col">
          <Container maxW="500px" mt={12} id="contactus">
            <div className="flex flex-row items-center">
              <Heading className="mr-8">Contact us</Heading>
              <img
                src="../../user.gif"
                className=" flex flex-xol w-[100px] h-[100px]
                                                 max-sm:w-[64px] max-sm:h-[64px]"
              />
            </div>
            <div
              className="xl:w-[40vh] xl:h-[2vh] bg-dark-blue rounded-3xl mb-5
                        lg:w-[40vh] lg:h-[2vh]
                        md:w-[20vh] md:h-[1vh]
                        max-sm:w-[30vh] max-sm:h-[1vh]"
            ></div>
            <FormLabel>
              Feel free to share your ideas and feedback for our project
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
              <FormLabel>Name</FormLabel>
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
              <FormLabel>Subject</FormLabel>
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
              <FormLabel>Message</FormLabel>
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
              Submit
            </Button>
          </Container>
        </div>

        {/* ######################## footer section ######################## */}
        <div className="flex flex-col items-center justify-evenly text-center h-[50vh] text-sm font-thin">
        <div
              className="xl:w-[40vh] xl:h-[2vh] bg-dark-blue rounded-3xl mb-5
                        lg:w-[40vh] lg:h-[2vh]
                        md:w-[20vh] md:h-[1vh]
                        max-sm:w-[30vh] max-sm:h-[1vh]"
            ></div>
          <p>Lifechain university</p>
          <p>Email : info@lifechain.gr</p>
          <p>This site is open source. Find in ot github</p>
          <div
            className="flex flex-row justify-evenly w-[35vh] align-middle items-center
                                                           max-sm:w-[30vh]"
          >
            <img src="../../linkedin.png" className="w-[32px] h-[32px]" />
            <img src="../../twitter.png" className="w-[32px] h-[32px]" />
            <img src="../../facebook.png" className="w-[32px] h-[32px]" />
          </div>
          <p>All rights reserved lifechain 2023 ©</p>
        </div>
      </main>
    </>
  );
}
