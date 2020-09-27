import React from 'react';
import PropTypes from 'prop-types';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import FormField from 'part:@sanity/components/formfields/default';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

function formatMoney(value) {
  if (!value) return '';
  return Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(value / 100);
}

export default function PriceInput({
  type,
  value,
  onChange,
  inputComponent,
  markers,
}) {
  const { name, title, description } = type;
  const id = `price-input-${title}`;

  return (
    <div>
      <FormField
        labelFor={id}
        label={`${title} - ${formatMoney(value)}`}
        description={description}
        markers={markers}
      >
        <input
          id={id}
          type={name}
          value={value}
          onChange={(event) => onChange(createPatchFrom(event.target.value))}
          ref={inputComponent}
        />
      </FormField>
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};

PriceInput.propTypes = {
  type: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  inputComponent: PropTypes.object,
  markers: PropTypes.array,
};
