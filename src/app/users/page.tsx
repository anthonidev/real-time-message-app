"use client";
import { signOut } from "next-auth/react";

const User = () => {
  return (
    <div>
      <button type="button" onClick={() => signOut()}>
        logout
      </button>
    </div>
  );
};

export default User;
