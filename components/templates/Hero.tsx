import Link from "next/link";

import {Background} from "../background/Background";
import {HeroOneButton} from "../hero/HeroOneButton";
import {Section} from "../layout/Section";
import {NavbarTwoColumns} from "../navigation/NavbarTwoColumns";
import {Logo} from "./Logo";

const Hero = () => (
    <Background color="bg-gray-100">
        <Section yPadding="py-6">
            <NavbarTwoColumns logo={<Logo xl/>}>
                <li className={"mr-5"}>
                    <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link href="/">Sign in</Link>
                </li>
            </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-20 pb-32">
            <HeroOneButton
                title={
                    <>
                        {"A breach search engine that keeps you safe"}
                    </>
                }
                description={"Every year, over 20 billion credentials get breached. That's 2.5 credentials per person, your personal details might be breached, act now and find your personal details from breached databases in milliseconds."}
            />
        </Section>
    </Background>
);

export {Hero};
