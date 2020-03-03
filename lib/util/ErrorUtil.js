class ErrorUtil{
    
    static invalidUnity(unity){
        throw new Error(`A unidade passada por parâmetro não pôde ser convertida: ${unity}`);
    }

}

module.exports = ErrorUtil;