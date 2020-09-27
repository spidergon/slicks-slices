import React from 'react';
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
  console.log(markers);
  const title = `${type.title} - ${formatMoney(value)}`;

  return (
    <div>
      {/* <h2>
        {type.title} - {formatMoney(value)}
      </h2>
      <p>{type.description}</p> */}
      <FormField label={title} description={type.description}>
        <input
          type={type.name}
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
