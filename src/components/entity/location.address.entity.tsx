import * as yup from 'yup';

// Define the entity class
export class LocationAddressEntity {
  typeOfLocation?: string="home";
  locationIfOther?: string;
  addressLine1?: string;
  addressLine2?: string | null;
  city?: string="";
  regionCode?: string="";
  postalCode?: number;
  countryCode?: string="";
  static yupSchema(){
    return yup.object().shape({
        typeOfLocation: yup.string().nullable(),
        locationIfOther: yup.string().nullable(),
        addressLine1: yup.string().nullable(),
        addressLine2: yup.string().nullable().nullable(),
        city: yup.string().nullable(),
        regionCode: yup.string().nullable(),
        postalCode: yup.string().nullable().matches(/^\d{5}$/, 'Postal code should be number with length 5'),
        countryCode: yup.string().nullable(),
      });      
  }
}

