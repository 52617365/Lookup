import {VerticalFeatureRow} from "../feature/VerticalFeatureRow";
import {Section} from "../layout/Section";

const VerticalFeatures = () => (
    <div className={"bg-gray-100"}>
        <Section
            title="Every year, over 20 billion credentials get breached"
            description="2.5 credentials per person, your personal details might be breached, act now."
        >
            <VerticalFeatureRow
                title="Your title here"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
                image="/assets/images/feature.svg"
                imageAlt="First feature alt text"
            />
            <VerticalFeatureRow
                title="Your title here"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
                image="/assets/images/feature2.svg"
                imageAlt="Second feature alt text"
                reverse
            />
            <VerticalFeatureRow
                title="Your title here"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
                image="/assets/images/feature3.svg"
                imageAlt="Third feature alt text"
            />
        </Section>
    </div>
);

export {VerticalFeatures};
