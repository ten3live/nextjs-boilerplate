'use client'

import React from "react";
import Image from "next/image";
// import Modal from './Modal'
import { useEffect } from "react";

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
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Login</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
            <ul class="dropdown-menu" aria-labelledby="dropdown04">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
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
