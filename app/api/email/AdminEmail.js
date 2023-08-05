import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

export default function UserEmail(props){


  return (
    <Html>
      <Head />

      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-gray-300 shadow rounded-xl  my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[20px]">
              <Img
                src={`https://rajumaurya.com/LogoRaju.png`}

                height="50"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal p-0 my-[30px] mx-0">
              Hey! 👋 Raju.
            </Heading>

            <Text className="text-black text-[18px] leading-[24px]">
              We got a message from <strong>{props.username}</strong>
            </Text>


            <Text className="text-[#666666] text-[14px] leading-[24px] mt-[20px]">
              {props.message}
            </Text>



            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#c084fc] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={`mailto:${props.email}`}
              >
                  Replay
              </Button>
            </Section>
            <Text className="text-black text-[18px] leading-[24px] ">
              Thankyou!
            </Text>
            
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
