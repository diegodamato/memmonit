class ErrorUtil{
    
    static invalidUnity(unity){
        throw new Error(`The unit passed by parameter cannot be converted: ${unity}`);
    }

}

module.exports = ErrorUtil;