"use client"

import React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BuyerTerms() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Buyer Terms & Conditions</h1>
                    <p className="text-gray-500 mb-8">Last updated: November 5, 2025</p>

                    <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                        <p>These Terms and Conditions ("Terms") form a legally binding agreement between you ("User" or "Buyer") and Valar Digital Commerce Pvt. Ltd. operating as Tazty ("Tazty", "we", "us", "our") governing your access to and use of the Tazty mobile application, website, and related services (collectively, the "Platform") as a buyer of food and related services. By accessing or using the Platform you accept and agree to be bound by these Terms. If you do not agree, do not use the Platform.</p>

                        <h3 className="font-bold text-gray-900 text-xl">1. Regulatory Status</h3>
                        <p>Tazty operates as a technology platform and marketplace intermediary. We are an intermediary under the Information Technology Act, 2000 and act in accordance with the Consumer Protection (E-Commerce) Rules, 2020. We do not manufacture, prepare, pack or sell goods directly; Sellers and Delivery Partners operate independently.</p>

                        <h3 className="font-bold text-gray-900 text-xl">2. Definitions</h3>
                        <ul className="list-disc pl-5">
                            <li><strong>User</strong> — any individual accessing or using the Platform.</li>
                            <li><strong>Seller</strong> — restaurant, merchant, retailer, or other third party offering products or services on the Platform.</li>
                            <li><strong>Delivery Partner</strong> — independent third party contracted to pick up and deliver orders.</li>
                            <li><strong>Order</strong> — a confirmed request for goods or services placed via the Platform.</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 text-xl">3. Eligibility</h3>
                        <p>To use the Platform you must be at least 18 years old and legally competent to enter into contracts under applicable law. You must register with accurate information and are responsible for maintaining the confidentiality of your account credentials.</p>

                        <h3 className="font-bold text-gray-900 text-xl">4. Account Registration and Authentication</h3>
                        <p>Authentication is performed via mobile number and One-Time Password (OTP). You are responsible for all activity associated with your account. Notify us immediately if you suspect unauthorized access. Tazty may require additional verification where necessary for fraud prevention or regulatory compliance.</p>

                        <h3 className="font-bold text-gray-900 text-xl">5. Services Provided by the Platform</h3>
                        <p>The Platform lists product and service offerings provided by independent Sellers, transmits Orders to Sellers, facilitates assignment of Delivery Partners and enables payment processing. Tazty is a facilitator and does not assume title to goods or operate as a Seller or Delivery Partner.</p>

                        <h3 className="font-bold text-gray-900 text-xl">6. Product Listings and Seller Responsibilities</h3>
                        <p>Sellers are solely responsible for the accuracy of product descriptions, pricing, nutritional and allergen information, packaging, and compliance with applicable laws including FSSAI and GST. Tazty does not endorse or warrant Seller representations. If you have allergies, dietary restrictions or medical conditions, verify with the Seller prior to ordering.</p>

                        <h3 className="font-bold text-gray-900 text-xl">7. Order Placement, Acceptance and Cancellation</h3>
                        <p>An Order is deemed confirmed only when payment (except COD) is authorized and the Seller accepts the Order. Sellers may cancel Orders for legitimate reasons including item unavailability or operational constraints. Cancellation by Seller prior to preparation will result in a full refund where payment was collected.</p>
                        <p>If you cancel an Order, refunds are at the Seller's and Tazty's discretion depending on the stage of preparation; if preparation has commenced, refunds may be refused.</p>

                        <h3 className="font-bold text-gray-900 text-xl">8. Delivery Terms</h3>
                        <p>Delivery timelines provided on the Platform are estimates only. After pickup, the Delivery Partner is responsible for transit condition and delivery execution. Failed deliveries caused by incorrect address, inability to contact the recipient, refusal to accept delivery or refusal to provide access will be treated as delivered for the purposes of refunds and may not be refunded.</p>

                        <h3 className="font-bold text-gray-900 text-xl">9. Pricing, Taxes and Fees</h3>
                        <p>Prices, taxes and fees displayed on the Platform are provided by Sellers and are subject to change. Additional charges may apply including delivery fees, packaging charges, surge pricing and platform service fees. All applicable taxes are displayed during checkout.</p>

                        <h3 className="font-bold text-gray-900 text-xl">10. Payments and Refunds</h3>
                        <p>Payments are processed via third-party payment processors. Tazty does not store full payment instrument details. Refunds are processed in accordance with the Cancellation & Refund Policy and applicable law. Refund eligibility includes: (i) Seller cancellation before preparation, (ii) payment captured but Order not confirmed, and (iii) valid claims for wrong/damaged/expired items with supporting evidence.</p>
                        <p><strong>Evidence requirement:</strong> To support a refund claim for damaged, wrong or expired goods you must provide clear photos or videos and lodge the complaint within two (2) hours of delivery. Tazty will investigate and its decision shall be final subject to applicable law.</p>

                        <h3 className="font-bold text-gray-900 text-xl">11. Ratings, Reviews and User Content</h3>
                        <p>By posting reviews, photos or other content you grant Tazty a perpetual, worldwide, royalty-free, sublicensable license to use, reproduce, modify, publish and display such content on the Platform and for promotional purposes. You represent that you own or have rights to the content you post and that it does not infringe third-party rights.</p>

                        <h3 className="font-bold text-gray-900 text-xl">12. User Conduct and Prohibited Activities</h3>
                        <p>Users must not engage in prohibited activities including but not limited to:</p>
                        <ul className="list-disc pl-5">
                            <li>Providing false information, impersonation or fraud;</li>
                            <li>Posting defamatory, abusive, obscene or unlawful content;</li>
                            <li>Abusing or harassing Sellers, Delivery Partners or Tazty staff;</li>
                            <li>Using automated means (bots, scrapers) to access or extract Platform data;</li>
                            <li>Manipulating promotions, discounts, referral programs or engaging in multiple account abuse.</li>
                        </ul>
                        <p>Violation may result in warnings, suspension, permanent account termination and legal action.</p>

                        <h3 className="font-bold text-gray-900 text-xl">13. Intellectual Property</h3>
                        <p>All Platform content including trademarks, logos, software, designs and documentation are the exclusive property of Tazty or its licensors. Use is limited to the license granted herein. You shall not copy, modify, distribute, reproduce, reverse-engineer or create derivative works without express written consent.</p>

                        <h3 className="font-bold text-gray-900 text-xl">14. Suspension, Termination and Account Deletion</h3>
                        <p>Tazty may suspend or terminate accounts for breach of these Terms, fraudulent activity or legal reasons. Account deletion requests initiated by Users will follow the process set out in the Privacy Policy. Tazty may retain data when required by law, for tax, audit, or fraud-prevention purposes.</p>

                        <h3 className="font-bold text-gray-900 text-xl">15. Indemnity</h3>
                        <p>You agree to indemnify, defend and hold harmless Tazty and its affiliates, officers, directors, employees and agents from and against any claims, losses, liabilities, damages, costs and expenses (including legal fees) arising out of your use of the Platform, violation of these Terms, or infringement of any rights of third parties.</p>

                        <h3 className="font-bold text-gray-900 text-xl">16. Limitation of Liability</h3>
                        <p>To the fullest extent permitted by law, Tazty's liability for any claim arising out of or related to these Terms or the Platform shall be limited to the amount equal to the value of the Order giving rise to the claim. Under no circumstances shall Tazty be liable for indirect, incidental, consequential, special or punitive damages, including loss of profits, data or business interruption.</p>

                        <h3 className="font-bold text-gray-900 text-xl">17. Force Majeure</h3>
                        <p>Tazty will not be liable for any failure or delay resulting from events outside its reasonable control, including natural disasters, epidemics, war, civil disturbance, government actions, internet or telecom failures, strikes, or extreme weather.</p>

                        <h3 className="font-bold text-gray-900 text-xl">18. Dispute Resolution and Governing Law</h3>
                        <p>These Terms are governed by the laws of India. Parties will attempt to resolve disputes amicably via support channels. If unresolved, disputes will proceed to mediation, followed by binding arbitration under the Arbitration and Conciliation Act, 1996. Jurisdiction for any court proceedings (where arbitration is not applicable) will be the courts of Bangalore, Karnataka.</p>

                        <h3 className="font-bold text-gray-900 text-xl">19. Grievance Redressal</h3>
                        <p>For grievances under the Information Technology Act and Consumer Protection rules, contact our Grievance Officer:</p>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p><strong>Name:</strong> Tharik Ali R</p>
                            <p><strong>Email:</strong> <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a></p>
                            <p><strong>Phone:</strong> +91 8073294079</p>
                            <p><strong>Address:</strong> Valar Digital Commerce Pvt. Ltd., Madurai, Tamil Nadu</p>
                        </div>
                        <p>Response timeline: We will acknowledge receipt within seven (7) business days and resolve substantively within fifteen (15) business days where practicable.</p>

                        <h3 className="font-bold text-gray-900 text-xl">20. Privacy</h3>
                        <p>Your use of the Platform is subject to our Privacy Policy, which explains how we collect and use personal data.</p>

                        <h3 className="font-bold text-gray-900 text-xl">21. Amendments</h3>
                        <p>Tazty may modify these Terms at any time. Material changes will be notified via the Platform or email. Continued use following notification constitutes acceptance of the amended Terms.</p>

                        <h3 className="font-bold text-gray-900 text-xl">22. Contact</h3>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p><strong>Valar Digital Commerce Pvt. Ltd. (Tazty)</strong></p>
                            <p>Email: <a href="mailto:legal@tazty.in" className="text-[#00C853]">legal@tazty.in</a></p>
                            <p>Support: <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a></p>
                            <p>Phone: +91 8073294079</p>
                            <p><strong>Registered Address:</strong> No.58/2, 1st Floor, VP Road Sankalpa (KM Nilayam), Madivala, Bengaluru, Karnataka - 560068</p>
                            <p><strong>Operational Address:</strong> 1st Floor, 23, Kamaraj Nagar, 4th Street, Chinna Chokkikulam, Madurai - 625002, Tamil Nadu</p>
                        </div>

                        <p className="text-sm text-gray-500 mt-8">© 2025 Tazty. All rights reserved. Owned by Valar Digital Commerce Private Limited.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
