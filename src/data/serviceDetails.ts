export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  image: string;
  category: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "landscape-design-build": {
    id: "landscape-design-build",
    title: "Landscape Design & Build",
    subtitle: "Custom outdoor living spaces tailored for Michigan homes.",
    description: "At Keegan Bros, we specialize in high-end landscape design and construction. Our team works closely with you to transform your vision into a stunning reality, creating functional and beautiful outdoor environments that enhance your property's value and your quality of life.",
    sections: [
      {
        title: "Why Custom Design Matters",
        content: "A well-designed landscape is more than just plants and grass; it's an extension of your home. In Southeast Michigan, our climate requires thoughtful planning to ensure your outdoor space remains beautiful and functional throughout the changing seasons. Our designs consider soil conditions, drainage, and local flora to create a sustainable and breathtaking landscape."
      },
      {
        title: "The Build Process",
        content: "Our build process is rooted in quality and precision. From the initial site preparation to the final planting, we use premium materials and proven techniques. Whether we're installing a new garden bed or a complex outdoor structure, our small, specialized team ensures every detail is executed to perfection."
      },
      {
        title: "Tailored Solutions for Your Property",
        content: "No two properties are the same. We take the time to understand your specific needs, preferences, and the unique characteristics of your land. Our goal is to provide a tailored solution that reflects your style while addressing practical considerations like privacy, maintenance, and usability."
      }
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    category: "Landscaping"
  },
  "landscape-maintenance": {
    id: "landscape-maintenance",
    title: "Landscape Maintenance",
    subtitle: "Professional upkeep for healthy, beautiful landscapes in Plymouth, MI.",
    description: "Comprehensive landscape maintenance tailored for vibrant outdoor spaces. Landscape maintenance ensures your outdoor spaces remain lush, orderly, and thriving throughout the year. Keegan Bros offers a full range of maintenance services, including weeding, trimming, pruning, mulching, and seasonal cleanups.",
    sections: [
      {
        title: "Why Ongoing Landscape Maintenance Matters",
        content: "Michigan's climate creates ideal growing conditions for lawns, trees, and ornamental plants, but it also requires consistent care to prevent overgrowth, pest issues, and plant stress. Without regular maintenance, landscapes can quickly become unmanageable, affecting both appearance and plant health."
      },
      {
        title: "Seasonal Maintenance for Year-Round Results",
        content: "Landscape care in Southeast Michigan changes throughout the year. Seasonal maintenance ensures your outdoor spaces receive the right care at the right time. Cooler months are ideal for pruning, mulching, and preparing plant beds for upcoming growth cycles, while warmer seasons require frequent trimming and weed control."
      },
      {
        title: "Customized Maintenance for Michigan's Growing Conditions",
        content: "In regions like Plymouth and Canton, the seasonal rain and temperature shifts encourage quick plant growth, but this can also lead to overgrowth and weed issues. We understand the importance of consistent maintenance to stay ahead of these challenges. Our team performs precise trimming and pruning based on plant species and seasonal needs."
      }
    ],
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=1000",
    category: "Landscaping"
  },
  "designs-renderings": {
    id: "designs-renderings",
    title: "Designs & Renderings",
    subtitle: "Visualize your dream landscape before we break ground.",
    description: "Our design and rendering services provide a clear roadmap for your landscape project. We use advanced tools to create detailed plans and realistic visualizations, allowing you to see exactly how your outdoor space will look and function before construction begins.",
    sections: [
      {
        title: "The Power of Visualization",
        content: "It can be difficult to imagine how different elements like patios, plants, and lighting will come together. Our high-quality renderings take the guesswork out of the process. You can explore different layouts, materials, and plant combinations to find the perfect fit for your home."
      },
      {
        title: "Detailed Planning for Better Results",
        content: "A great landscape starts with a great plan. Our designs include precise measurements, material specifications, and planting schedules. This level of detail ensures that the build phase goes smoothly and that the final result matches your expectations perfectly."
      }
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    category: "Landscaping"
  },
  "sod-installation": {
    id: "sod-installation",
    title: "Sod Installation",
    subtitle: "Instant green lawns for a transformed property.",
    description: "Get the lush, green lawn you've always wanted without the wait. Our professional sod installation services provide an immediate transformation for your property, using high-quality turf suited for Michigan's climate.",
    sections: [
      {
        title: "Immediate Results, Lasting Beauty",
        content: "Seeding a lawn can take months of careful tending and waiting. Sod installation gives you a beautiful, usable lawn in just a few days. We handle everything from site preparation and soil grading to the precise laying of the sod, ensuring a seamless and healthy start for your new grass."
      },
      {
        title: "Expert Site Preparation",
        content: "The secret to a successful sod installation is in the preparation. We carefully grade the area to ensure proper drainage and prepare the soil with the necessary nutrients. This creates the ideal environment for the sod to take root and thrive for years to come."
      }
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    category: "Landscaping"
  },
  "plant-tree-installation": {
    id: "plant-tree-installation",
    title: "Plant & Tree Installation",
    subtitle: "Enhance your landscape with professional planting services.",
    description: "Add life, color, and structure to your outdoor space with our plant and tree installation services. We select and install a wide variety of species that are well-suited to Southeast Michigan's environment.",
    sections: [
      {
        title: "Selecting the Right Species",
        content: "Choosing the right plants and trees is crucial for a successful landscape. We consider factors like sun exposure, soil type, and mature size to ensure that every addition to your garden will thrive. Our expertise helps you select species that provide year-round interest and beauty."
      },
      {
        title: "Professional Planting Techniques",
        content: "Proper planting is essential for the long-term health of your trees and shrubs. We use industry-best practices for hole preparation, root care, and initial watering. Our careful approach gives your new plants the best possible start in their new home."
      }
    ],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000",
    category: "Landscaping"
  },
  "yard-cleanups": {
    id: "yard-cleanups",
    title: "Yard Cleanups",
    subtitle: "Seasonal restoration for a pristine property.",
    description: "Keep your property looking its best with our comprehensive yard cleanup services. Whether it's spring preparation or fall leaf removal, we handle the hard work so you can enjoy a clean and orderly outdoor space.",
    sections: [
      {
        title: "Spring & Fall Cleanups",
        content: "Seasonal transitions in Michigan can leave your yard cluttered with debris. Our spring cleanups prepare your landscape for the growing season, while our fall cleanups protect your property during the winter months. We remove leaves, branches, and dead plant material to maintain a neat appearance."
      },
      {
        title: "Restoring Your Landscape",
        content: "A thorough cleanup can breathe new life into an overgrown or neglected yard. We don't just remove debris; we also edge beds, trim back perennials, and ensure that your entire landscape is ready for its next phase of growth."
      }
    ],
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=1000",
    category: "Lawn Care"
  },
  "mulching": {
    id: "mulching",
    title: "Mulching",
    subtitle: "Protect and beautify your garden beds.",
    description: "Professional mulching services that enhance the look of your landscape while providing essential benefits for your plants. We offer a variety of high-quality mulch options to suit your aesthetic preferences.",
    sections: [
      {
        title: "The Benefits of Mulch",
        content: "Mulch is more than just a decorative element. It helps retain soil moisture, suppresses weed growth, and regulates soil temperature. As it breaks down, it also adds valuable organic matter to the soil, improving its overall health and fertility."
      },
      {
        title: "Professional Installation",
        content: "We ensure that mulch is applied at the correct depth and kept away from plant stems and tree trunks to prevent rot. Our clean and precise installation gives your garden beds a polished, professional look that lasts throughout the season."
      }
    ],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000",
    category: "Lawn Care"
  },
  "plant-trimming-pruning": {
    id: "plant-trimming-pruning",
    title: "Plant Trimming & Pruning",
    subtitle: "Expert care for healthy, well-shaped plants.",
    description: "Maintain the health and beauty of your shrubs and small trees with our professional trimming and pruning services. We use precise techniques to promote growth and maintain the desired shape of your plants.",
    sections: [
      {
        title: "Promoting Plant Health",
        content: "Regular pruning is essential for removing dead or diseased wood and encouraging new growth. By thinning out dense branches, we improve air circulation and light penetration, which helps prevent pest and disease issues."
      },
      {
        title: "Aesthetic Shaping",
        content: "Our team has the expertise to shape your plants in a way that complements your overall landscape design. Whether you prefer a formal, structured look or a more natural appearance, we provide careful trimming that enhances the visual appeal of your property."
      }
    ],
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=1000",
    category: "Lawn Care"
  },
  "sprinkler-repairs": {
    id: "sprinkler-repairs",
    title: "Sprinkler Repairs",
    subtitle: "Fast, reliable fixes for your irrigation system.",
    description: "Don't let a broken sprinkler waste water or damage your lawn. Our expert repair services quickly identify and fix issues with your irrigation system, ensuring efficient and effective watering.",
    sections: [
      {
        title: "Diagnosing Irrigation Issues",
        content: "From broken heads and leaking pipes to controller malfunctions, we have the tools and experience to diagnose any irrigation problem. We work quickly to find the root cause and provide a lasting solution that restores your system's performance."
      },
      {
        title: "Efficient Watering Solutions",
        content: "A poorly functioning sprinkler system can lead to dry patches or overwatered areas. Our repairs ensure that your lawn and garden receive the precise amount of water they need, saving you money on your water bill and keeping your landscape healthy."
      }
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    category: "Irrigation"
  },
  "sprinkler-startups": {
    id: "sprinkler-startups",
    title: "Sprinkler Startups",
    subtitle: "Get your irrigation system ready for the season.",
    description: "Ensure your sprinkler system is ready for the Michigan growing season with our professional startup services. We carefully inspect and activate your system to ensure it's running perfectly from day one.",
    sections: [
      {
        title: "Spring Activation Process",
        content: "Starting up an irrigation system after a long winter requires care. We slowly pressurize the lines to prevent damage and check every zone for leaks or broken components. We also adjust sprinkler heads for optimal coverage and program your controller for the current season."
      },
      {
        title: "Preventative Inspections",
        content: "Our startup service includes a thorough inspection of your entire system. By identifying potential issues early, we can make repairs before they become major problems, ensuring your lawn stays green all summer long."
      }
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    category: "Irrigation"
  },
  "system-maintenance": {
    id: "system-maintenance",
    title: "System Maintenance",
    subtitle: "Ongoing care for peak irrigation performance.",
    description: "Regular maintenance is the key to a long-lasting and efficient irrigation system. We provide ongoing inspections and adjustments to keep your sprinklers running at their best throughout the year.",
    sections: [
      {
        title: "Regular Inspections & Adjustments",
        content: "As the season progresses, your landscape's watering needs can change. We provide regular check-ups to adjust sprinkler heads, update controller settings, and ensure that every part of your system is working efficiently."
      },
      {
        title: "Maximizing Efficiency",
        content: "Our maintenance services focus on water conservation and system longevity. By keeping your irrigation system in top shape, we help you avoid wasted water and extend the life of your equipment, saving you money in the long run."
      }
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    category: "Irrigation"
  },
  "french-drain-installation": {
    id: "french-drain-installation",
    title: "French Drain Installation",
    subtitle: "Effective drainage solutions for a dry, stable property.",
    description: "Protect your home and landscape from water damage with our professional French drain installation services. We design and install effective drainage systems that manage excess water and prevent pooling.",
    sections: [
      {
        title: "Solving Drainage Problems",
        content: "Standing water can lead to foundation issues, basement leaks, and damaged landscapes. A French drain is a proven solution for directing water away from vulnerable areas. We carefully plan the installation to ensure maximum effectiveness and minimal disruption to your property."
      },
      {
        title: "Durable & Discreet Design",
        content: "Our French drains are built to last using high-quality materials. We design them to be discreet, often integrating them seamlessly into your existing landscape so they provide essential drainage without affecting your property's aesthetic."
      }
    ],
    image: "https://images.unsplash.com/photo-1558904541-efa8c1965f1e?auto=format&fit=crop&q=80&w=1000",
    category: "Irrigation"
  }
};
