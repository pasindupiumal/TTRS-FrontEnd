import jwtDecode from 'jwt-decode';

class auth{
    
    login(token, callback){
        localStorage.setItem('token', token);
        callback();
    }

    logout(callback){
        localStorage.removeItem('token');
        localStorage.clear();
        callback();
    }

    isAuthenticated(){
        
       try{
           const token = jwtDecode(localStorage.getItem('token'));
           return true;
       }
       catch(ex){
           return false;
       }
    }

}

export default new auth();