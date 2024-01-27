import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form } from "formik";
import * as yup from "yup";

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StepsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

const Step = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StepTitle = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
`;

const StepLine = styled.div`
  width: 100%;
  border-radius: 4px;
  height: 8px;
  background-color: #dddddd;
  display: flex;
  overflow: hidden;
`;

const HalfLine = styled.div`
  width: 50%;
  height: 100%;
`;

const StepNumberContainer = styled.div`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  padding: 2px;
  background-color: transparent;
  border: 1px solid #dddddd;
`;

const StepNumber = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 50%;
  background-color: #dddddd;
  color: #000;
`;

const Fields = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
`;

const Field = styled.input`
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 1rem;
  height: 40px;
  outline: none;
  border: none;

  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

const ValidationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  color: ${({ color }) => color};
`;

const ValidationMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Error = styled.div`
  color: red;
  width: 100%;
`;

const Btn = styled.button`
  width: clamp(280px, 50vw, 345px);
  margin: 0 auto;
  height: 40px;
  background-color: #29a643;
  color: #fff;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Bebas Neue", sans-serif;
  cursor: pointer;
`;

const FirstStep = ({ formData, setFormData, lineStep, setLineStep }) => {
  return (
    <>
      <FieldContainer>
        <p>Full Name:</p>
        <Field
          placeholder="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            if (e.target.value !== "") {
              setLineStep(1);
            }
          }}
        />
        <ValidationContainer></ValidationContainer>
      </FieldContainer>
      <FieldContainer>
        <p>Date of Birth:</p>
        <Field
          type="date"
          name="dob"
          value={formData.dob}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            if (e.target.value !== "") {
              setLineStep(1);
            }
          }}
        />
        <ValidationContainer>
          <ValidationMessage>
            <FontAwesomeIcon
              icon={faCircleDot}
              style={{ width: "9px", height: "9px" }}
            />
          </ValidationMessage>
        </ValidationContainer>
      </FieldContainer>
    </>
  );
};

const SecondStep = ({ formData, setFormData, setLineStep }) => {
  return (
    <>
      <FieldContainer>
        <p>Email:</p>
        <Field
          placeholder="Email"
          name="email"
          type="text"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            if (e.target.value !== "") {
              setLineStep(3);
            }
          }}
        />
        <ValidationContainer></ValidationContainer>
      </FieldContainer>
      <FieldContainer>
        <p>Password:</p>
        <Field
          type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            if (e.target.value !== "") {
              setLineStep(3);
            }
          }}
        />
        <ValidationContainer>
          <ValidationMessage>
            <FontAwesomeIcon
              icon={faCircleDot}
              style={{ width: "9px", height: "9px" }}
            />
          </ValidationMessage>
        </ValidationContainer>
      </FieldContainer>
    </>
  );
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    email: "",
    password: "",
  });
  const [lineStep, setLineStep] = useState(0);

  console.log(lineStep);

  const steps = [
    <FirstStep
      key={0}
      formData={formData}
      setFormData={setFormData}
      lineStep={lineStep}
      setLineStep={setLineStep}
    />,
    <SecondStep
      key={1}
      formData={formData}
      setFormData={setFormData}
      lineStep={lineStep}
      setLineStep={setLineStep}
    />,
  ];

  const validationsArray = [
    [
      "8 - 15 characters",
      "1 or more numbers",
      "1 or more lower case letters",
      "1 or more upper case letters",
      "1 or more special characters (#[]()@$&*!?|,.^/+_-)",
    ],

    ["No numbers or special characters allowed"],

    ["Must be 18 years old minimum", "Must be 60 years old maximum"],

    ["Valid email format"],
  ];

  const changeStep = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      setLineStep(2);
    }
  };

  const buttonSteps = [
    { id: 0, text: "continue" },
    { id: 1, text: "register now" },
  ];

  const today = new Date();
  const minDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 60); // 60 years ago
  const maxDate = new Date(today);
  maxDate.setFullYear(today.getFullYear() - 18); // 18 years ago

  const userSchema = yup.object({
    fullName: yup
      .string()
      .matches(/^[a-zA-Z]+$/, "No numbers of special characters allowed")
      .required("Required!"),
    dob: yup
      .date()
      .required("Birthdate is required")
      .min(minDate, "Must be at least 18 years old")
      .max(maxDate, "Must be at most 60 years old"),
    email: yup.string().email("Must be a valid email").required("Required!"),
    password: yup
      .string()
      .required("Required!")
      .min(8, "8 - 15 characters")
      .max(15, "8 - 15 characters")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/,
        "Password must contain at least one number, one lowercase letter, and one uppercase letter"
      ),
  });

  return (
    <Container>
      <StepsContainer>
        <Step>
          <StepTitle>
            <StepNumberContainer>
              <StepNumber>1</StepNumber>
            </StepNumberContainer>
            <p>Step 1</p>
          </StepTitle>
          <StepLine currentStep={currentStep}>
            <HalfLine
              style={{
                backgroundColor:
                  currentStep === 0 || (lineStep >= 1 && "#29A643"),
              }}
            />
            <HalfLine
              style={{
                backgroundColor:
                  currentStep === 1 && lineStep >= 2 && "#29A643",
              }}
            />
          </StepLine>
        </Step>
        <Step>
          {" "}
          <StepTitle>
            <StepNumberContainer>
              <StepNumber>2</StepNumber>
            </StepNumberContainer>
            <p>Step 2</p>
          </StepTitle>
          <StepLine currentStep={currentStep}>
            <HalfLine
              style={{
                backgroundColor:
                  currentStep === 1 && lineStep >= 3 && "#29A643",
              }}
            />
            <HalfLine
              style={{
                backgroundColor:
                  currentStep === 1 && lineStep >= 4 && "#29A643",
              }}
            />
          </StepLine>
        </Step>
      </StepsContainer>
      <Formik
        validationSchema={userSchema}
        initialValues={{ fullName: "", dob: "", email: "", password: "" }}
        onSubmit={() => {}}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <CustomForm>
            <Fields>
              <FieldContainer>
                <p>Full Name:</p>
                <Field
                  placeholder="Full Name"
                  name="fullName"
                  type="text"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.fullName ? (
                  <ValidationContainer
                    color={
                      errors.fullName && touched.fullName
                        ? "#959595"
                        : "#29A643"
                    }
                  >
                    {validationsArray[1].map((item, idx) => {
                      return (
                        <ValidationMessage key={idx}>
                          <FontAwesomeIcon
                            icon={faCircleDot}
                            style={{ width: "9px", height: "9px" }}
                          />
                          {item}
                        </ValidationMessage>
                      );
                    })}
                  </ValidationContainer>
                ) : null}
              </FieldContainer>
              <FieldContainer>
                <p>Date of Birth:</p>
                <Field
                  type="date"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.dob ? (
                  <ValidationContainer
                    color={errors.dob && touched.dob ? "#959595" : "#29A643"}
                  >
                    {validationsArray[2].map((item, idx) => {
                      return (
                        <ValidationMessage key={idx}>
                          <FontAwesomeIcon
                            icon={faCircleDot}
                            style={{ width: "9px", height: "9px" }}
                          />
                          {item}
                        </ValidationMessage>
                      );
                    })}
                  </ValidationContainer>
                ) : null}
              </FieldContainer>
            </Fields>
            <Fields>
              <FieldContainer>
                <p>Email:</p>
                <Field
                  placeholder="Email"
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.email ? (
                  <ValidationContainer
                    color={
                      errors.email && touched.email ? "#959595" : "#29A643"
                    }
                  >
                    {validationsArray[3].map((item, idx) => {
                      return (
                        <ValidationMessage key={idx}>
                          <FontAwesomeIcon
                            icon={faCircleDot}
                            style={{ width: "9px", height: "9px" }}
                          />
                          {item}
                        </ValidationMessage>
                      );
                    })}
                  </ValidationContainer>
                ) : null}
              </FieldContainer>
              <FieldContainer>
                <p>Password:</p>
                <Field
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.password ? (
                  <ValidationContainer
                    color={
                      errors.password && touched.password
                        ? "#959595"
                        : "#29A643"
                    }
                  >
                    {validationsArray[0].map((item, idx) => {
                      return (
                        <ValidationMessage key={idx}>
                          <FontAwesomeIcon
                            icon={faCircleDot}
                            style={{ width: "9px", height: "9px" }}
                          />
                          {item}
                        </ValidationMessage>
                      );
                    })}
                  </ValidationContainer>
                ) : null}
              </FieldContainer>
            </Fields>
            <Btn
              type="submit"
              onClick={() => {
                setCurrentStep(1);
              }}
            >
              {buttonSteps[currentStep].text}
            </Btn>
          </CustomForm>
        )}
      </Formik>
    </Container>
  );
};

const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default MultiStepForm;
