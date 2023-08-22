import { registerComponent } from './utils/registerComponent';
import { render } from './utils/render';

import './index.scss';

import { Button } from './components/button';
import { Input } from './components/input';
import { Title } from './components/title';
import { Label } from './components/label';
import { Line } from './components/line';
import { FormAuth } from './components/formAuth';

registerComponent('Button', Button);
registerComponent('ButtonSubmit', Button);
registerComponent('Input', Input);
registerComponent('Title', Title);
registerComponent('Label', Label);
registerComponent('Line', Line);
registerComponent('FormAuth', FormAuth);

window.addEventListener('DOMContentLoaded', () => {
   render('error404')
})