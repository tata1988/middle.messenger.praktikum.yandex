export function validation(elem: any, value: string) {

    let reg = ''
    const pattern = {
        login: '/[a-zA-Z0-9-_]{3,20}',
        password: '/(?=.*[0-9])(?=.*[A-Z|А-Я])(?=^.{8,40}$)/g',
        name: '/^[A-Z|А-Я][a-zа-яё-]',
        email: '[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+',
        phone: '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,15}$'
    }
    
    switch (elem.props.pattern) {
        case 'login':
            reg = pattern.login
            break;
        case 'password':
            reg = pattern.password
            break;
        case 'name':
            reg = pattern.name
            break;
        case 'email':
            reg = pattern.email
            break;
        case 'phone':
            reg = pattern.phone
            break;
    }

    const re = new RegExp(reg);
    console.log(reg);
    
    const result = re.test(value);
    
    return result;

}