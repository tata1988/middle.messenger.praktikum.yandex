import { Input } from '../../components/input';
import Block from '../../utils/Block';
import { render } from '../../utils/render';
import { validation } from '../../utils/validation';

import template from './registration.hbs';

export class Registration extends Block {
    constructor() {
        super({
            pattern: {
                login: 'login',
                password: 'password',
                name: 'name',
                email: 'email',
                phone: 'phone',
            },

            registration: (e: Event) => {
                e.preventDefault();
                const login = this.refs.login;
                const email = this.refs.email;
                const firstName = this.refs.first_name;
                const secondName = this.refs.second_name;
                const phone = this.refs.phone;
                const password = this.refs.password;
                const passwordAgain = this.refs.password_again;

                const loginValue = (login as Input).value();
                const emailValue = (email as Input).value();
                const firstNameValue = (firstName as Input).value();
                const secondNameValue = (secondName as Input).value();
                const phoneValue = (phone as Input).value();
                const passwordValue = (password as Input).value();
                const passwordAgainValue = (passwordAgain as Input).value();

                if (validation(login, loginValue) &&
                    validation(password, passwordValue) &&
                    validation(email, emailValue) &&
                    validation(firstName, firstNameValue) &&
                    validation(secondName, secondNameValue) &&
                    validation(phone, phoneValue) &&
                    validation(passwordAgain, passwordAgainValue) &&
                    passwordValue === passwordAgainValue) {
                    console.log({
                        login: loginValue,
                        password: passwordValue,
                        email: emailValue,
                        firstName: firstNameValue,
                        secondName: secondNameValue,
                        phone: phoneValue
                    });
                } else {
                    alert('Пожалуйста, правильно заполните все поля');
                    return;
                }
            },

            link: () => {
                render('auth');
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}