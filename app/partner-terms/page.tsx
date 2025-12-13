"use client"

import React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PartnerTerms() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Partner Terms & Conditions</h1>
                    <p className="text-gray-500 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base">Last updated: November 5, 2025</p>

                    <div className="prose prose-green max-w-none text-gray-600 space-y-4 sm:space-y-5 md:space-y-6 prose-sm sm:prose-base">
                        <p>These Terms and Conditions ("Terms" or "Agreement") form a legally binding agreement between you ("Partner", "Seller", "Restaurant", "Merchant" or "you") and Valar Digital Commerce Pvt. Ltd. operating as Tazty ("Tazty", "Valar", "we", "us", "our") governing your participation as a seller/partner on the Tazty platform, Valar Seller App, mobile applications, website, and related services (collectively, the "Platform"), including integrations with ONDC network participants where applicable. By registering as a Partner, accessing or using the Platform, or accepting orders through the Platform, you accept and agree to be bound by these Terms. If you do not agree, do not use the Platform as a Partner.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">1. Regulatory Status</h3>
                        <p>Tazty operates as a technology platform and marketplace intermediary under the Information Technology Act, 2000 and in accordance with the Consumer Protection (E-Commerce) Rules, 2020. Tazty facilitates transactions between Buyers and Partners but does not manufacture, prepare, pack, sell or deliver goods directly. Partners operate as independent sellers and are responsible for their own business operations, compliance, and legal obligations. Delivery services for orders placed through the Tazty platform are managed and coordinated by Valar Digital Commerce Private Limited (or its designated logistics partners) to ensure timely and efficient fulfillment of food delivery orders. For merchants operating via ONDC, transactions are subject to ONDC network protocols and specifications.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">2. Definitions</h3>
                        <ul className="list-disc pl-5">
                            <li><strong>Partner/Seller</strong> — restaurant, merchant, retailer, or other business entity offering products or services on the Platform.</li>
                            <li><strong>Buyer/User</strong> — any individual or entity that places orders through the Platform.</li>
                            <li><strong>Delivery Partner</strong> — independent third party contracted by Valar Digital Commerce Private Limited to pick up and deliver orders placed through the Tazty platform. Delivery services are managed and coordinated by Valar to ensure efficient order fulfillment.</li>
                            <li><strong>Order</strong> — a confirmed request for goods or services placed by a Buyer via the Platform.</li>
                            <li><strong>Platform</strong> — Tazty's mobile application, website, and related technology services.</li>
                            <li><strong>Commission</strong> — the fee charged by Tazty for facilitating transactions on the Platform.</li>
                            <li><strong>Service Area</strong> — the geographic area in which Tazty operates and where Partners may receive orders.</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">3. Eligibility and Partner Registration</h3>
                        <p>To become a Partner on the Platform, you must:</p>
                        <ul className="list-disc pl-5">
                            <li>Be a legally registered business entity (proprietorship, partnership, LLP, or company) in India;</li>
                            <li>Possess all necessary licenses, permits, and registrations required to operate your business, including but not limited to FSSAI license, GST registration, and any local municipal licenses;</li>
                            <li>Have a valid business bank account in India;</li>
                            <li>Be located within Tazty's service area (currently Madurai, Tamil Nadu);</li>
                            <li>Provide accurate and complete information during registration, including business name, address, contact details, tax identification numbers, and bank account information;</li>
                            <li>Maintain the confidentiality of your Partner account credentials and notify Tazty immediately of any unauthorized access.</li>
                        </ul>
                        <p>Tazty reserves the exclusive right to assign, manage, onboard, suspend, or terminate partners on the Platform at its sole discretion, in accordance with these Terms and applicable policies. Tazty may verify your eligibility, request additional documentation, and reject or suspend Partner applications at its sole discretion. Tazty maintains full authority to determine partner eligibility, manage partner relationships, and make decisions regarding partner participation on the Platform.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">4. Account Setup and Onboarding</h3>
                        <p>Upon approval of your Partner application, you will be required to:</p>
                        <ul className="list-disc pl-5">
                            <li>Complete your Partner profile with accurate business information, menu items, pricing, images, and descriptions;</li>
                            <li>Set up your operating hours and availability on the Platform;</li>
                            <li>Configure payment and settlement preferences;</li>
                            <li>Undergo training on Platform usage, order management, and Tazty policies (if required);</li>
                            <li>Agree to the Commission structure and payment terms.</li>
                        </ul>
                        <p>You are responsible for maintaining accurate and up-to-date information on your Partner profile. Tazty may suspend or terminate accounts with inaccurate, misleading, or outdated information.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">5. Partner Obligations and Responsibilities</h3>
                        <h4 className="font-bold text-gray-800 text-base sm:text-lg">5.1 Product and Service Quality</h4>
                        <p>You are solely responsible for:</p>
                        <ul className="list-disc pl-5">
                            <li>The quality, safety, freshness, and compliance of all products and services you offer on the Platform;</li>
                            <li>Accurate product descriptions, pricing, nutritional information, allergen information, and ingredient lists;</li>
                            <li>Proper food handling, storage, preparation, and packaging in accordance with FSSAI guidelines and applicable food safety laws;</li>
                            <li>Maintaining hygiene standards and food safety certifications;</li>
                            <li>Compliance with all applicable laws, regulations, and standards including FSSAI, GST, labor laws, and local municipal regulations.</li>
                        </ul>

                        <h4 className="font-bold text-gray-800 text-base sm:text-lg">5.2 Order Fulfillment</h4>
                        <p>You agree to accept and fulfill orders placed through the Platform in a timely manner, subject to your operating hours and availability; Prepare orders according to the specifications provided by Buyers and within the estimated preparation time displayed on the Platform; Notify Tazty immediately if you are unable to fulfill an order; Ensure that orders are ready for pickup by Delivery Partners at the agreed time; Package orders appropriately to maintain quality and safety during transit.</p>

                        <h4 className="font-bold text-gray-800 text-base sm:text-lg">5.3 Pricing and Menu Management</h4>
                        <p>You are responsible for setting accurate prices for all menu items displayed on the Platform. All item pricing must be in accordance with market standards and must be reasonable, fair, and competitive. Tazty reserves the right to review, monitor, and take decisions regarding item pricing, quality standards, and customer complaints.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">6. Commission, Fees and Payment Terms</h3>
                        <p>Tazty charges a commission fee (the "Commission") on each order fulfilled through the Platform. The Commission rate, payment schedule, and any additional fees will be communicated to you during onboarding. Settlement amounts will be Order value (excluding taxes) minus Commission and any applicable fees. Partners are responsible for collecting/remitting GST.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">7. Order Management and Cancellations</h3>
                        <p>Orders placed through the Platform are binding commitments. You must accept or reject orders promptly. You may cancel orders only for legitimate reasons including item unavailability or operational constraints. Frequent cancellations may result in penalties.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">8. Restaurant Visibility, Ratings, Reviews and Listing Management</h3>
                        <p>Buyers may rate and review your products. Restaurant visibility on the Tazty food delivery app refers to how prominently your restaurant appears in search results. Visibility is dynamic and may vary based on multiple factors including rating score, delivery time, and customer location. Tazty reserves the exclusive right to manage, control, and adjust restaurant listings and visibility on the Platform.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">9. Prohibited Activities and Partner Conduct</h3>
                        <p>Partners must not engage in prohibited activities including providing false information, manipulating ratings, offering illegal products, or circumventing Platform fees. Violation may result in account termination.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">10. Intellectual Property</h3>
                        <p>All Platform content including trademarks, logos, software, designs, and documentation are the exclusive property of Tazty or its licensors.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">11. Suspension, Termination and Account Closure</h3>
                        <p>Tazty may suspend or terminate your Partner account immediately, without prior notice, for breach of these Terms, fraudulent activity, or poor performance metrics.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">12. Indemnity</h3>
                        <p>You agree to indemnify, defend and hold harmless Tazty and its affiliates from any claims arising out of your use of the Platform or breach of these Terms.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">13. Limitation of Liability</h3>
                        <p>To the fullest extent permitted by law, Tazty's liability shall be limited to the amount of Commission paid by you to Tazty in the three (3) months preceding the claim.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">14. Dispute Resolution and Governing Law</h3>
                        <p>These Terms are governed by the laws of India. Disputes will be subject to the courts of Bangalore, Karnataka.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">15. Grievance Redressal</h3>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p><strong>Name:</strong> Tharik Ali R</p>
                            <p><strong>Email:</strong> <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a> or <a href="mailto:support@valardigital.in" className="text-[#00C853]">support@valardigital.in</a></p>
                            <p><strong>Phone:</strong> +91 8073294079</p>
                            <p><strong>Address:</strong> Valar Digital Commerce Pvt. Ltd., Madurai, Tamil Nadu</p>
                        </div>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">16. Contact</h3>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p><strong>Valar Digital Commerce Pvt. Ltd. (Tazty)</strong></p>
                            <p>Partner Support Email: <a href="mailto:partners@tazty.in" className="text-[#00C853]">partners@tazty.in</a></p>
                            <p>General Support: <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a></p>
                            <p>Legal: <a href="mailto:legal@tazty.in" className="text-[#00C853]">legal@tazty.in</a></p>
                            <p>Phone: +91 8073294079</p>
                            <p>Registered Address: No.58/2, 1st Floor, VP Road Sankalpa (KM Nilayam), Madivala, Bengaluru, Karnataka - 560068</p>
                            <p>Operational Address: 1st Floor, 23, Kamaraj Nagar, 4th Street, Chinna Chokkikulam, Madurai - 625002, Tamil Nadu</p>
                        </div>

                        <p className="text-sm text-gray-500 mt-8">© 2025 Tazty. All rights reserved. Owned by Valar Digital Commerce Private Limited.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
