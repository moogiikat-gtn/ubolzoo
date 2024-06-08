"use client";

import { useRef } from "react";

export const Invitation: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  return (
    <>
      <button
        className="btn btn-secondary text-slate-50"
        onClick={() => dialogRef.current?.showModal()}
      >
        Invite someone
      </button>
      <dialog id="my_modal_1" className="modal" ref={dialogRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Invite user</h3>
          <div className="py-4">
            <select
              name="partner"
              id="partner"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Who do you want to invite?
              </option>
              <option>Clara</option>
              <option>Nicole</option>
            </select>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary text-white">Invite</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
