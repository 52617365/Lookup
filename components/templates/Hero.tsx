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
                        {"The only database breach search engine\n"}
                        <span className="text-primary-500">you will ever need</span>
                    </>
                }
                description="Find your personal details from breached databases in milliseconds"
            />
        </Section>
    </Background>
);

export {Hero};
