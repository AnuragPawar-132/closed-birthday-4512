import React from "react";
import { Stack, HStack, VStack, Text, Box, Image, Button, Spacer, Link, Input } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import styles from "./About.module.css"
import image_anyone_about from "../Components/aboutBanner/about_banner_image.png"


const About=()=>{

    return (
        <Box w="100%" padding="1% 0% 1% 0%">
            
        <Box w='100%'>
            <Image src={image_anyone_about} />
        </Box>

        <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton size="lg" bg="#0D362B" color="white" >
              <Box flex='1' textAlign='left' >
                <Text fontSize="2xl"  color="white" >OUR STORY</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className={styles.aboutSmallDiv_any} >
                <Image w="90%" src="https://i.shgcdn.com/4075e3a0-9129-48bd-bfe7-42fc93fe2397/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <VStack spacing="1%">
                    <Text fontSize="2xl" color="#0D362B" fontWeight="bold" >From Humble Beginnings</Text>
                    <Text>While riding through the forests of Burma, our founder, Mr. M. Manal, saw a villager pacify a restless elephant by feeding it the root of the plant Rauwolfia serpentina. Fascinated by the plant's effect on the elephant, he returned home to India to seek scientific evidence for why this particular plant would have such a beneficial, calming effect. Young Manal's mother gave him her bangles to sell so he could pursue his work, and Himalaya was born.</Text>
                    <Text> Once he fully understood the science behind this special botanical, Mr. Manal bought a hand-operated, tablet-compressing machine and began his work. At night, his shoulders would ache from producing a few hundred tablets, one small tablet at a time. But his hard work paid off. This remarkable plant would later become Serpina, the world’s first anti-hypertensive drug in 1934.</Text>
                    <Text>We remain in awe of the man who began our company, and the grandfather of our current CEO, Nabeel Manal. Himalaya’s legacy has always been one of researching nature and using the tools of modern science to develop and produce Ayurveda-based, pharmaceutical-grade herbal medicine products. And today, that legacy continues.Mr. Manal had a vision of helping people be well. Today, Himalaya Herbal Healthcare has turned a time-honored herbal tradition into a complete range of contemporary, proprietary formulas and single herbs dedicated to making the world well one person at a time.</Text>
                </VStack>

                <VStack spacing="1%">
                    <Text fontSize="2xl" color="#0D362B"  fontWeight="bold" >The Himalaya Legacy Now Spans Over 90 Years</Text>
                    <Text>Founded in 1930, the Himalaya legacy now spans over 90 years, stretching from one man, to his son, to his grandson. From our humble beginnings in India, our products are now offered in over 100 countries, yet we’re still family owned.</Text>
                    <Text>Himalaya offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs, and a full line of body care products. Integrating the principles of traditional medicine with modern science, Himalaya is a worldwide pioneer in the field of scientifically validated herbal healthcare.</Text>
                    <Text>Himalaya's North American LEED® Gold-Certified eco-friendly corporate office and warehouse facility are located in Sugar Land, Texas, a community neighboring Houston.</Text>
                </VStack>

                <Image w="90%" src="https://i.shgcdn.com/59ff8391-0e4c-47df-9848-556c4521753e/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />

            </div>
           </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
          <AccordionButton size="lg" bg="#0D362B" color="white" >
              <Box flex='1' textAlign='left' >
                <Text fontSize="2xl"  color="white" >OUR ROOTS</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <div className={styles.aboutSmallDiv_any} >
                <Image w="90%" src="https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <VStack spacing="1%">
                    <Text fontSize="2xl" color="#0D362B" fontWeight="bold" >From Humble Beginnings</Text>
                    <Text>The herbs used in Himalaya Herbal Healthcare's scientific product line are also used in the world's oldest traditional system of medicine, Ayurveda, which dates back over 4,000 years.</Text>
                    <Text>Ayurveda acknowledges there are five elements that make up the universe and the human body; earth, water fire, air and space. It seeks to bring the constellation and characteristics of the three body types defined by those elements – the vata, pitta and kapha – back into balance through proper diet, herbal treatment, and emotional well-being.</Text>
                    <Text>We’re proud of the ancient roots and our modern branches that allow us to continue unlocking the powerful healing benefits of Ayurveda, but our formulas are science-based and appropriate for all body types. They require no Ayurvedic knowledge to be used successfully.</Text>
                </VStack>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton size="lg" bg="#0D362B" color="white" >
              <Box flex='1' textAlign='left' >
                <Text fontSize="2xl"  color="white" >OUR PROCESS</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className={styles.aboutSmallDiv_any} >
                <Image w="90%" src="https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <VStack spacing="1%" >
                    <Text fontSize="2xl" color="#0D362B" fontWeight="bold" >Our Farms</Text>
                    <Text>Himalaya's herbs are grown on over 1,000 acres of farmland through fair trade, farming partnerships. Herbs are also sustainably wildcrafted on over 5,000 acres.</Text>
                    <Text>Himalaya chooses farm lands based on soil fertility, suitability and quality, visiting the selected land first to ensure the land is free from soil and water erosion, free from pollution and away from industrial zones, free from municipal waste and the flow of rain water from neighboring fields.</Text>
                    <Text>Himalaya’s agricultural supervisory teams visit farms quarterly, but the frequency of visits may increase depending on the individual needs of the farmer. Himalaya’s inspectors and trainers include our own people with Masters Degrees in botany, MBAs in agri-business management, along with agricultural scientists from reputed universities.</Text>
                </VStack>

                <VStack spacing="1%">
                    <Text fontSize="2xl" color="#0D362B"  fontWeight="bold" >Our Manufacturing</Text>
                    <Text>In March 2001, Himalaya was granted a Good Manufacturing Practices (GMP) certificate, issued by the Licensing Authority, Directorate of Indian Systems of Medicine, Bangalore, India. Himalaya is the first Ayurvedic facility in India to receive GMP certification.</Text>
                    <Text>We have also been granted Good Laboratory Practice (GLP) certification. A GLP certification is granted to manufacturing companies that adhere to the toxicity guidelines in nonclinical safety studies. The certification is granted by the National Good Laboratory Practice (GLP) Compliance Monitoring Authority, Department of Science and Technology, Government of India.</Text>
                    <Text>Only 14 institutions in India have been granted this certificate, and Himalaya is the first herbal company to join their ranks.</Text>
                </VStack>

                <Image w="90%" src="https://i.shgcdn.com/1ccc967d-5c31-4ca5-8ceb-3a0c95177b71/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />

            </div>
           </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton size="lg" bg="#0D362B" color="white" >
              <Box flex='1' textAlign='left' >
                <Text fontSize="2xl"  color="white" >OUR SCIENCE</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className={styles.aboutSmallDiv_any} >
                <Image w="90%" src="https://i.shgcdn.com/a094b44f-0f48-4abf-b25b-549315cc3d98/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <VStack spacing="1%" >
                    <Text fontSize="2xl" color="#0D362B" fontWeight="bold" >Our Science</Text>
                    <Text>Himalaya's core interest has always been to ensure the health benefits of our herbal formulas and standalone solo herbs with product-specific, double-blind, placebo-controlled human clinical trials on all of our products.</Text>
                    <Text>Our commitment to Ayurvedic principles, and research to produce natural, safe, and effective health products is driven by our soul mission, which is to help individual people maintain a healthy, long, and high-quality of life. We like to think of ourselves as providing solutions for you, which helps make our world well, one person at a time.</Text>
                    <Text>Himalaya has conducted over 1,200 clinical studies, many of which have been published in numerous, highly-regarded medical journals including The European Journal of Pharmacology, Phytotherapy Research, The Indian Journal of Clinical Practice, Australian Journal of Medical Herbalism, and JAMA, India.</Text>
                </VStack>

                <VStack spacing="1%">
                    <Text fontSize="2xl" color="#0D362B"  fontWeight="bold" >Our Distribution</Text>
                    <Text>After being grown, manufactured and packaged in India, finished Himalaya products are shipped to our North American corporate office, warehouse and distribution center located in Sugar Land, Texas.</Text>
                    <Text>Here we maintain state-of-the-art storage and shipping processes in climate-controlled environments until our products make their way to our retailers, and then to your home.</Text>
                 
                </VStack>

                <Image w="90%" src="https://i.shgcdn.com/5a1a59af-3931-4d16-bff2-004468e44137/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />

            </div>
           </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton size="lg" bg="#0D362B" color="white" >
              <Box flex='1' textAlign='left' >
                <Text fontSize="2xl"  color="white" >OUR INITIATIVES</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className={styles.aboutSmallDiv_any} >
                <Image w="90%" src="https://i.shgcdn.com/6288998b-545b-4de3-946e-6317b6fe72f6/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <VStack spacing="1%" >
                    <Text fontSize="2xl" color="#0D362B" fontWeight="bold" >Commitment to Farmers</Text>
                    <Text>Himalaya works one-on-one with farmers and through non-governmental organizations to help bring poorer farming communities a link to the marketplace. Through fair trade cooperative agreements, our goal is to help economically empower small and marginal farmers so they can further their livelihood.</Text>
                    <Text>Himalaya’s fair trade practices assure farmers are paid a minimum of 15-20% higher than the actual cost of cultivation. In addition to favorable wages, other benefits to the farmers include an assured market for their crops, an assured price and income (we protect them from the ups and downs of the market), and the costs for their required certifications, packaging and transportation are borne by us, not them.</Text>
                </VStack>

                <VStack spacing="1%">
                    <Text fontSize="2xl" color="#0D362B"  fontWeight="bold" >Trees for Life</Text>
                    <Text>Himalaya has been planting trees in the Western Ghats of India since 2011. The Western Ghats is identified as a biodiversity hotspot by UNESCO, the United Nations Educational, Scientific and Cultural Organization.</Text>
                    <Text>To date, we have planted 750,000 trees, covering 900 acres in partnership with a local non-government organization, the Society for Environment and Biodiversity Conservation. Himalaya supports the planting of a mix of fruit, fodder, endemic, medicinal and other trees that support the local ecology and biodiversity.</Text>
                 
                </VStack>

                <Image w="90%" src="https://i.shgcdn.com/f86febe0-9c1e-466f-b189-842f750669b3/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />

            </div>
           </AccordionPanel>
        </AccordionItem>

    </Accordion>
    </Box>
    )
}

export default About;