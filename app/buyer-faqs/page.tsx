import React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BuyerFAQs() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12">
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-7 md:mb-8 text-gray-900">Frequently Asked Questions</h1>
                    <div className="prose prose-green max-w-none text-gray-600 prose-sm sm:prose-base">
                        <p className="lead text-sm sm:text-base">Find answers to common questions about using Tazty Food Order & Delivery App</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">1. What is Tazty?</h3>
                        <p>Tazty is a food ordering and delivery app connecting customers with restaurants in Madurai and nearby areas.</p>
                        <p className="italic bg-gray-50 p-4 rounded-lg border-l-4 border-[#00C853]">Note: Tazty does not cook or sell food. Restaurants prepare the food, and Tazty handles ordering and delivery.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">2. How do I create an account?</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Download the Tazty app</li>
                            <li>Sign up using your mobile number</li>
                            <li>Login using OTP (no password needed)</li>
                            <li>Add your name, email (optional), and address</li>
                            <li>Your account becomes active after OTP verification.</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">3. How do I place an order?</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Open the app → choose a restaurant</li>
                            <li>Browse the menu → add items to cart</li>
                            <li>Choose payment method → confirm order</li>
                            <li>You will receive real-time updates until delivery.</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">4. Why was my order not accepted?</h3>
                        <p>Possible reasons:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Item unavailable</li>
                            <li>High order volume</li>
                            <li>Restaurant temporarily closed</li>
                            <li>Operational/technical issues</li>
                            <li>Delivery location out of range</li>
                        </ul>
                        <p className="mt-2">If payment was taken, you will receive a full automatic refund.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">5. Can I cancel my order?</h3>
                        <p>The in-app cancellation feature will be available soon.</p>
                        <p>For now, please contact Tazty support if you want to cancel an order.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">6. How long does delivery take?</h3>
                        <p>Delivery time depends on restaurant prep time, distance, traffic, weather, and delivery partner availability.</p>
                        <p>You can track your order live in the app.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">7. How do I track my order?</h3>
                        <p>The app shows:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Restaurant acceptance</li>
                            <li>Preparation progress</li>
                            <li>Delivery partner assignment</li>
                            <li>Live location (when available)</li>
                            <li>Estimated delivery time</li>
                        </ul>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">8. What payment methods are supported?</h3>
                        <p>Currently supported:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>UPI</li>
                            <li>Debit/Credit Cards</li>
                            <li>Net Banking</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">Note: Wallets and Cash on Delivery (COD) are not available.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">9. Payment deducted but order not confirmed?</h3>
                        <p>A refund will be automatically issued.</p>
                        <p>Refund time: 2–5 working days (varies by bank).</p>
                        <p>If not received after 7 days, contact support.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">10. Wrong, missing, or damaged items?</h3>
                        <p>Please call or email customer care within 2 hours of receiving your order.</p>
                        <p>Share:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Photos or videos showing the issue</li>
                            <li>Your order number</li>
                        </ul>
                        <p className="mt-2">Support will review and assist with refunds or resolutions.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">11. Order marked delivered but not received?</h3>
                        <p>May happen due to incorrect address, unreachable phone, access issues, or delivery left with security/neighbor.</p>
                        <p>Report immediately to Tazty support for investigation.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">12. Ratings & reviews</h3>
                        <p>You can leave ratings and reviews after order completion.</p>
                        <p>Reviews may be removed only if they contain abuse, spam, fake content, or personal information.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">13. Are there delivery charges or extra fees?</h3>
                        <p>Charges may include:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Delivery charges</li>
                            <li>Packaging charges</li>
                            <li>Platform service fees</li>
                            <li>GST or other applicable taxes</li>
                        </ul>
                        <p className="mt-2">No surge fees are applied.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">14. Why is a restaurant not available?</h3>
                        <p>Reasons may include service area limits, restaurant closure, high demand, operational issues, or app downtime.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">15. How do I update my profile?</h3>
                        <p>Go to Profile → Edit Profile to update name, email, and addresses.</p>
                        <p>For mobile number changes, contact support.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">16. Is my data secure?</h3>
                        <p>Yes. Tazty uses secure encryption, protected payment gateways, access controls, and follows DPDP Act 2023 guidelines.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">17. How do I delete my account?</h3>
                        <p>Submit a request through:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>In-app support</li>
                            <li>Email: <a href="mailto:support@tazty.in" className="text-[#00C853] hover:underline">support@tazty.in</a></li>
                        </ul>
                        <p className="mt-2">Your data will be deleted/anonymized after verification and legal checks.</p>

                        <h3 className="font-bold text-gray-900 mt-6 sm:mt-7 md:mt-8 mb-3 sm:mb-4 text-base sm:text-lg">18. How do I contact Tazty support?</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Email: <a href="mailto:support@tazty.in" className="text-[#00C853] hover:underline">support@tazty.in</a></li>
                            <li>Phone: <a href="tel:+919952520699" className="text-[#00C853] hover:underline">+91 9952520699</a></li>
                            <li>In-app Support</li>
                        </ul>
                        <p className="mt-2">Include your order number for faster help.</p>

                        <hr className="my-8 border-gray-200" />
                        <p className="text-sm text-gray-500">© 2025 Tazty. All rights reserved. Owned by Valar Digital Commerce Private Limited.</p>
                        <p className="text-sm text-gray-500 mt-2">Still have questions? Contact us at <a href="mailto:support@tazty.in" className="text-[#00C853] hover:underline">support@tazty.in</a>.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
