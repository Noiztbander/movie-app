import Link from "next/link";
import React from "react";
import { DETAIL_URL } from "@/routes";

export default function LoadingButton({
  handleClick = () => {},
  disabled = false,
  isSubmmiting = false,
  sendingText = "Enviando",
  idleText = "Guardar",
  type = "submit",
  className = "btn btn-primary btn-sm w-100 d-flex align-items-center justify-content-center gap-3 px-3",
  id = "",
}) {
  return (
    <Link
      href={DETAIL_URL + "/" + id}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      style={{ margin: "10px" }}
      className={className}>
      <span>{isSubmmiting ? sendingText : idleText}</span>
      {isSubmmiting && (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </Link>
  );
}
