"use client"

import React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BuyerPrivacy() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Buyer Privacy Policy</h1>
                    <p className="text-gray-500 mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base">Last updated: November 5, 2025</p>

                    <div className="prose prose-green max-w-none text-gray-600 space-y-4 sm:space-y-5 md:space-y-6 prose-sm sm:prose-base">
                        <p>This Privacy Policy describes how Tazty ("we", "us", "our") collects, uses, discloses, stores and protects personal information when you use the Tazty Buyer mobile application and related services (the "App" or the "Services"). By using the App or Services you consent to the collection and processing described in this Policy. Please read carefully.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">1. Your Consent & Policy Changes</h3>
                        <p>By using the Services you agree and consent to the collection, transfer, use, storage, disclosure and sharing of your information as described in this Policy. We may update this Policy periodically. When we make material changes we will provide notice in the App or by email. Continued use after notice means you accept the updated Policy.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">2. Information We Collect</h3>
                        <h4 className="font-bold text-gray-800 text-base sm:text-lg">2.1 Information You Provide</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Mobile number:</strong> Required for login via OTP. We do not store passwords.</li>
                            <li><strong>Profile details (optional):</strong> Name, email and any other profile fields you choose to provide.</li>
                            <li><strong>Addresses:</strong> Billing address and shipping/delivery address required to place and fulfil orders.</li>
                            <li><strong>Support & feedback:</strong> Messages, ratings and reviews you send to us.</li>
                        </ul>

                        <h4 className="font-bold text-gray-800 text-base sm:text-lg">2.2 Information Collected Automatically</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Usage data:</strong> App screens viewed, clicks, session duration, crash logs and analytics.</li>
                            <li><strong>Location data:</strong> Device GPS/location data when you give permission — used for delivery and service availability. We do not track you in the background without explicit consent.</li>
                            <li><strong>Cookies & identifiers:</strong> Device identifiers, mobile advertising IDs, pixels and similar technologies for analytics and performance.</li>
                        </ul>

                        <h4 className="font-bold text-gray-800 text-base sm:text-lg">2.3 Third-Party Data</h4>
                        <p>We may receive information about you from payment processors, delivery partners, marketing platforms or from the ONDC network (if applicable). We combine third-party data with data we collect to provide and improve the Services.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">3. How We Use Your Information</h3>
                        <p>We use data for the following purposes:</p>
                        <div className="overflow-x-auto -mx-4 sm:mx-0">
                            <table className="min-w-full text-left text-xs sm:text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 font-semibold">Purpose</th>
                                        <th className="px-4 py-2 font-semibold">Examples</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2">Authentication</td>
                                        <td className="px-4 py-2">Login using OTP and account identity verification</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Order processing</td>
                                        <td className="px-4 py-2">Billing, invoicing, assigning delivery partners, fulfilment</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Delivery & location</td>
                                        <td className="px-4 py-2">Service availability, route assignment, estimated time of arrival</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Customer support</td>
                                        <td className="px-4 py-2">Responding to queries, refunds, disputes</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Fraud & security</td>
                                        <td className="px-4 py-2">Detecting abuse, preventing transactions that violate law or policy</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Improvement & analytics</td>
                                        <td className="px-4 py-2">Analytics, product improvements, performance monitoring</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2">Marketing (only with consent)</td>
                                        <td className="px-4 py-2">Promotional messages, push notifications when you opt-in</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">4. Data Storage, Retention & Security</h3>
                        <p>All personal data is stored on servers located in India. We implement reasonable technical and organizational measures such as encryption in transit (HTTPS), access controls, and role-based access to protect your data. We retain personal information only as long as necessary for the purposes described, and as required by applicable law, after which we anonymise or delete it.</p>
                        <p className="italic bg-gray-50 p-3 rounded border-l-4 border-yellow-400"><strong>Reality check:</strong> While we take security seriously, no system is perfectly secure. We follow industry-standard practices to reduce risk.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">5. Disclosure & Sharing</h3>
                        <p>We share personal data only with service providers and partners who need the data to perform services on our behalf, and with legal authorities when required. Examples:</p>
                        <ul className="list-disc pl-5">
                            <li><strong>Delivery partners:</strong> To fulfil orders and coordinate delivery.</li>
                            <li><strong>Payment gateways:</strong> To process payments (we do not store full card data).</li>
                            <li><strong>Analytics & cloud providers:</strong> To operate and improve the App.</li>
                            <li><strong>Government / law enforcement:</strong> When required by law or to investigate fraud.</li>
                        </ul>
                        <p>We do not sell or rent personal data for marketing without your explicit consent. In the event of a merger or acquisition, personal data may be transferred to the new owner subject to this Policy.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">6. Your Rights</h3>
                        <p>Depending on the applicable law, you may have the right to access, correct, update or request deletion of your personal data, and to withdraw consent where processing is based on consent. To exercise rights, contact us at <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a>. We will respond as required by law.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">7. Account Deletion & Data Erasure Procedure</h3>
                        <p><strong>Important: Account deletion is not instantaneous.</strong> To delete your account you must submit a deletion request via our website or by emailing <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a>. The deletion process works as follows:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>User submits a deletion request via the external link: User Deletion Request.</li>
                            <li>Tazty team reviews the request to confirm identity and to check for outstanding orders, disputes, fraud investigations or legal obligations.</li>
                            <li>If eligible, Tazty will delete or anonymise personal data, except for records that must be retained by law (e.g., tax/audit records).</li>
                            <li>Tazty reserves the right to accept, delay or deny deletion requests where necessary to comply with legal or business obligations.</li>
                        </ol>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">8. Children’s Privacy</h3>
                        <p>The App is not intended for children under 13. We do not knowingly collect personal data of children under 13. If you believe we have collected such data, contact us immediately at <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a>.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">9. Cookies & Tracking Technologies</h3>
                        <p>We and our service providers use cookies, device identifiers and similar technologies for authentication, analytics and performance. You may control some tracking through device settings, but disabling identifiers may limit App functionality.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">10. Links to Other Services</h3>
                        <p>The App may link to third-party websites and services whose privacy practices we do not control. Review any third-party privacy policies before sharing personal data with them.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">11. International Transfers & Affiliates</h3>
                        <p>Your personal data may be transferred to affiliates or service providers outside India where necessary. We will take steps to ensure appropriate safeguards for international transfers as required by law.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">12. Governing Law & Jurisdiction</h3>
                        <p>This Policy is governed by the laws of India. Disputes will be subject to the courts at the jurisdiction of our registered office: Bangalore, Karnataka.</p>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">13. Contact & Grievance Officer</h3>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p>if you have questions, requests or grievances related to this Policy, contact us:</p>
                            <p><strong>Email:</strong> <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a></p>
                            <p><strong>Registered Office Address:</strong> No.58/2, 1st Floor, VP Road Sankalpa (KM Nilayam), Madivala, Bengaluru, Karnataka - 560068, India</p>
                            <p><strong>Operation Address:</strong> 1st Floor, 23, Kamaraj Nagar, 4th Street, Chinna Chokkikulam, Madurai, Tamil Nadu - 625002, India</p>
                            <p><strong>Grievance Officer:</strong> Tharik Ali R</p>
                        </div>

                        <h3 className="font-bold text-gray-900 text-lg sm:text-xl">14. Permissions & App Store / Play Store Disclosures</h3>
                        <p>Use this summary for App Store privacy label and Google Play Data Safety.</p>
                        <div className="overflow-x-auto -mx-4 sm:mx-0">
                            <table className="min-w-full text-left text-xs sm:text-sm border">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 font-semibold border">Permission / Data</th>
                                        <th className="px-4 py-2 font-semibold border">Purpose</th>
                                        <th className="px-4 py-2 font-semibold border">Required?</th>
                                        <th className="px-4 py-2 font-semibold border">On Device/Server?</th>
                                        <th className="px-4 py-2 font-semibold border">Shared?</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-2 border">Mobile number (OTP)</td>
                                        <td className="px-4 py-2 border">Authentication & account ID</td>
                                        <td className="px-4 py-2 border">Yes</td>
                                        <td className="px-4 py-2 border">Server</td>
                                        <td className="px-4 py-2 border">SMS Provider</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border">Profile info</td>
                                        <td className="px-4 py-2 border">Account profile, support</td>
                                        <td className="px-4 py-2 border">No</td>
                                        <td className="px-4 py-2 border">Server</td>
                                        <td className="px-4 py-2 border">Service providers</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border">Addresses</td>
                                        <td className="px-4 py-2 border">Order fulfilment</td>
                                        <td className="px-4 py-2 border">Yes</td>
                                        <td className="px-4 py-2 border">Server</td>
                                        <td className="px-4 py-2 border">Delivery partners</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 border">Location (GPS)</td>
                                        <td className="px-4 py-2 border">Delivery routing</td>
                                        <td className="px-4 py-2 border">Yes</td>
                                        <td className="px-4 py-2 border">Server</td>
                                        <td className="px-4 py-2 border">Delivery partners</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm text-gray-500 mt-8">© 2025 Tazty. All rights reserved. Owned by Valar Digital Commerce Private Limited.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
