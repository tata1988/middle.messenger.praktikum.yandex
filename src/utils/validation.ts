
export function validation (elem: any, value: string) {
    let reg = ''
    const pattern = {
        login: '[a-z]{4,8}',
        password: '[a-z]{4,8}',
    }
    switch(elem.props.pattern) {
        case 'login': 
        reg = pattern.login
        case 'password':
        reg = pattern.password
    }

    const re = new RegExp(reg);
        if (re.test(value)) {
            return true;
        } else {
            return false;
        }
        
}