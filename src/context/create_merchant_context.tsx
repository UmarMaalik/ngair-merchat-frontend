import { BankDetailsEntity } from "@/components/entity/bank.details.entity";
import { BusinessInformationEntity } from "@/components/entity/bussiness.info.entity";
import { LegalAddressEntity } from "@/components/entity/legal.address.entity";
import { LocationAddressEntity } from "@/components/entity/location.address.entity";
import { MerchantEntity } from "@/components/entity/merchant.entity";
import { OwnerEntity } from "@/components/entity/owner.entty";
import { createContext } from "react";


export type MerchantContextType = {
    state : {
        businessInformation?: BusinessInformationEntity;
        demographic ?: LocationAddressEntity;
        milingAddress ?: LegalAddressEntity;
        owner ?: OwnerEntity;
        bankDetails ?: BankDetailsEntity;
        steps?:number
    };
    method : {
        setBusinessInformation?: (e ?: any) => void;
        setDemographic?: (e ?: any) => void;
        setMilingAddress?: (e ?: any) => void;
        setOwner?: (e ?: any) => void;
        setBankDetails: (e ?: any) => void;
        onNext?: () => void;
        onPrev?: () => void;
    };
};

const MerchantContext = createContext<MerchantContextType>({
    state : {
        businessInformation : { },
        demographic : { },
        milingAddress : { },
        owner : { },
        bankDetails : { },
        steps: 0,
    },
    method : {
        setBusinessInformation : (e ?: any) => { },
        setDemographic : (e ?: any) => { },
        setMilingAddress : (e ?: any) => { },
        setOwner : (e ?: any) => { },
        setBankDetails : (e ?: any) => { },
        onNext: () => { },
        onPrev: () => { },

    }
})
export default MerchantContext;

