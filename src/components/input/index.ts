import Block from '../../utils/Block';
import template from './input.hbs';

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  value: string;
  className: string;
  ref?: string;
  name?: string;
  pattern?: string;
  title?: string;
  onBlur?: (e: Event) => void;
  onChange?: (e: Event) => void;
  onFocus?: (e: Event) => void;
  events: {
    input: () => void;
    blur: () => void;
    focus: () => void;
  };
}

export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        input: {
          input: props.onChange,
          blur: props.onBlur,
          focus: props.onFocus,
        }
      },
    })
  }

  public value() {
    return this.element!.value;
  }

  public getAttribute(pattern: any) {
    return this.element!.getAttribute(pattern);
  } 

  render() {
    return this.compile(template, this.props);
  }
}
