import LoginApi from '../../../api/request.token';
import MerchantContext, { MerchantContextType } from '@/context/create_merchant_context';
import axios from 'axios';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';

export default function ReviewCreateMerchantForm() {
  const {
    state: { businessInformation, demographic, milingAddress, owner, bankDetails, steps },
    method: { setBusinessInformation, onNext, onPrev }
}: MerchantContextType = useContext(MerchantContext);

  const requestData = {
    businessInformation : businessInformation,
    locationAddress : demographic,
    legalAddress : milingAddress,
    owner1 : owner,

  }

  const body = new URLSearchParams({
    username: "BrandonISOIntegration",
    password: "Connect2APIcrm!",
    client_id: "12345",
    client_secret: "12345",
    grant_type: "password",
    scope: "offline_access"
  });
  const getToken =  async () => {
    const api = new LoginApi();
    try {
      const accesstoken: any = await api.getAccessToken(body);
if(accesstoken)
{
  try{
    const data: any = await api.createDraft(requestData,{headers:{
      Authorization:`Bearer ${accesstoken?.access_token}`
  }});
  if(data)
  {
      toast.success("Application has been submitted");

  }
  }catch(err)
  {
    toast.error("Unable to submit");

  }
}
      // setGroupCodeDetails(groupCodeDetails)
  
    } catch (err) {
      console.error("Unable to find Group Code");
    }
  }

  console.log("Token we are getting ....", getToken);

  // console.log("Date from All forms and Context ------------------------------",businessInformation, demographic, milingAddress, owner, bankDetails,);

  console.log("Requested Data ############### =>",requestData);
  return (
    <div>
      <label  className="block text-sm font-medium text-gray-700">
      Voided Check 
</label>
<input id="fileInput" name="fileInput" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" className="mt-1 p-2 border border-gray-300  mb-6 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"/>
<label  className="block text-sm font-medium text-gray-700">
Bank Letter
</label>
<input id="fileInput" name="fileInput" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" className="mt-1 p-2 border border-gray-300 mb-6 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"/>
<label  className="block text-sm font-medium text-gray-700">
Drivers License
</label>
<input id="fileInput" name="fileInput" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" className="mt-1 p-2 border border-gray-300 mb-6 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"/>
<div className='w-full flex justify-center'>
<button onClick={()=> getToken()} className='bg-green-500 w-32 h-12 rounded-md text-white '>Submit</button>

</div>
    </div>
  )
}
