import * as yup from 'yup'; 
import { LegalAddressEntity } from './legal.address.entity';

export class OwnerEntity {
    ownership?: number;
    firstName?: string;
    lastName?: string;
    title?: string;
    phoneNumber?: string;
    email?: string;
    ssn?: number;
    dateOfBirth?: string;
    address?: LegalAddressEntity;

    static yupSchema(){
        return yup.object().shape({
            ownership: yup.number().nullable(),
            firstName: yup.string().nullable(),
            lastName: yup.string().nullable(),
            title: yup.string().nullable(),
            phoneNumber: yup.string().nullable().matches(/^\+\d{11}$/, 'Phone number must be in the format like this +17701234567'),
            email: yup.string().nullable(),
            ssn: yup.string().nullable().matches(/^\d{9}$/, 'SSN should be number with a maximun and munimum length of 9'),
            dateOfBirth: yup.string().nullable(),
            address: LegalAddressEntity.yupSchema()
          }); 
    }

  }

