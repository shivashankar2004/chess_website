import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function PrivacyPolicy() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className=" flex flex-col items-center justify-center pt-32 px-4 lg:px-32  bg-gray-100 min-h-screen">
        <h1
          className="text-4xl font-extrabold mb-8 text-center text-gray-800 border-b-4 border-blue-500 pb-4"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-mirror="false"
        >
          Privacy Policy
        </h1>
        <div
          className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mb-10 leading-relaxed"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-mirror="false"
        >
          <p>
            This privacy policy is an electronic record in the form of an
            electronic contract formed under the information technology act,
            2000 and the rules made there under and the amended provisions
            pertaining to electronic documents / records in various statutes as
            amended by the information technology act, 2000. This privacy policy
            does not require any physical, electronic or digital signature.
          </p>

          <p className="mt-4">
            WISDOM HUB CHESS ACADEMY and its affiliates and Associate Companies
            is/are concerned about the privacy of the data and information of
            users (including sellers and buyers/customers whether registered or
            non-registered), offering, selling or purchasing products or
            services on websites, mobile sites or mobile applications
            (“Website”) on the Website and otherwise doing business with us.
            “Associate Companies” here shall have the same meaning as ascribed
            in Companies Act, 2013.
          </p>

          <p className="mt-4">
            This Privacy Policy is a contract between you and the respective
            entity whose website you use or access or you otherwise deal with.
            This Privacy Policy shall be read together with the respective Terms
            Of Use or other terms and condition of the respective entity and its
            respective website or nature of business of the Website.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">
            Collection of Personally Identifiable Information
          </h2>
          <p className="mt-4">
            We collect information from you when you place an order or subscribe
            to our website. When ordering or registering on our site, as
            appropriate, you may be asked to enter your: name, e-mail address,
            mailing address, phone number or credit card information.
          </p>

          <p className="mt-4">
            Our primary goal in doing so is to provide you a safe, efficient,
            smooth and customized experience.
          </p>

          <p className="mt-4">
            The information we learn from customers helps us personalize and
            continually improve your experience of shopping from our web store.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">
            Use of Demographic / Profile Data
          </h2>
          <p className="mt-4">
            We use personal information to provide the services you request. To
            the extent we use your personal information to market to you, we
            will provide you the ability to opt-out of such uses.
          </p>

          <p className="mt-4">
            We use your personal information to resolve disputes; troubleshoot
            problems; help promote a safe service; collect money; measure
            consumer interest in our products and services, inform you about
            online and offline offers, products, services, and updates.
          </p>

          <p className="mt-4">
            In our efforts to continually improve our product and service
            offerings, we collect and analyze demographic and profile data about
            our user’s activity on our Website.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">Cookies</h2>
          <p className="mt-4">
            Yes, Cookies are small files that a site or its service provider
            transfers to your computer’s hard drive through your Web browser (if
            you allow it) that enables the sites or service providers systems to
            recognize your browser and capture and remember certain information.
            We use cookies to help us remember and process the items in your
            shopping cart. The cookies do not contain any of your personally
            identifiable information.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">
            Sharing of Personal Information
          </h2>
          <p className="mt-4">
            Your providing the Information to WISDOM HUB CHESS ACADEMY and its
            consequent storage, collection, usage, transfer, access or
            processing of the same shall not be in violation of any third party
            agreement, laws, charter documents, judgments, orders and decrees.
          </p>

          <p className="mt-4">
            We may disclose personal information if required to do so by law or
            in the good faith belief that such disclosure is reasonably
            necessary to respond to subpoenas, court orders, or other legal
            process.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">
            Security Precautions
          </h2>
          <p className="mt-4">
            We strive to ensure the security of your Personal Information and to
            protect your personal information against unauthorized access or
            unauthorized alteration, disclosure or destruction. Whenever you
            change or access your account information, we offer the use of a
            secure server.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">
            Choice/Opt-Out
          </h2>
          <p className="mt-4">
            We provide all users with the opportunity to opt-out of receiving
            non-essential (promotional, marketing-related) communications from
            us on behalf of our partners, and from us in general, after setting
            up an account.
          </p>

          <p className="mt-4">
            If we decide to change our privacy policy, we will post those
            changes on this page.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">
            Your Approval
          </h2>
          <p className="mt-4">
            By using the Website and/or by providing your information, you
            consent to the collection and use of the information you disclose on
            the Website in accordance with this Privacy Policy.
          </p>

          <p className="mt-4">
            If we decide to change our privacy policy, we will post those
            changes on this page.
          </p>

          <h2 className="text-xl font-bold mt-8 text-blue-600">Contact Us</h2>
          <p className="mt-4 mb-10">
            If there are any questions regarding this privacy policy you may
            contact us using the information below.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
