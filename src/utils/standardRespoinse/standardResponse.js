
class StandardResponse{

    static ok = 'successful';
    static error = 'error';


    static successfulResp(message='success', data=[]){
        const response = {
            status: this.ok,
            message: message,
            data: data
        }
        return response;
    }

    static errorResp(message='error executed function', data=[]){
        const response = {
            status: this.error,
            message: message,
            data: data
        }
        return response;
    } 

}

export default  StandardResponse;