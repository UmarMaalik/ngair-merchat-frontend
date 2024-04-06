import MerchantContext, { MerchantContextType } from '@/context/create_merchant_context';
import React, { useContext, useEffect, useState } from 'react'
import { MerchantEntity } from '../entity/merchant.entity';
import { useFormik } from 'formik';

import BaseInput from '../forms/base-input';
import BaseInputPhone from '../forms/base-input-phone';
import BaseSelect from '../forms/base-select';
import BaseCheck from '../forms/base-check';
import BaseTextArea from '../forms/base-text-area';
import { Row } from 'react-bootstrap';
import { LegalAddressEntity } from '../entity/legal.address.entity';
import LoginApi from '../../../api/request.token';


export default function MailingAddress() {

  const {
    state: { milingAddress, steps },
    method: { setMilingAddress, onNext, onPrev }
  }: MerchantContextType = useContext(MerchantContext);
  const [countries,setCountries]=useState<any[]>();
  const [states,setstates]=useState<any[]>();
  const [cities,setCities]=useState<any[]>()
  const form = useFormik({
    initialValues: new LegalAddressEntity(),
    validationSchema: LegalAddressEntity.yupSchema(),
    onSubmit: (values: LegalAddressEntity) => {
      // Combie First Name and last Name to create a legalName Attribut

      try {
        console.log("Form Values .....", values);
        if(setMilingAddress)
        setMilingAddress({ ...values })
      } catch (e) {
        console.log("Error : ", e);
      }
      if(onNext)
      onNext();
    }
  })
  useEffect(()=>{
    getCountries()
},[])
const getCountries =  async () => {
    const api = new LoginApi();
    try {
      const countries: any = await api.getCountries();
        console.log("cpuntriesn",countries?.data?.data[0]?.name);
        setCountries(countries?.data?.data)
      // setGroupCodeDetails(groupCodeDetails)
  
    } catch (err) {
      console.error("Unable to find Group Code");
    }
  }
useEffect(()=>{
console.log("the country changed",form.values.countryCode);
const state:any=countries?.filter((item:any)=>item?.iso2===form.values.countryCode)
if(state)
{
    console.log("tge states is",state[0]?.states);
    if(state[0]?.states && state[0]?.states?.length!==0)
    {
    setstates(state[0]?.states)

    }
}



},[form.values.countryCode])
useEffect(()=>{
if(form.values.regionCode!=='CA')
{
   const state:any=countries?.filter((item)=>item?.iso2===form.values.countryCode)
   const exstate:any=states?.filter((item)=>item?.state_code ===form.values.regionCode )
   console.log("the exasadad",exstate);
   
   console.log("ok k awas",state);
   if(state &&exstate)
   getCites(state[0]?.name,exstate[0]?.name)
}

},[form.values.regionCode])
const getCites =  async (country:any,state:any) => {
console.log("the ererqrq",country,state);

const api = new LoginApi();
try {
  const cities: any = await api.getCities({"country":country,
  "state": state});
    console.log("cpuntriesn",cities?.data?.data);
    if(cities?.data?.data&& cities?.data?.data?.length!==0)
    {
        setCities(cities?.data?.data)
    }
    // setCountries(countries?.data?.data)
  // setGroupCodeDetails(groupCodeDetails)

} catch (err) {
  console.error("Unable to find Group Code");
}
}
  return (
    <div >
      <h4>Mailing-Address</h4>
      <form onSubmit={form.handleSubmit}>

        <Row className='my-4'>
          <BaseInput
            label="Address 1"
            className="col-6"
            placeholder="Enter Address 1"
            name="addressLine1"
            formik={form}
            required
          />
          <BaseInput
            label="Address 2"
            className="col-6"
            placeholder="Enter Address 2"
            name="addressLine2"
            formik={form}
            required
          />
        </Row>

        <Row className='my-4'>
        <BaseSelect
            label="Country"
            className="col-3"
            placeholder="Select Country"
            options={countries&&countries?.map((item:any)=>{
              return{
                  label:item?.name,
                  value:item?.iso2
              }
          })}
            formik={form}
            name="countryCode"
            required
          />
           <BaseSelect
            label="State"
            className="col-3"
            options={states&&states?.map((item:any)=>{
              return{
                  label:item?.name,
                  value:item?.state_code
              }
          })}
            placeholder="Select State"
            formik={form}
            name="regionCode"
            required
          />
          <BaseSelect
            label="City"
            options={cities&&cities?.map((item:any)=>{
              return{
                  label:item,
                  value:item
              }
          })}
            className="col-3"
            placeholder="Select City"
            formik={form}
            name="city"
            required
          />
         
          <BaseInput
            label="Zip Code"
            className="col-3"
            placeholder="Ente Zip Code"
            name="postalCode"
            formik={form}
            required
          />
        
        </Row>

        <div className='w-full flex justify-between py-4'>
          <button className='bg-gray-200 px-8 py-2 text-white' onClick={onPrev}>Previous</button>
          <button className='bg-gray-500 px-8 py-2 text-white' type='submit'>Next</button>
        </div>
      </form>


    </div>
  )
}
