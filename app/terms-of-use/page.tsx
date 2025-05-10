import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { Heading1, Heading2, Paragraph } from "@/components/typography"

export default function TermsConditions() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-amber-50">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnView animation="fade-up">
            <Heading1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-4">
              Terms & Conditions
            </Heading1>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={200}>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/heading-divider.png"
                alt="Decorative divider"
                width={180}
                height={24}
                className="h-6 object-contain"
              />
            </div>
          </AnimateOnView>

          <AnimateOnView animation="fade-up" delay={400}>
            <Paragraph className="text-center max-w-3xl mx-auto text-lg">
              Please read these terms and conditions carefully before using our website or services. By accessing or
              using our platform, you agree to be bound by these terms.
            </Paragraph>
          </AnimateOnView>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-10 border-t-4 border-primary">
              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Acceptance of Terms</Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      By accessing or using the Sanatana Dharma Centre website, you acknowledge that you have read,
                      understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part
                      of these terms, you must not use our website or services.
                    </Paragraph>
                    <Paragraph>
                      We reserve the right to modify these terms at any time without prior notice. Your continued use of
                      the website following any changes constitutes your acceptance of the revised terms.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Use of Website</Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      You agree to use our website only for lawful purposes and in a way that does not:
                    </Paragraph>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Violate the rights of others or restrict their use of the website</li>
                      <li>Prohibit or restrict any other user from using the website</li>
                      <li>Breach any applicable laws or regulations</li>
                      <li>Interfere with or disrupt the security or functionality of the website</li>
                      <li>Transmit any harmful code or material</li>
                    </ul>
                    <Paragraph>
                      We reserve the right to restrict access to certain areas of the website or the entire website at
                      our discretion.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Intellectual Property
                  </Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      All content on this website, including but not limited to text, graphics, logos, images, audio
                      clips, digital downloads, and software, is the property of Sanatana Dharma Centre or its content
                      suppliers and is protected by international copyright, trademark, and other intellectual property
                      laws.
                    </Paragraph>
                    <Paragraph>
                      You may access, download, or print content from the website for your personal, non-commercial use,
                      but you must not modify, copy, distribute, transmit, display, perform, reproduce, publish,
                      license, create derivative works from, transfer, or sell any information obtained from this
                      website without our prior written permission.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    User Responsibilities
                  </Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      When using interactive features of our website, you must not post or transmit any material that
                      is:
                    </Paragraph>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Defamatory, offensive, hateful, or inflammatory</li>
                      <li>
                        Promoting discrimination based on race, gender, religion, nationality, disability, sexual
                        orientation, or age
                      </li>
                      <li>Infringing on copyright, database right, or trademark of any other person</li>
                      <li>Likely to deceive any person or promote any illegal activity</li>
                      <li>Threatening, abusive, or invading another's privacy</li>
                    </ul>
                    <Paragraph>
                      We have the right to remove any content or posting you make on our website if, in our opinion, it
                      does not comply with these terms.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Donations and Payments
                  </Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      All donations made through our website are voluntary and non-refundable. By making a donation, you
                      acknowledge that you are giving freely without expectation of any goods or services in return.
                    </Paragraph>
                    <Paragraph>
                      We use secure third-party payment processors to handle financial transactions. While we take
                      reasonable steps to ensure the security of your payment information, we cannot guarantee absolute
                      security and are not responsible for any breaches that occur through our payment processors.
                    </Paragraph>
                    <Paragraph>
                      Tax receipts will be issued for eligible donations in accordance with applicable laws.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Limitation of Liability
                  </Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      To the fullest extent permitted by law, Sanatana Dharma Centre shall not be liable for any direct,
                      indirect, incidental, special, consequential, or punitive damages, including but not limited to,
                      damages for loss of profits, goodwill, use, data, or other intangible losses resulting from:
                    </Paragraph>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Your use or inability to use the website</li>
                      <li>
                        Any unauthorized access to or use of our servers and/or any personal information stored therein
                      </li>
                      <li>Any interruption or cessation of transmission to or from our website</li>
                      <li>
                        Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our website
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div>
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Governing Law</Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      These Terms and Conditions shall be governed by and construed in accordance with the laws of
                      India, without regard to its conflict of law provisions. Any dispute arising under or relating to
                      these terms shall be subject to the exclusive jurisdiction of the courts located in Bhubaneswar,
                      Odisha, India.
                    </Paragraph>
                    <Paragraph>
                      If any provision of these terms is found to be invalid or unenforceable, the remaining provisions
                      shall remain in full force and effect.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>

          <AnimateOnView animation="fade-up" delay={200}>
            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Return to Home
              </Link>
            </div>
          </AnimateOnView>
        </div>
      </section>

      {/* Decorative Element */}
      <div className="relative h-24 bg-amber-50 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/cream-watercolor-texture.jpg" alt="Background texture" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <Footer />
    </main>
  )
}
