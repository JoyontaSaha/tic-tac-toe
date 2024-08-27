import { useState } from "react";

export function OrderToggleSwitch({ isAscending, onToggle }) {
  

  return (
    <div className="form-check form-switch text-start my-2">
      <input
        className="form-check-input"
        type="checkbox"
        id="orderToggleSwitch"
        checked={isAscending}
        onChange={onToggle} />
      <label className="form-check-label mx-1" htmlFor="orderToggleSwitch">
        {isAscending ? 'Ascending Order' : 'Descending Order'}
      </label>
    </div>
  );
}
