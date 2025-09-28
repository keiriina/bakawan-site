export interface Story {
  id: string
  title: string
  description: string
  image: string
  date: string
  location: string
  author: string
  content: {
    intro: string
    quote: string
    quoteAuthor: string
    details: string[]
    impact: string
  }
}

export const storiesData: Story[] = [
  {
    id: "community-restoration-bataan",
    title: "Community-Led Restoration in Bataan",
    description: "Local fishermen unite to restore 50 hectares of degraded mangrove coastline",
    image: "/community-volunteers-planting-young-mangrove-seedl.jpg",
    date: "March 15, 2024",
    location: "Bataan Peninsula",
    author: "Maria Santos",
    content: {
      intro:
        "In the coastal waters of Bataan Peninsula, a remarkable transformation is taking place. What was once a barren coastline devastated by decades of aquaculture and urban development is now flourishing with new mangrove growth, thanks to the dedicated efforts of local fishing communities.",
      quote:
        "We realized that protecting our mangroves means protecting our livelihood. The fish are coming back, and so is our hope.",
      quoteAuthor: "Roberto Cruz, Local Fisherman",
      details: [
        "Over 200 community volunteers participated in the restoration effort",
        "15,000 mangrove seedlings planted across 50 hectares",
        "Established community-based monitoring system",
        "Created sustainable livelihood programs for local families",
        "Implemented waste management initiatives to prevent future degradation",
      ],
      impact:
        "The restoration has already shown promising results with increased fish populations and improved coastal protection. The project serves as a model for community-driven conservation efforts across the Philippines.",
    },
  },
  {
    id: "youth-environmental-champions",
    title: "Youth Environmental Champions",
    description: "Students from local schools become guardians of mangrove ecosystems",
    image: "/close-up-of-mangrove-prop-roots-extending-into-cle.jpg",
    date: "February 28, 2024",
    location: "Palawan",
    author: "Dr. Elena Rodriguez",
    content: {
      intro:
        "Education and environmental stewardship go hand in hand in this inspiring initiative where high school students from Palawan have become the newest guardians of their local mangrove ecosystems.",
      quote:
        "These young people are not just learning about conservation – they're actively shaping the future of their environment.",
      quoteAuthor: "Dr. Elena Rodriguez, Marine Biologist",
      details: [
        "150 students from 5 schools actively participating",
        "Monthly monitoring and data collection activities",
        "Student-led awareness campaigns in their communities",
        "Establishment of school-based nurseries for mangrove seedlings",
        "Integration of mangrove conservation into school curriculum",
      ],
      impact:
        "The program has not only contributed to mangrove conservation but has also inspired a new generation of environmental advocates who are spreading awareness throughout their communities.",
    },
  },
  {
    id: "biodiversity-recovery-success",
    title: "Biodiversity Recovery Success",
    description: "Restored mangrove areas show remarkable return of marine life diversity",
    image: "/diverse-marine-life-including-colorful-fish-and-cr.jpg",
    date: "January 20, 2024",
    location: "Bohol",
    author: "Dr. James Lim",
    content: {
      intro:
        "Five years after the initial restoration efforts began in Bohol, scientific monitoring reveals an extraordinary recovery of marine biodiversity in the restored mangrove areas, exceeding all expectations.",
      quote:
        "The speed of recovery has been remarkable. We're seeing species return that haven't been documented in these waters for over a decade.",
      quoteAuthor: "Dr. James Lim, Marine Ecologist",
      details: [
        "40% increase in fish species diversity over 5 years",
        "Return of endangered species including juvenile sharks and rays",
        "Establishment of critical nursery habitats for commercial fish species",
        "Recovery of coral reef systems adjacent to mangrove areas",
        "Documentation of rare bird species returning to the area",
      ],
      impact:
        "This success story demonstrates the resilience of marine ecosystems when given the chance to recover, providing hope and scientific evidence for scaling up restoration efforts nationwide.",
    },
  },
  {
    id: "climate-resilience-initiative",
    title: "Climate Resilience Initiative",
    description: "Mangrove restoration provides natural defense against rising sea levels",
    image: "/aerial-view-of-lush-green-mangrove-forest-with-int.jpg",
    date: "December 10, 2023",
    location: "Mindanao",
    author: "Dr. Sarah Chen",
    content: {
      intro:
        "As climate change intensifies coastal threats, the mangrove restoration project in Mindanao demonstrates how nature-based solutions can provide effective protection against storm surges and sea-level rise.",
      quote:
        "Mangroves are our first line of defense. They're not just trees – they're living barriers that grow stronger over time.",
      quoteAuthor: "Dr. Sarah Chen, Climate Adaptation Specialist",
      details: [
        "Restoration of 100 hectares of coastal mangrove buffer zones",
        "Installation of community early warning systems",
        "Training programs for climate adaptation strategies",
        "Integration with existing disaster risk reduction plans",
        "Monitoring of wave attenuation and coastal erosion reduction",
      ],
      impact:
        "The restored mangroves have already proven their worth during recent typhoons, significantly reducing wave energy and protecting coastal communities from storm damage.",
    },
  },
  {
    id: "sustainable-ecotourism-model",
    title: "Sustainable Ecotourism Model",
    description: "Conservation efforts create new economic opportunities for local communities",
    image: "/mature-mangrove-forest-canopy-from-below-showing-d.jpg",
    date: "November 5, 2023",
    location: "Siargao",
    author: "Miguel Torres",
    content: {
      intro:
        "The successful restoration of mangrove forests in Siargao has opened up new possibilities for sustainable ecotourism, creating economic incentives for conservation while educating visitors about the importance of these vital ecosystems.",
      quote:
        "Tourism and conservation can work together. Our visitors leave with a deeper understanding of why mangroves matter.",
      quoteAuthor: "Miguel Torres, Community Tourism Coordinator",
      details: [
        "Development of guided mangrove kayaking tours",
        "Construction of elevated boardwalks for wildlife viewing",
        "Training of local guides in mangrove ecology and conservation",
        "Establishment of visitor education center",
        "Creation of sustainable revenue streams for 50 local families",
      ],
      impact:
        "The ecotourism initiative has generated sustainable income for the community while raising awareness about mangrove conservation among thousands of visitors from around the world.",
    },
  },
  {
    id: "scientific-research-breakthrough",
    title: "Scientific Research Breakthrough",
    description: "New discoveries about mangrove carbon sequestration potential",
    image: "/close-up-of-mangrove-prop-roots-extending-into-cle.jpg",
    date: "October 15, 2023",
    location: "Research Station, Luzon",
    author: "Dr. Anna Reyes",
    content: {
      intro:
        "Groundbreaking research conducted at Project Bakawan's research station has revealed that Philippine mangroves have an even greater capacity for carbon sequestration than previously understood, strengthening the case for large-scale restoration efforts.",
      quote:
        "Our findings show that mangroves are among the most efficient carbon sinks on Earth. Protecting them is crucial for climate action.",
      quoteAuthor: "Dr. Anna Reyes, Carbon Cycle Researcher",
      details: [
        "Comprehensive carbon flux measurements across different mangrove species",
        "Development of improved carbon accounting methodologies",
        "Publication of findings in international scientific journals",
        "Collaboration with global climate research networks",
        "Training of local researchers in advanced monitoring techniques",
      ],
      impact:
        "This research has contributed to international climate policy discussions and has attracted additional funding for mangrove conservation projects throughout Southeast Asia.",
    },
  },
]
