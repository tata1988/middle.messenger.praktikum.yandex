export function validation(elem: any, value: string) {
  let reg = '';
  const pattern = {
    login: '.\[a-zA-Z0-9-_]{3,20}',
    password: '^(?=.*[A-Z])(?=.*\d).{8,40}$',
    name: '^([A-ZА-Я][a-zа-яё]*)(-[A-ZА-Яa-zа-яё]*)?$',
    email: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
    phone: '^[+]?[0-9]{10,15}$',

  };

  switch (elem.props.pattern) {
    case 'login':
      reg = pattern.login;
      break;
    case 'password':
      reg = pattern.password;
      break;
    case 'name':
      reg = pattern.name;
      break;
    case 'email':
      reg = pattern.email;
      break;
    case 'phone':
      reg = pattern.phone;
      break;
  }

  const re = new RegExp(reg);
  const result = re.test(value);
  console.log(result);
  return result;
}
