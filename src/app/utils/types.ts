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
  handle: () => void;
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
  handle?: () => void;
}

export interface DropdownProps {
  title: React.ReactNode;
  items: { label: string; link: string }[];
}

export interface Modalprops {
  show: boolean;
  handleClose: () => void;
}

export interface AutoSearchProps {
  error?: any;
  label: string;
  options: string[];
  name?: string;
  setFieldValue?: any;
}

// utils/types.ts

export interface AirportData {
  country: string;
  city: string;
  name: string;
  code: string;
}

export interface Travelers {
  adults: number;
  children: number;
  infants: number;
}

export interface Sector {
  id: number;
  departFrom: string;
  arrivalTo: string;
  departureDate: string;
}

export interface FormValues {
  selectedTab: string;
  departFrom: string;
  arrivalTo: string;
  arrivalDate: string;
  travelers: Travelers;
  stop_mode: boolean;
  class_mode: boolean;
  sectors: Sector[];
}

export interface SearchEngineProps {
  handleToggle?:  () => void
}