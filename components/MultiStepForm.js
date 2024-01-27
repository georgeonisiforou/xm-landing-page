import React, { useState } from "react";
import styled from "styled-components";

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
  color: #959595;
`;

const ValidationMessage = styled.div`
  display: flex;
  gap: 1rem;
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
`;

const FirstStep = () => {
  return (
    <>
      <FieldContainer>
        <p>Full Name:</p>
        <Field placeholder="Full Name" name="fullName" type="text" />
        <ValidationContainer></ValidationContainer>
      </FieldContainer>
      <FieldContainer>
        <p>Date of Birth:</p>
        <Field type="date" name="dob" />
        <ValidationContainer></ValidationContainer>
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
          <StepLine />
        </Step>
        <Step>
          {" "}
          <StepTitle>
            <StepNumberContainer>
              <StepNumber>2</StepNumber>
            </StepNumberContainer>
            <p>Step 2</p>
          </StepTitle>
          <StepLine />
        </Step>
      </StepsContainer>
      <Fields>
        <FirstStep />
      </Fields>

      <Btn>continue</Btn>
    </Container>
  );
};

export default MultiStepForm;
