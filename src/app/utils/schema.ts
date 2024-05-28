import { string, date, object, number, array } from "yup";

export const validationSchema = object({
  selectedTab: string().required("Tab selection is required"),
  departFrom: string().required("Departure location is required"),
  arrivalTo: string().required("Arrival location is required"),
  arrivalDate: date(),
  departureDate: date(),
  // departureDate: date().when("selectedTab", ([selectedTab], schema) => {
  //   return selectedTab == "Round Trip"
  //     ? schema.required("Departure date is required")
  //     : schema.notRequired();
  // }),
  travelers: object({
    adults: number()
      .min(1, "At least one adult is required")
      .required("Adults field is required"),
    children: number()
      .min(0, "Children cannot be negative")
      .required("Children field is required"),
    infants: number()
      .min(0, "Infants cannot be negative")
      .required("Infants field is required"),
  }),
  sectors: array()
    .of(
      object({
        departFrom: string(),
        arrivalTo: string(),
        departureDate: date(),
      })
    )
    // .when("selectedTab", ([selectedTab], schema) => {
    //   return selectedTab == "Multi City"
    //     ? schema.min(1, "At least one sector is required for multi city trips")
    //     : schema.notRequired();
    // }),
});
