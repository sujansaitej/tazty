import React from 'react';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturesGrid } from "@/components/features-grid";

export default function Features() {
    return (
        <main className="min-h-screen scroll-smooth">
            <Navbar />
            <FeaturesGrid />
            <Footer />
        </main>
    );
}

