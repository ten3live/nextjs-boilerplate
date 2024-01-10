'use client'

import React from "react";
import Image from "next/image";
// import Modal from './Modal'
import { useEffect } from "react";
import Link from "next/link";

export default function App() {
  useEffect(() => {

    require("@/src/js/bootstrap.bundle.min.js");
  }, []); 
  return (
    <div>
    


        <nav class="navbar navbar-expand-md navbar-light bg-light" aria-label="Fourth navbar example">
    <div class="container-fluid">
    <Image width={50} height={50} alt="User settings" src="/topi.png" /> 
      <a class="navbar-brand" href="#">Tahiri Services</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav me-auto mb-2 mb-md-0"></ul>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/services">Services</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/about">About</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/contact">Contact</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Profile</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li><Link class="dropdown-item" href="/login">Login</Link></li>
              <li><Link class="dropdown-item" href="/register">Register</Link></li>
              <li><Link class="dropdown-item" href="/settings">Settings</Link></li>
              <li><Link class="dropdown-item" href="/logout">Logout</Link></li>
   
            </ul>
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </div>
  </nav>

    </div>
  );
}
