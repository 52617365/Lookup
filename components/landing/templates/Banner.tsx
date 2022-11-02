import Link from 'next/link';

import {Button} from '../button/Button';
import {CTABanner} from '../cta/CTABanner';
import {Section} from '../layout/Section';

const Banner = () => (
    <div className={"bg-gray-100"}>
        <Section>
            <CTABanner
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                subtitle="Start your Free Trial."
                button={
                    <Link href="https://creativedesignsguru.com/category/nextjs/">
                        <Button>Get Started</Button>
                    </Link>
                }
            />
        </Section>
    </div>
);

export {Banner};
