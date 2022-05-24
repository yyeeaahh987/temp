import {extendObservable} from 'mobx';

/** UserStore */

class UserStore {
    constructor() {
        extendObservable(this, {

            loading: true,
            isLoggedIn: false,
            email: ''

        })
    }
}
export default new UserStore();