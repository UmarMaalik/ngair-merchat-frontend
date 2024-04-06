import * as yup from "yup";

export class MerchantEntity {  
        mccCodeAliasId?: number;
        detailedExplanationWhatDoYouSell?: string;
        dbaName?: string;
        legalName?: string;
        website?: string;
        businessPhone?: string;
        customerServicePhone?: string;
        businessEmail?: string;
        isMerchantOptsOutReceivingFutureCommercialFromAmex?: boolean;
        typeOfBusiness?: string;
        businessEstablishedDate?: string;
        taxId?: string;
        documentationMailingAddress?: string;
        swiped?: number;
        keyed?: number;
        ecommerce?: string;
        desiredLimits?: {
            monthlyVMcD?: number,
            avgTicketVMcD?: number,
            highTicketVMcD?: number,
            monthlyAmex?: number,
            avgTicketAmex?: string,
            highTicketAmex?: number
        };
        siteInspectionType?: string;
        bankInfo?: {
            routing?: number,
            bank?: string,
            account?: number,
            accountName?: string
        };

        locationAddress?: {
            typeOfLocation?: string,
            locationIfOther?: string,
            addressLine1?: string,
            addressLine2?: null,
            city?: string,
            regionCode?: string,
            postalCode?: number,
            countryCode?: string
        };
        isLegalAddressTheSame?: boolean;
        legalAddress?: {
            addressLine1?: string,
            addressLine2?: string,
            city?: string,
            regionCode?: string,
            postalCode?: number,
            countryCode?: string
        };
        authorizedSigner?: {
            firstName?: string,
            lastName?: string,
            title?: string,
            phoneNumber?: number,
            email?: string,
            ssn?: number,
            dateOfBirth?: string,
            address?: {
                addressLine1?: string,
                addressLine2?: string,
                city?: string,
                regionCode?: string,
                postalCode?: number,
                countryCode?: string
            }
        };
        isPrimaryContactTheSame?: boolean;
        primaryContact?: {
            firstName?: string,
            lastName?: string,
            title?: string,
            phoneNumber?: number,
            email?: string
        };
        achProcessor?: string;
        achProcessorData?: {
            monthlyVolumeAch?: number,
            monthlyVolumeAchPayouts?: number,
            highTicketAch?: number,
            highTicketAchPayouts?: number,
            ticketCountAch?: number,
            ticketCountAchPayouts?: number,
            customerType?: string,
            paymentAuthorizationType?: string,
            statementDescriptor?: string,
            useOfPaymentServiceDescription?: string,
            isApplyBankAccountData?: boolean,
            billingRouting?: number,
            billingBank?: string,
            billingAccount?: number,
            billingAccountName?: string
        }
    

    static yupSchema() {
        return yup.object().shape({
            mccCodeAliasId: yup.number().nullable(),
            detailedExplanationWhatDoYouSell: yup.string().nullable(),
            dbaName: yup.string().nullable(),
            legalName: yup.string().nullable(),
            website: yup.string().url().nullable(),
            businessPhone: yup.string().required().nullable(),
            customerServicePhone: yup.string().nullable(),
            businessEmail: yup.string().email().nullable(),
            isMerchantOptsOutReceivingFutureCommercialFromAmex: yup.boolean().nullable(),
            typeOfBusiness: yup.string().nullable(),
            businessEstablishedDate: yup.string().nullable(),
            taxId: yup.number().nullable(),
            documentationMailingAddress: yup.string().nullable(),
            swiped: yup.number().nullable(),
            keyed: yup.number().nullable(),
            ecommerce: yup.string().nullable(),
            desiredLimits: yup.object().shape({
                monthlyVMcD: yup.number().nullable(),
                avgTicketVMcD: yup.number().nullable(),
                highTicketVMcD: yup.number().nullable(),
                monthlyAmex: yup.number().nullable(),
                avgTicketAmex: yup.string().nullable(),
                highTicketAmex: yup.number().nullable(),
            }).nullable(),
            siteInspectionType: yup.string().nullable(),
            bankInfo: yup.object().shape({
                routing: yup.string().nullable(),
                bank: yup.string().nullable(),
                account: yup.string().nullable(),
                accountName: yup.string().nullable(),
            }).nullable(),

            locationAddress: yup.object().shape({
                typeOfLocation: yup.string().nullable(),
                locationIfOther: yup.string().nullable(),
                addressLine1: yup.string().nullable(),
                addressLine2: yup.string().nullable(),
                city: yup.string().nullable(),
                regionCode: yup.string().nullable(),
                postalCode: yup.string().nullable(),
                countryCode: yup.string().nullable(),
            }),

            isLegalAddressTheSame: yup.boolean().nullable(),

            legalAddress: yup.object().shape({
                addressLine1: yup.string().nullable(),
                addressLine2: yup.string().nullable(),
                city: yup.string().nullable(),
                regionCode: yup.string().nullable(),
                postalCode: yup.string().nullable(),
                countryCode: yup.string().nullable(),
            }),

            authorizedSigner: yup.object().shape({
                firstName: yup.string().nullable(),
                lastName: yup.string().nullable(),
                title: yup.string().nullable(),
                phoneNumber: yup.string().matches(/^\+\d{8,15}$/).nullable(),
                email: yup.string().email().nullable(),
                ssn: yup.string().nullable(),
                dateOfBirth: yup.string().nullable(),
                address: yup.object().shape({
                    addressLine1: yup.string().nullable(),
                    addressLine2: yup.string().nullable(),
                    city: yup.string().nullable(),
                    regionCode: yup.string().nullable(),
                    postalCode: yup.string().nullable(),
                    countryCode: yup.string().nullable(),
                }).nullable(),
            }),

            isPrimaryContactTheSame: yup.boolean().nullable(),

            primaryContact: yup.object().shape({
                firstName: yup.string().nullable(),
                lastName: yup.string().nullable(),
                title: yup.string().nullable(),
                phoneNumber: yup.string().matches(/^\+\d{8,15}$/).nullable(),
                email: yup.string().email().nullable(),
            }),

            achProcessor: yup.string().nullable(),

            achProcessorData: yup.object().shape({
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
                billingRouting: yup.string().nullable(),
                billingBank: yup.string().nullable(),
                billingAccount: yup.string().nullable(),
                billingAccountName: yup.string().nullable(),
            }),
        })
    }

}