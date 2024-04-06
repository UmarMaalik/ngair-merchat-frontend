import * as yup from 'yup';

export class BankDetailsEntity {
    monthlyVolumeAch?: number;
    monthlyVolumeAchPayouts?: number;
    highTicketAch?: number;
    highTicketAchPayouts?: number;
    ticketCountAch?: number;
    ticketCountAchPayouts?: number;
    customerType?: string;
    paymentAuthorizationType?: string;
    statementDescriptor?: string;
    useOfPaymentServiceDescription?: string;
    isApplyBankAccountData?: boolean;
    billingRouting?: number;
    billingBank?: string;
    billingAccount?: number;
    billingAccountName?: string;

    static yupSchema(){
        return yup.object().shape({
            monthlyVolumeAch: yup.number().nullable(),
            monthlyVolumeAchPayouts: yup.number().nullable(),
            highTicketAch: yup.number().nullable(),
            highTicketAchPayouts: yup.number().nullable(),
            ticketCountAch: yup.number().nullable(),
            ticketCountAchPayouts: yup.number().nullable(),
            customerType: yup.string().nullable(),
            paymentAuthorizationType: yup.string().nullable(),
            statementDescriptor: yup.string().nullable(),
            useOfPaymentServiceDescription: yup.string().nullable(),
            isApplyBankAccountData: yup.boolean().nullable(),
            billingRouting: yup.number().nullable(),
            billingBank: yup.string().nullable(),
            billingAccount: yup.number().nullable(),
            billingAccountName: yup.string().nullable(),
          });
          
    }
  }