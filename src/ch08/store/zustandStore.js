import { create } from "zustand";

// const useName = create();
export const useName = create((set) => ({
    name: "",
    setName: (name) => set({"name": name}),
}));