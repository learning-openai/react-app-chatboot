import axios from "axios";
import StandardResponse from "../../utils/standardRespoinse/standardResponse";


class HttpClient{

     static basaeURL = "http://192.168.100.9:3000/api/v01/";
    //  static basaeURL = "https://cursoss.store/api/v01/";
    // static basaeURL = process.env.REACT_APP_SERVER_URL;

    static async loginUser(url, config={}){

        try {
            // console.log(config)
            // console.log(this.basaeURL+url)
            const data = await axios.post(this.basaeURL+url,config);
    
            // console.log(data?.data)
            let response = await StandardResponse.successfulResp('Inicio sesion exitoso', data?.data)
            return response;

        } catch (error) {
            // console.log(error?.response?.data)
            let data =await error?.response?.data;
            let response = await StandardResponse.errorResp('Erro al generar el codigo QR',data )
            return response;
        }
    }

    static async getDataQR(url){

        try {
            // console.log(this.basaeURL+url)
            const data = await axios.get(this.basaeURL+url);
    
            // console.log(data?.data)
            let response = await StandardResponse.successfulResp('Se genero el codigo Qr con exito', data?.data)
            return response;

        } catch (error) {
            // console.log(error?.response?.data)
            let data =await error?.response?.data;
            let response = await StandardResponse.errorResp('Error al generar el codigo QR',data )
            return response;
        }
    }


    static async getListServices(url){

        try {
            // console.log(this.basaeURL+url)
            const data = await axios.get(this.basaeURL+url);
    
            // console.log(data?.data)
            let response = await StandardResponse.successfulResp('sucessfull, list services', data?.data)
            return response;

        } catch (error) {
            // console.log(error?.response?.data)
            let data =await error?.response?.data;
            let response = await StandardResponse.errorResp('Errorm get list services',data )
            return response;
        }
    }

    static async getListServicesEmbddings(url, config={}){

        try {
            // console.log(this.basaeURL+url)
            const data = await axios.post(this.basaeURL+url, config);
    
            // console.log(data?.data)
            let response = await StandardResponse.successfulResp('sucessfull, list services', data?.data)
            return response;

        } catch (error) {
            // console.log(error?.response?.data)
            let data =await error?.response?.data;
            let response = await StandardResponse.errorResp('Errorm get list services',data )
            return response;
        }
    }


    // update message mebedings 
    static async updateMessageEmbeding(url, config={}){
        try {
            // console.log(this.basaeURL+url)
            const data = await axios.post(this.basaeURL+url, config);
    
            // console.log(data?.data)
            let response = await StandardResponse.successfulResp('sucessfull, update messge embedding', data?.data)
            return response;

        } catch (error) {
            // console.log(error?.response?.data)
            let data =await error?.response?.data;
            let response = await StandardResponse.errorResp('Errorm get update messge embedding',data )
            return response;
        }
    }

        // update message mebedings 
        static async createMessageEmbeding(url, config={}){
            try {

                // console.log(this.basaeURL+url)
                const data = await axios.post(this.basaeURL+url, config);
        
                // console.log(data?.data)
                let response = await StandardResponse.successfulResp('sucessfull, new messge embedding created', data?.data)
                return response;
    
            } catch (error) {
                // console.log(error?.response?.data)
                let data =await error?.response?.data;
                let response = await StandardResponse.errorResp('Error to created messge embedding',data )
                return response;
            }
        }
}





export default HttpClient;