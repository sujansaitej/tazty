"use client"

import React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PartnerPrivacy() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-12">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Partner Privacy Policy</h1>
                    <p className="text-gray-500 mb-8">Last updated: November 5, 2025</p>

                    <div className="prose prose-green max-w-none text-gray-600 space-y-6">
                        <p>This unified Privacy Policy describes how Valar Digital Commerce Private Limited ("Tazty", "Valar", "we", "us", "our") collects, uses, shares and protects personal data when merchants/sellers ("you", "your") use (a) Tazty Restaurant Partner App and (b) Valar Seller App. This policy applies to seller/merchant users, their authorized staff, and prospective sellers who undergo KYC or onboarding with us, including those connecting via ONDC-compatible NPs.</p>

                        <h3 className="font-bold text-gray-900 text-xl">1. Your Consent & Policy Changes</h3>
                        <p>By using the Partner Platform you agree to the collection, transfer, use, storage and disclosure of information as described in this Policy. We may update this Policy periodically; material changes will be notified via the Platform or email. Continued use after notification constitutes acceptance of the updated Policy.</p>

                        <h3 className="font-bold text-gray-900 text-xl">2. Scope</h3>
                        <p>This policy governs personal data processed through the Tazty Restaurant Partner App and Valar Seller App, our merchant back-office portals, and related APIs/SDKs, including integrations with ONDC network participants, logistics partners, and payment service providers.</p>

                        <h3 className="font-bold text-gray-900 text-xl">3. What Data We Collect</h3>
                        <h4 className="font-bold text-gray-800">3.1 Information You Provide (KYC & Onboarding)</h4>
                        <ul className="list-disc pl-5">
                            <li><strong>Identity & KYC:</strong> name, business name, date of birth, GSTIN, FSSAI number, PAN, Aadhaar (limited details), etc.</li>
                            <li><strong>Contact & Account:</strong> phone, email, addresses, profile photos, authorized staff details.</li>
                            <li><strong>Business & Financial:</strong> bank account details, UPI VPA, settlement preferences, invoices, commission settings.</li>
                            <li><strong>Transaction & Order:</strong> order IDs, item details, taxes, discounts, settlements, refunds.</li>
                            <li><strong>Logistics & Location:</strong> pickup address, geocodes, delivery radius.</li>
                            <li><strong>Support & correspondence:</strong> messages, complaints, feedback.</li>
                        </ul>

                        <h4 className="font-bold text-gray-800">3.2 Information Collected Automatically</h4>
                        <p>Device & Technical info; Usage metadata; Location data where you grant permission.</p>

                        <h3 className="font-bold text-gray-900 text-xl">4. Why We Use Your Data</h3>
                        <ul className="list-disc pl-5">
                            <li>Onboarding & KYC</li>
                            <li>Order & payment processing</li>
                            <li>Operations (menu management, notifications)</li>
                            <li>Support & dispute resolution</li>
                            <li>Compliance & legal</li>
                            <li>Security & fraud prevention</li>
                            <li>Product improvement</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 text-xl">5. Legal Basis & Consent (India)</h3>
                        <p>We process personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and applicable IT laws/rules.</p>

                        <h3 className="font-bold text-gray-900 text-xl">6. Data Sharing & Recipients</h3>
                        <p>We share information only with parties who need it to provide services or where required by law, such as Payment & Payout Partners, Logistics Partners, ONDC Participants, Verification Vendors, and Government authorities.</p>

                        <h3 className="font-bold text-gray-900 text-xl">7. ONDC-Specific Disclosures</h3>
                        <p>For merchants operating via ONDC: certain order and catalog metadata flows to other network participants as required by the Beckn protocol and ONDC specifications.</p>

                        <h3 className="font-bold text-gray-900 text-xl">8. Data Storage, Security & Retention</h3>
                        <p>We may store/process data on servers located inside India. We implement reasonable technical and organizational safeguards. We retain personal data for as long as needed for the purposes described, and as required by law.</p>

                        <h3 className="font-bold text-gray-900 text-xl">9. Your Choices & Rights</h3>
                        <p>You have rights with respect to the personal data we hold about you, subject to legal limitations. These may include the right to access, correct, delete, or object to certain processing. Contact <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a> to exercise these rights.</p>

                        <h3 className="font-bold text-gray-900 text-xl">10. Account Deletion & Data Erasure Procedure</h3>
                        <p>To delete your account you must submit a request to <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a>. We verification identity and check for outstanding obligations before deleting/anonymising data.</p>

                        <h3 className="font-bold text-gray-900 text-xl">11. Contact & Grievance Officer</h3>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <p><strong>Email:</strong> <a href="mailto:support@tazty.in" className="text-[#00C853]">support@tazty.in</a> or <a href="mailto:support@valardigital.in" className="text-[#00C853]">support@valardigital.in</a></p>
                            <p><strong>Phone:</strong> +91 9952520699</p>
                            <p><strong>Grievance Officer:</strong> Tharik Ali R</p>
                            <p><strong>Registered Office:</strong> No.58/2, 1st Floor, VP Road Sankalpa (KM Nilayam), Madivala, Bengaluru, Karnataka - 560068, India</p>
                            <p><strong>Operational Office:</strong> 1st Floor, 23, Kamaraj Nagar, 4th Street, Chinna Chokkikulam, Madurai, Tamil Nadu - 625002, India</p>
                        </div>

                        <p className="text-sm text-gray-500 mt-8">© 2025 Tazty. All rights reserved. Owned by Valar Digital Commerce Private Limited.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
