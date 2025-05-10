import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnimateOnView } from "@/components/animate-on-view"
import { Heading1, Heading2, Paragraph } from "@/components/typography"

export default function PrivacyPolicy() {
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
            <Heading1 className="text-center text-4xl md:text-5xl font-bold text-primary mb-4">Privacy Policy</Heading1>
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
              At Sanatana Dharma Centre, we respect your privacy and are committed to protecting your personal data.
              This privacy policy explains how we collect, use, and safeguard your information.
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
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Information We Collect
                  </Heading2>
                  <div className="space-y-4">
                    <Paragraph>We collect personal information that you voluntarily provide to us when you:</Paragraph>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Register for an account or make a donation</li>
                      <li>Sign up for our newsletter or events</li>
                      <li>Contact us through our website or social media</li>
                      <li>Book accommodations or services</li>
                    </ul>
                    <Paragraph>
                      This information may include your name, email address, phone number, postal address, payment
                      information, and any other details you choose to provide.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    How We Use Your Information
                  </Heading2>
                  <div className="space-y-4">
                    <Paragraph>We use the information we collect for various purposes, including:</Paragraph>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Processing donations and transactions</li>
                      <li>Sending you newsletters and updates about our activities</li>
                      <li>Responding to your inquiries and providing support</li>
                      <li>Improving our website and services</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Data Protection</Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      We implement appropriate security measures to protect your personal information from unauthorized
                      access, alteration, disclosure, or destruction. These measures include internal reviews of our
                      data collection, storage, and processing practices, as well as physical security measures to guard
                      against unauthorized access to systems where we store personal data.
                    </Paragraph>
                    <Paragraph>
                      However, please be aware that no method of transmission over the internet or method of electronic
                      storage is 100% secure, and we cannot guarantee the absolute security of your data.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    Cookies and Tracking Technologies
                  </Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      Our website uses cookies and similar tracking technologies to enhance your browsing experience,
                      analyze website traffic, and personalize content. You can control cookies through your browser
                      settings and other tools.
                    </Paragraph>
                    <Paragraph>
                      We use both session cookies, which expire when you close your browser, and persistent cookies,
                      which stay on your device until they expire or you delete them.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Third-Party Links</Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      Our website may contain links to third-party websites, plugins, and applications. Clicking on
                      those links or enabling those connections may allow third parties to collect or share data about
                      you. We do not control these third-party websites and are not responsible for their privacy
                      statements.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div className="mb-12">
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Your Rights</Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      Depending on your location, you may have certain rights regarding your personal information,
                      including:
                    </Paragraph>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The right to access your personal information</li>
                      <li>The right to rectify inaccurate information</li>
                      <li>The right to erasure of your information</li>
                      <li>The right to restrict processing of your information</li>
                      <li>The right to data portability</li>
                      <li>The right to object to processing</li>
                    </ul>
                    <Paragraph>
                      To exercise any of these rights, please contact us using the information provided below.
                    </Paragraph>
                  </div>
                </div>
              </AnimateOnView>

              <AnimateOnView animation="fade-up">
                <div>
                  <Heading2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Contact Us</Heading2>
                  <div className="space-y-4">
                    <Paragraph>
                      If you have any questions about this privacy policy or our data practices, please contact us at:
                    </Paragraph>
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                      <p className="font-medium">Sanatana Dharma Centre</p>
                      <p>Email: privacy@sanatanadharmacenter.org</p>
                      <p>Phone: +91 123 456 7890</p>
                      <p>Address: Bhubaneswar, Odisha, India</p>
                    </div>
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
