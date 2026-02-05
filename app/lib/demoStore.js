"use client";

const KEY = "dg77_demo";

function base() {
  return {
    currentUser: null,
    users: [{ username: "admin", password: "admin123", balance: 99999, role: "admin" }],
  };
}

export function load() {
  if (typeof window === "undefined") return base();
  const raw = localStorage.getItem(KEY);
  if (!raw) {
    localStorage.setItem(KEY, JSON.stringify(base()));
    return base();
  }
  return JSON.parse(raw);
}

export function save(s) {
  localStorage.setItem(KEY, JSON.stringify(s));
}

export function login(u, p) {
  const s = load();
  const user = s.users.find(x => x.username === u && x.password === p);
  if (!user) return false;
  s.currentUser = user;
  save(s);
  return true;
}

export function logout() {
  const s = load();
  s.currentUser = null;
  save(s);
}

export function getCurrent() {
  const s = load();
  return s.currentUser;
}

