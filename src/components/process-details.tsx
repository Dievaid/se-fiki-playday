import { generateItems } from "@/hooks/generate-items";
import { useScrollRef } from "@/hooks/use-scroll"

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "./ui/card";
import { Accordion, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";

import { FaBookOpenReader } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa6";

interface QPItemProps {
    question: string;
    purpose: string;
}

const QPItem: React.FC<QPItemProps> = (props) => {
    const { question, purpose } = props;

    return (
        <Card className="p-4">
            <div className="flex flex-col items-start space-y-2">
                <p className="font-semibold text-xl">Q: {question}</p>
                <p><p className="font-semibold inline-block">Purpose:</p> {purpose}</p>
            </div>
        </Card>
    )
}

export const ProcessDetails = () => {
    const ref = useScrollRef<HTMLParagraphElement>("Process details");

    return (
        <>
            <div className="flex items-center space-x-4 text-3xl">
                <FaBookOpenReader />
                <p className="font-semibold" ref={ref}>Process details</p>
            </div>

            <div className="text-wrap text-justify w-[50%] space-y-10">
                <p>To identify customer segments for PlayDay, we first categorized sports enthusiasts by age groups: 14-18, 19-25, 26-40, 41-55, and 56+. Every possible sports enthusiast from each group has different goals and preferences and we talked mostly to the 19-25 group.
                    We began with friends and acquaintances through WhatsApp for casual feedback. This allowed us to quickly understand the specific frustrations users face, like unreliable field availability and last-minute cancellations. Using familiar connections helped build trust, allowing for honest feedback about the hassles in organizing games and finding reliable teammates.</p>
                <p>By keeping conversations informal and exploratory, we followed “The Mom Test” principles, avoiding direct pitches and instead listening for underlying problems. Each conversation revealed new angles, such as the wasted time spent calling unresponsive field owners or dealing with no-show teammates. These insights became the basis for shaping PlayDay’s core features, showing us where a streamlined booking and team-filling platform could genuinely make a difference.</p>

                <Carousel draggable={false}>
                    <CarouselContent>
                        {generateItems("conversation", 4)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div className="flex items-center">
                    <iframe
                        width="960"
                        height="450"
                        src="https://www.youtube.com/embed/e_GbFSnE1zQ?si=X6DPWMHt0idRHJ58"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="block m-auto"
                    />
                </div>

                <p>In short, our method was straightforward: connect with sports enthusiasts in our network, listen closely, and use their real-life struggles to shape an app that would directly address their needs.</p>
                <p>Customers experience substantial friction when trying to book sports fields. Traditional methods, such as calling owners, are often unreliable because customers report frequent cases where numbers are disconnected or go unanswered. In some cases, this can be due to outdated contact information or busy schedules, but the impact remains the same: frustration and wasted time. Furthermore, the real-time availability of fields is rarely clear, forcing customers to navigate unclear booking possibilities. The inability to confirm a field’s status in advance often leads to abandoned plans, adding to customer dissatisfaction.</p>

                <Accordion type="single" collapsible>
                    <AccordionItem value="questions">
                        <AccordionTrigger className="text-2xl">
                            <div className="flex items-center space-x-2">
                                <p>Questions we asked</p>
                                <FaQuestion />
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="space-y-4">
                            <QPItem
                                question="Could you tell me a bit about your current lifestyle? Would you consider yourself someone who is regularly active, occasionally active, or not particularly active?"
                                purpose="To understand how often they engage in physical activities, without pitching anything. This helps us gauge if they’re the kind of person who would actually use a sports platform like PlayDay."
                            />
                            <QPItem
                                question="That’s great to hear. What kinds of activities or sports do you participate in most often?"
                                purpose="To find out if they play team sports. This helps us understand if they’d benefit from features like team-filling and game coordination."
                            />
                            <QPItem
                                question="Since you prefer team sports, how do you usually go about finding players to join your games? Are there particular challenges you face in gathering enough people to play, or do you have a reliable group you can count on?"
                                purpose="This helps us uncover pain points that PlayDay can address, such as the need for a centralized platform to connect players and streamline team-building efforts."
                            />
                            <QPItem
                                question="What’s been your experience with field rentals? What would you change about it?"
                                purpose="To gather insights into their past experiences with renting sports fields and to identify any frustrations or areas for improvement. This helps us understand the specific issues they face, which PlayDay can aim to resolve, enhancing the overall booking experience for users."
                            />
                            <QPItem
                                question="What kinds of activities or sports do you participate in most often?"
                                purpose="This helps us understand their preferences and interests, which can inform how PlayDay can better serve their needs in organizing team games."
                            />
                            <QPItem
                                question="It sounds like you prefer planning a few days in advance, but short-notice games also come up fairly often. Could you tell me more about how those last-minute invitations usually play out? For example, do you face any particular challenges or find certain advantages when joining or organizing games with only a few hours’ notice?"
                                purpose="This helps us identify specific pain points that PlayDay can address, such as finding players quickly or securing venues on short notice, enhancing the overall user experience."
                            />
                            <QPItem
                                question="Do you find yourself regularly looking for places to play, or do you stick to a few familiar locations?"
                                purpose="This question helps us determine if they prefer exploring new places or if they tend to rely on familiar locations, guiding how PlayDay can assist them in discovering and booking fields."
                            />
                            <QPItem
                                question="Could you tell me more about what you like or maybe dislike about returning to these familiar places? And if the group wanted to try somewhere new, what factors would be most important to you in considering a different location?"
                                purpose="To gather insights into their preferences for familiar venues, including what they appreciate and what might deter them from returning. Additionally, this question helps identify the key factors they consider when exploring new locations, which can inform how PlayDay presents venue options and features to enhance user satisfaction."
                            />
                            <QPItem
                                question="And how you typically reserve sports fields, if you do, and any particular challenges you encounter in that process?"
                                purpose="This information helps identify gaps and pain points in field reservation systems, allowing PlayDay to provide solutions that streamline bookings and improve the user experience."
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <p>Another major pain point for customers is the inconsistency in field facilities and pricing. Some clients reported feeling misled after arriving at fields that lacked promised amenities or discovering unexpected charges. Inconsistent standards and a lack of transparency in field amenities add an extra layer of frustration, as customers often only find out about these shortcomings after arriving on-site. This discrepancy between expectation and reality deters potential users, reducing the likelihood they’ll use the same venue again or recommend it to others.</p>
                <p>Enthusiasts trying to organize games often face last-minute cancellations from teammates. This pattern can completely derail plans, especially when these cancellations leave teams too short-handed to play. Customers also note that even with group chats and social media groups, it’s difficult to find reliable substitutes or additional players in time. The lack of a dedicated space for last-minute team coordination means users often turn to fragmented solutions, like forums and social media, which are unreliable and time-consuming.</p>
                <p>Field owners currently rely on word of mouth, social media, or limited advertising to reach potential clients. While this can sometimes bring in repeat business, it lacks the broad reach and ease that would attract new customers. The owner we talked to said that while he’s interested in expanding his client base, he doesn’t have the resources to actively market their field. The field owner we talked to, Caravan Marian, told us valuable insights about the business. The program for the field is 7-17 and after 17 is for subscriptions only. The biggest problem he sees is the people. Why? Because everyone wants to play at the same time more or less. It becomes tiring and annoying to answer the phone calls and say the same thing over and over again. The only way the owner keeps in touch with the people renting the fields is through telephone which becomes exhausting over time because sometimes the people will answer, other times the owner will not answer.</p>

                <Carousel draggable={false}>
                    <CarouselContent>
                        {generateItems("graphs", 6)}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <p>The feedback gathered from our recent survey reveals valuable insights into the preferences and experiences of users. We tried to first understand the age groups and how active the people completing the form are. Among the 61 respondents, a substantial 24 identified themselves as enthusiastic football players, alongside 13 basketball practitioners and 14 Laser Tag participants. This clearly illustrates a vibrant community of active individuals who enjoy team-oriented sports.</p>
                <p>However, the survey also highlights significant challenges faced by these users. In response to the question regarding the ease of renting a field, 26 out of 40 participants reported negative experiences. People expressed their issues related to organization, the challenge of assembling complete teams, poor communication with field owners, and lack of clarity in connecting with potential teammates.</p>
                <p>The majority (more than 50%) of the ones that completed the form said that they are usually playing on a rented field. When asked how the rental process could be improved, several recurring themes emerged. Respondents emphasized the need for a dedicated web and mobile application, indicating a strong desire for a streamlined digital solution. They also highlighted the importance of facilitating connections among players, ensuring that field availability is accurately maintained, and fostering community engagement.</p>
                <p>We can strongly say, after the research we have done, that the users have pains regarding the process of renting a field. We can continue with PlayDay thanks to the answers from the form, the conversations from WhatsApp and the interview with the pitch owner.</p>
            </div>
        </>
    )
}