const Sequelize = require('sequelize');
jest.mock('sequelize');
jest.mock('simple-node-logger');
jest.spyOn(Sequelize.prototype, 'define').mockImplementation(() => {
    return class {
        static findByPk(){};
        save(){};
    };
});
const User = require('./../../main/models/user');
jest.spyOn(User.prototype, 'save').mockImplementation(() => true);
jest.spyOn(User, 'findByPk').mockImplementation(() => true);
const { UserService } = require('./../../main/services/user-service');

test('should create the user', () => {
    const fakeUser = {};
    const output = UserService.create(fakeUser);
    expect(User.prototype.save).toHaveBeenCalledTimes(1);
});

test('should view the user', () => {
    const fakeId = 9;
    const output = UserService.view(fakeId);
    expect(User.findByPk).toHaveBeenCalledTimes(1);
});