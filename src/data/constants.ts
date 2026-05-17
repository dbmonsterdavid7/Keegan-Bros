import React from 'react';
import { Droplets, Trees, Shovel } from 'lucide-react';

export const services = [
  {
    title: "Landscaping",
    icon: React.createElement(Trees, { className: "w-6 h-6" }),
    items: ["Landscape Design & Build", "Landscape Maintenance", "Designs & Renderings", "Sod Installation", "Plant & Tree Installation"]
  },
  {
    title: "Lawn & Garden Care",
    icon: React.createElement(Shovel, { className: "w-6 h-6" }),
    items: ["Yard Cleanups", "Mulching", "Plant Trimming & Pruning"]
  },
  {
    title: "Irrigation",
    icon: React.createElement(Droplets, { className: "w-6 h-6" }),
    items: ["Sprinkler Repairs", "Sprinkler Startups", "System Maintenance", "French Drain Installation"]
  }
];

export const areas = ["Plymouth", "Canton", "Northville", "Livonia", "Novi", "Ann Arbor", "Farmington Hills", "Westland", "Ypsilanti", "South Lyon"];

export const phoneNumber = "(734) 865-8608";
