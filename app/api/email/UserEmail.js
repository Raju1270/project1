import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

export default function UserEmail(props) {
  return (
    <Html>
      <Head />

      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-gray-300 shadow rounded-xl  my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[20px]">
              <Link href="https://rajumaurya.com/">
                <Img
                  src={`https://rajumaurya.com/LogoRaju.png`}
                  height="50"
                  alt="Vercel"
                  className="my-0 mx-auto"
                />
              </Link>
            </Section>
            <Heading className="text-black text-[24px] font-normal p-0 my-[30px] mx-0">
              Hey! 👋 {props.username}
            </Heading>

            <Text className="text-black text-[18px] leading-[24px]">
              We got your message.
            </Text>

            <Text className="text-[#666666] text-[14px] leading-[24px] mt-[20px]">
              {props.message}
            </Text>

            <Text className="text-black text-[18px] leading-[24px] my-[32px]">
              Thankyou!
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Row>
                <Column align="right" className="px-3">
                  <Link href="https://www.github.com/Raju1270">
                    <Img
                      src={`https://rajumaurya.com/github.png`}
                      width={60}
                      alt="social link"
                    />
                  </Link>
                </Column>
                <Column align="center" className="px-3">
                  <Link href="https://www.instagram.com/rajumaurya_13">
                    <Img
                      src={`https://rajumaurya.com/insta.png`}
                      width={44}
                      alt="social link"
                    />
                  </Link>
                </Column>
                <Column align="left" className="px-3">
                  <Link href="https://www.linkedin.com/in/raju-maurya-15170b251">
                    <Img
                      src={`https://rajumaurya.com/linkedin.png`}
                      width={68}
                      alt="social link"
                    />
                  </Link>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
