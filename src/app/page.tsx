"use client";
import { BankDetailsEntity } from "@/components/entity/bank.details.entity";
import { BusinessInformationEntity } from "@/components/entity/bussiness.info.entity";
import { LegalAddressEntity } from "@/components/entity/legal.address.entity";
import { LocationAddressEntity } from "@/components/entity/location.address.entity";
import { OwnerEntity } from "@/components/entity/owner.entty";
import getAllPages from "@/components/multi-step/create-pages-pages";
// import MultiStepForm from "@/components/multi-step/page";
import MerchantContext from "@/context/create_merchant_context";
import { useState } from "react";
 

export default function CreateMerchant() {
    const [businessInformation, setBusinessInformation] = useState<BusinessInformationEntity>(new BusinessInformationEntity());
    const [demographic, setDemographic] = useState<LocationAddressEntity>(new LocationAddressEntity());
    const [milingAddress, setMilingAddress] = useState<LegalAddressEntity>(new LegalAddressEntity());
    const [owner, setOwner] = useState<OwnerEntity>(new OwnerEntity());
    const [bankDetails, setBankDetails] = useState<BankDetailsEntity>(new BankDetailsEntity());

    const [steps, setSteps] = useState<number>(0);
    const onNext = () => setSteps(steps + 1)
    const onPrev = () => setSteps(steps - 1)


    return (
        <MerchantContext.Provider
            value={{
                state: {
                    businessInformation,
                    demographic,
                    milingAddress,
                    owner,
                    bankDetails,
                    steps,
                },
                method: {
                    setBusinessInformation,
                    setDemographic,
                    setMilingAddress,
                    setOwner,
                    setBankDetails,
                    onNext,
                    onPrev
                },
            }}
        >
            <div className="px-10 mt-24 ">
                <div className="p-4 bg-white">
                    <div className="w-full flex bg-[#f4f7fc] my-4">
                        <button className="w-1/6 px-8 py-2 text-sm text-[#0061da]" onClick={() => setSteps(0)}>MERCHANT</button>
                        <button className="w-1/6 px-8 py-2 text-sm text-[#0061da]" onClick={() => setSteps(1)}>DEMOGRAPHIC</button>
                        <button className="w-1/6 px-8 py-2 text-sm text-[#0061da]" onClick={() => setSteps(2)}>MAILING ADDRESS</button>
                        <button className="w-1/6 px-8 py-2 text-sm text-[#0061da]" onClick={() => setSteps(3)}>OWNERSHIP</button>
                        <button className="w-1/6 px-8 py-2 text-sm text-[#0061da]" onClick={() => setSteps(4)}>BANK</button>
                        <button className="w-1/6 px-8 py-2 text-sm text-[#0061da]" onClick={() => setSteps(5)}>REVIEW</button>
                    </div>
                    {getAllPages(steps)}
                </div>

            </div>





            {/* // <div className="app-content my-3 my-md-5">
    //     <div className="side-app">
    //         <div className="page-header">
    //             <h4 className="page-title">Create Merchant</h4>
    //             <ol className="breadcrumb">
    //                 <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
    //                 <li className="breadcrumb-item active" aria-current="page">Merchants Creation</li>
    //             </ol>
    //         </div>

    //         <div className="row">
    //             <div className="col-md-12">
    //                 <div className="card">
    //                     <div className="card-header">
    //                         <div className="card-title">Verify Your Business</div>
    //                     </div>
    //                     <div className="card-body p-6">
    //                         <div className="wizard-container">
    //                             <div className="wizard-card m-0" data-color="blue" id="wizardProfile">
    //                                 <form>
    //                                     <div className="wizard-navigation">
    //                                         <ul>
    //                                             <li><a href="#merchant" data-toggle="tab">Merchant</a></li>
    //                                             <li><a href="#demographic" data-toggle="tab">DemoGraphic</a></li>
    //                                             <li><a href="#mailing" data-toggle="tab">Mailing Address</a></li>
    //                                             <li><a href="#ownership" data-toggle="tab">OwnerShip</a></li>
    //                                             <li><a href="#bank" data-toggle="tab">Bank</a></li>
    //                                             <li><a href="#review" data-toggle="tab">Review</a></li>

    //                                         </ul>
    //                                     </div>
    //                                     <div className="tab-content">
    //                                         <div className="tab-pane" id="merchant">
    //                                             <div className="row">
    //                                                 <div className="col-sm-12">
    //                                                     <div className="row">
    //                                                         <div className="col-lg-6">
    //                                                             <div className="input-group">
    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">First Name <small >*</small></label>
    //                                                                     <input name="firstname" type="text" className="form-control" placeholder="Enter First Name" />
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                         <div className="col-lg-6">
    //                                                             <div className="input-group">

    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">Last Name <small >*</small></label>
    //                                                                     <input name="lastname" type="text" className="form-control" placeholder="Enter Last Name" />
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div className="row">
    //                                                         <div className="col-lg-3">
    //                                                             <div className="input-group">

    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">Email <small >*</small></label>
    //                                                                     <input name="email" type="email" className="form-control" placeholder="Enter Email" />
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                         <div className="col-lg-3">
    //                                                             <div className="input-group">
    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">Sales Code <small >*</small></label>
    //                                                                     <input name="lastname" type="text" className="form-control" placeholder="Enter Sale Code" />
    //                                                                                                                                            </div>
    //                                                             </div>
    //                                                         </div>
    //                                                         <div className="col-lg-3">
    //                                                             <div className="input-group">
    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">Dba Name <small >*</small></label>
    //                                                                     <input name="lastname" type="text" className="form-control" placeholder="Enter DBA" />
    //                                                                                                                                        </div>
    //                                                             </div>
    //                                                         </div>
    //                                                         <div className="col-lg-3">
    //                                                             <div className="input-group">
    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">Legal Business Name <small
    //                                                                     >*</small></label>
    //                                                                     <input name="lastname" type="text" className="form-control" placeholder="Enter Business Name" />
    //                                                                 </div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div className="row">
    //                                                         <div className="col-lg-6">
    //                                                             <div className="input-group">
    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">Tax Filing Name <small style={{ color: 'red' }}>*</small></label>
    //                                                                     <input name="lastname" type="text" className="form-control" placeholder="Enter Filing Name" />
    //                                                                                                                       </div>
    //                                                             </div>
    //                                                         </div>
    //                                                         <div className="col-lg-6">
    //                                                             <div className="input-group">
    //                                                                 <div className="form-group label-floating">
    //                                                                     <label className="control-label">Tax Filing Method <small style={{ color: 'red' }}>*</small></label>
    //                                                                     <input name="lastname" type="text" className="form-control" placeholder="Enter Method" />
    //                                                                                                            </div>
    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>

    //                                     </div>
    //                                 </form>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div> */}
        </MerchantContext.Provider>
    );
}
