import { User, UserProps } from '../models/User';
import { View } from './Views';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetName,
      'click:.save-model': this.onSaveClick,
    };
  }
  onSaveClick = (): void => {
    this.model.save();
  };
  onSetAgeClick = (): void => {
    console.log('age change');
    this.model.setRandomAge();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
