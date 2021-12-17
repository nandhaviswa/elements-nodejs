const User = require('./../models/user');
/**
 * 
 * @see 
 * @since Sat December 18, 2021 12:50 AM.
 */
class UserService{
    static async create(model){
        var user = new User();
        user.username = model.username;
        user.email = model.email;
        return user.save();
    }
    static async view(id){
        return User.findByPk(id);
    }
    static async update(id, model){
        return User.findByPk(id).then( user => {
            if(user == null){
                throw new Error(`User is NOT found for the id #${id}`);
            }
            user.username = model.username;
            user.email = model.email;
            return user.save();
        });
    }
    static async delete(id){
        return User.destroy({
            where: {
                id: id,
            }
        });
    }
    static async index(){
        return User.findAll();
    }
}
module.exports = {
    UserService,
};
