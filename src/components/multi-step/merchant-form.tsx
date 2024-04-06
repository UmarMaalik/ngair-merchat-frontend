import { useFormik } from 'formik';
import React, { useContext } from 'react'
import { MerchantEntity } from '../entity/merchant.entity';
import { Row } from 'react-bootstrap';
import BaseInput from '../forms/base-input';
import BaseInputPhone from '../forms/base-input-phone';
import BaseSelect from '../forms/base-select';
import BaseCheck from '../forms/base-check';
import BaseTextArea from '../forms/base-text-area';
import MerchantContext, { MerchantContextType } from '@/context/create_merchant_context';
import 'react-phone-input-2/lib/style.css'
import { BusinessInformationEntity } from '../entity/bussiness.info.entity';

export default function MerchantForm() {
    enum BusinessEntityType {
        SoleProprietor = "soleProprietor",
        LimitedLiability = "limitedLiability",
        PrivateCorporation = "privateCorporation",
        Partnership = "partnership",
        TrustEstate = "trustEstate",
        TaxExempt = "taxExempt",
        Other = "other",
        PublicCorporation = "publicCorporation",
        Government = "government"
    }
    const {
        state: { businessInformation, steps },
        method: { setBusinessInformation, onNext, onPrev }
    }: MerchantContextType = useContext(MerchantContext);

    const form = useFormik({
        initialValues: {...BusinessInformationEntity?.withDefaultDesiredLimits(), keyed: 20, // Set initial value for keyed
        "e-commerce": 20, // Set initial value for ecommerce
        swiped: 60,
        typeOfBusiness:"limitedLiability",
    mccCodeAliasId:'e43bbb5f-8135-4638-ba5b-64c6539e9f8d'

    },
        validationSchema: BusinessInformationEntity.yupSchema(),
        onSubmit: (values: BusinessInformationEntity) => {
            // Combie First Name and last Name to create a legalName Attribut

            try {
                console.log("Form Values .....", values);
                if(setBusinessInformation)
                setBusinessInformation({ ...values })
            } catch (e) {
                console.log("Error : ", e);
            }
            if(onNext)
            onNext();
        }
    })
   
    

    return (
        <div>
            <h2>Merchant Form</h2>
            <form onSubmit={form.handleSubmit}>
                <Row className="my-4">
                    <BaseInput
                        label="Legal Business Name"
                        className="col-6"
                        placeholder="Legal Business Name"
                        name="legalName"
                        formik={form}
                        required
                    />
                    <BaseInput
                        label="Email"
                        className="col-6"
                        placeholder="Email"
                        name="businessEmail"
                        formik={form}
                        required
                    />
                </Row>

                <Row className="my-4">
                    <BaseInput
                        label="Dba Name"
                        className="col-3"
                        placeholder="Dba Name"
                        name="dbaName"
                        formik={form}
                        required
                    />

                    {/* <BaseInputPhone
                        className="col-3"
                        label="Bussiness Phone"
                        name="businessPhone"
                        required
                        placeholder="Bussiness Phone"
                        formik={form}
                    /> */}

                    <BaseInput
                         label="Bussiness Phone"
                        className="col-3"
                        placeholder="Bussiness Phone"
                        name="businessPhone"
                        formik={form}
                        required
                    />
                    <BaseInput
                        label="Website"
                        className="col-3"
                        placeholder="Add Website Link"
                        name="website"
                        formik={form}
                        required
                    />
                    <BaseInput
                        label="Cutomer Service Phone"
                        className="col-3"
                        placeholder="Customer Service Phone"
                        name="customerServicePhone"
                        formik={form}
                        required
                    />

                    {/* <BaseInputPhone
                        className="col-3"
                        label="Cutomer Service Phone"
                        name="customerServicePhone"
                        required
                        onChange={(e)=>{
                            console.log("the data iss",e?.target);
                            
                        }}
                        placeholder="Customer Service Phone"
                        formik={form}
                    /> */}
                </Row>

                <Row className="my-4">
                    <BaseSelect
                        label="Type of Business"
                        className="col-4"
                        placeholder="Type of Business"
                        enumType={BusinessEntityType}
                        // options={Object.keys(BusinessEntityType).map((item:any)=>{
                        //     return { label:item,
                        //      value:BusinessEntityType[item]}
 
                        //  })}
                        formik={form}
                        name="typeOfBusiness"
                        required
                    />
                    <BaseInput
                        label="TaxId"
                        className="col-3"
                        placeholder="Enter TaxId"
                        type="text"
                        name="taxId"
                        formik={form}
                        required
                    />
                    <BaseInput
                        label="Business Established Date"
                        className="col-3"
                        placeholder="00/00/0000"
                        formik={form}
                        name="businessEstablishedDate"
                        required
                    />
                </Row>

                <Row className="my-4">
                    <BaseCheck
                        label="By checking this box, Merchant opts out of receiving future commercial marketing communications from American Express."
                        className="col-11 ml-4"
                        formik={form}
                        name="isMerchantOptsOutReceivingFutureCommercialFromAmex"
                        required
                    />
                </Row>

                <Row className="my-4">
                    <div className="col-12 mt-2">
                        <label>What do you sell ?</label>

                        <BaseTextArea
                            name="detailedExplanationWhatDoYouSell"
                            placeholder="Give a brief description of the products sold and/or services provided."
                            formik={form}
                            required
                        />
                    </div>
                </Row>
                <div className="">
                    <button className="px-4 border-2 float-right" type="submit" >Next</button>
                </div>
            </form>
        </div>
    )
}
