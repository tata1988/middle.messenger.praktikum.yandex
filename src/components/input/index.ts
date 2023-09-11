import Block from "../../utils/Block";
import template from "./input.hbs";

interface IInputProps {
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
  constructor(props: IInputProps) {
    super({
      ...props,
      events: {
        input: props.onChange,
        blur: props.onBlur,
        focus: props.onFocus,
      },
    });
  }

  public value() {
    return (this._element as HTMLInputElement).value;
  }

  public files() {
    return (this._element as HTMLInputElement).files;
  }

  public setValue(value: string) {
    return ((this.element as HTMLInputElement).value = value);
  }

  public getName() {
    return (this.element as HTMLInputElement).name;
  }

  render() {
    return this.compile(template, this.props);
  }
}
