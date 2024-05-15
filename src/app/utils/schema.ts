import * as Yup from "yup";

export const validationSchema = Yup.object({
  selectedTab: Yup.string().required("Tab selection is required"),
  departFrom: Yup.string().required("Departure location is required"),
  arrivalTo: Yup.string().required("Arrival location is required"),
  departureDate: Yup.date().required("Departure date is required"),
  travelers: Yup.object({
    adults: Yup.number()
      .min(1, "At least one adult is required")
      .required("Adults field is required"),
    children: Yup.number()
      .min(0, "Children cannot be negative")
      .required("Children field is required"),
    infants: Yup.number()
      .min(0, "Infants cannot be negative")
      .required("Infants field is required"),
  }),
  sectors: Yup.array().of(
    Yup.object({
      departFrom: Yup.string().required("Departure location is required"),
      arrivalTo: Yup.string().required("Arrival location is required"),
      departureDate: Yup.date().required("Departure date is required"),
    })
  ),
});
