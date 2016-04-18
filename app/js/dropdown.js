import React from 'react';
import { SelectableComponent } from './base-components';
import Field from './field';

class DropdownField extends SelectableComponent {
    render() {
        return (
            <Field fieldName={this.props.fieldName} label={this.props.label}>
                <select className="form-control" name={this.props.fieldName} defaultValue={this.state.selectedItem}>
                    {
                        $.map(this.props.options, function (value, key) {
                            return (
                                <option key={key} value={key}>{value}</option>
                            );
                        })
                    }
                </select>
            </Field>
        )
    }
}

export default DropdownField;