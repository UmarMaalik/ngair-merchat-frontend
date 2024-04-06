import * as yup from "yup";


export class DesiredLimits {
    monthlyVMcD?: number=20000;
    avgTicketVMcD?: number=100;
    highTicketVMcD?: number=5000;
    monthlyAmex?: number=2000;
    avgTicketAmex?: number=100;
    highTicketAmex?: number=5000;
}
  
export  class BankInfo {
routing?: string="123456789";
bank?: string="TEXAS BANK AND TRUST";
account?: string="752111";
accountName?: string="TEST LLC";
}
  
export  class BusinessInformationEntity {
    mccCodeAliasId?: string='e43bbb5f-8135-4638-ba5b-64c6539e9f8d';
    detailedExplanationWhatDoYouSell?: string;
    dbaName?: string;
    legalName?: string;
    website?: string;
    businessPhone?: string;
    customerServicePhone?: string;
    businessEmail?: string;
    isMerchantOptsOutReceivingFutureCommercialFromAmex?: boolean;
    typeOfBusiness?: string="limitedLiability";
    businessEstablishedDate?: string;
    taxId?: string;
    documentationMailingAddress?: string;
    swiped?: number=60;
    keyed?: number=20;
   "e-commerce"?: number=20;
    desiredLimits?: DesiredLimits;
    siteInspectionType?: string;
    bankInfo?: BankInfo;

    static yupSchema(){
        return yup.object().shape({
            mccCodeAliasId: yup.string().nullable(),
            detailedExplanationWhatDoYouSell: yup.string().nullable(),
            dbaName: yup.string().nullable(),
            legalName: yup.string().nullable(),
            website: yup.string().url().nullable(),
            businessPhone: yup.string().nullable().matches(/^\+\d{11}$/, 'Phone number must be in the format like this +17701234567'),
            customerServicePhone: yup.string().nullable().matches(/^\+\d{11}$/, 'Phone number must be in the format like this +17701234567'),
            businessEmail: yup.string().email().nullable(),
            isMerchantOptsOutReceivingFutureCommercialFromAmex: yup.boolean().nullable(),
            typeOfBusiness: yup.string().nullable(),
            businessEstablishedDate: yup.string().nullable(),
            taxId: yup.string().nullable().matches(/^\d{9}$/, 'Tax id should be number with a maximun and munimum length of 9'),
            documentationMailingAddress: yup.string().nullable(),
            swiped: yup.number().nullable(),
            keyed: yup.number().nullable(),
           " e-commerce": yup.number().nullable(),
            desiredLimits: yup.object().shape({
              monthlyVMcD: yup.number().nullable(),
              avgTicketVMcD: yup.number().nullable(),
              highTicketVMcD: yup.number().nullable(),
              monthlyAmex: yup.number().nullable(),
              avgTicketAmex: yup.number().nullable(),
              highTicketAmex: yup.number().nullable(),
            }).nullable(),
            siteInspectionType: yup.string().nullable(),
            bankInfo: yup.object().shape({
              routing: yup.string().nullable(),
              bank: yup.string().nullable(),
              account: yup.string().nullable(),
              accountName: yup.string().nullable(),
            }).nullable(),
          });
    }
    static withDefaultDesiredLimits() {
      return {
          desiredLimits: {
              monthlyVMcD: 20000,
              avgTicketVMcD: 100,
              highTicketVMcD: 5000,
              monthlyAmex: 2000,
              avgTicketAmex: 100,
              highTicketAmex: 500,
          },

          bankInfo:{
            routing:"123456789",
            bank:"TEXAS BANK AND TRUST",
            account:"752111",
            accountName:"TEST LLC"
            }
      };
  }
  }