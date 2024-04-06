import BaseApi from "./_baseApi";


export default class LoginApi extends BaseApi {
  private baseUrl: string = "/";

    async getAccessToken(dto: any){
    console.log("the dya is", dto);

    const data = await this.post(`${this.baseUrl}getToken`, dto);
    return data;
  }
  async createDraft(dto: any,config:any){
    console.log("the dya is", dto);

    const data = await this.post(`${this.baseUrl}createDraft`, dto,config);
    return data;
  }
  async getCountries(){
   

    const data = await this.get(`${this.baseUrl}countries`);
    return data;
  }
  async getCities(dto: any){
    console.log("the dya is", dto);

    const data = await this.post(`${this.baseUrl}cities`, dto);
    return data;
  }

  

}