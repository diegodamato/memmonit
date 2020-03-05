class InvalidUnityError extends Error{
    constructor(unity){
        super(`The unit passed by parameter cannot be converted: ${unity}`)
    }
}

module.exports = InvalidUnityError;