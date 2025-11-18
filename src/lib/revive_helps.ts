import animationData1 from "../../public/revive_helps4.json";
import animationData2 from "../../public/revive_helps3.json";
import animationData3 from "../../public/revive_helps1.json";

export interface HelperSectionData {
    title: string;
    points: string[];
    animation?: any;
    bgColor?: string;
}

export const helpersSectionData: HelperSectionData[] = [
    {
        title: "Personalized Sustainability Consultations",
        points: [
            "Revive analyzes your industrial waste profile and provides clear, actionable insights for sustainable disposal.",
            "Our system evaluates material recyclability, segregation methods, and potential reuse value based on verified data.",
            "Our sustainability reports are reviewed by environmental experts to ensure your business achieves compliance and reduces its carbon footprint effectively."
        ],
        animation: animationData1,
        bgColor: "#cbe2cd"
    },
    {
        title: "Expert Guidance & Continuous Support",
        points: [
            "Receive tailored consultation from Revive sustainability researchers and waste management experts.",
            "Get recommendations for recycling partners, eco-friendly alternatives, and better handling methods based on your industry type.",
            "Access continuous assistance through our platform to meet ESG and CSR goals — from data tracking to waste certification."
        ],
        animation: animationData2,
        bgColor: "#ffedee"
    },
    {
        title: "Comprehensive Sustainability Reports",
        points: [
            "Get detailed breakdowns of your waste composition — plastic, metal, paper, e-waste, and mixed materials — with recycling and reuse potential clearly defined.",
            "Simplified performance dashboard showing CO₂ savings, landfill diversion, and ESG compliance progress for quick decision-making.",
            "Regular insights and data-driven updates from our research team to help your organization stay ahead of sustainability benchmarks."
        ],
        animation: animationData3,
        bgColor: "#f4edc6"
    }
];