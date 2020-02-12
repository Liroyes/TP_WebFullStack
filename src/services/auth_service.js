const authService = {
    register: function() {
        // TODO register
        return false;
    },

    login: function() {
        // TODO login
        return false;
    },

    logout: function() {
        localStorage.removeItem('Token'); // TODO Env variable
        // TODO logout
        return false;
    }
}


export default authService;