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
