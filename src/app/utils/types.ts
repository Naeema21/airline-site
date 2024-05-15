export interface recommendedCardProps {
  card: {
    imgSrc: any;
    offerTag: string;
    tagColor: string;
    title: string;
    location: string;
    rating: string;
    reviews: string;
    price: string;
  };
}

interface Destination {
  imgSrc: any;
  destination: string;
  hotels: number;
}

export interface DestinationCardProps {
  destination: Destination;
}

interface RouteProps {
  image: any;
  departureTime: string;
  departureAirport: string;
  duration: string;
  arrivalTime: string;
  arrivalAirport: string;
  price: string;
  deals: number;
}

export interface RouteCardProps {
  routes: RouteProps;
}

export interface DropdownProps {
  title: React.ReactNode;
  items: { label: string; link: string }[];
}

export interface AutoSearchProps {
  label: string;
  options: string[];
}

export interface Sector {
  departFrom: string;
  arrivalTo: string;
  departureDate: string;
}

export interface FormValues {
  selectedTab: string;
  departFrom: string;
  arrivalTo: string;
  departureDate: string;
  travelers: {
      adults: number;
      children: number;
      infants: number;
  };
  sectors: Sector[];
}
