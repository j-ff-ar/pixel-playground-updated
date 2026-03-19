export interface Participation {
  id: number;
  organization: string;
  title: string;
  period: string;
  location: string;
  points: string[];
}

export const participations: Participation[] = [
  {
    id: 1,
    organization:"IEEE Student Branch Nutech",
    title:"IEEE Dev Fest Volunteer",
    period:"2025",
    location:"Nutech University, Islamabad",
    points:[
      "Awarded with a certificate of appreciation by IEEE Student Branch Nutech for volunteering as an event coordinator for making the event smooth and successful.",
    ],
  },
  {
    id: 2,
    organization: "",
    title: "Coming Soon",
    period: "",
    location: "",
    points: ["Details will be added soon."],
  },
];
