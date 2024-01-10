import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css"



const Navbar = () => {
  return (
   <nav className="navbar navbar-expand-lg bg-body-success">
     <div className="container mx-auto mt-2 d-flex justify-content-between align-items-center">
        <div><h5 ><Link className="navbar-brand fs-4 text-dark fw-bold text-decoration-none text-center" href={"/"}>Autism<span className="text-danger">Connect</span>Hub</Link></h5></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigationn">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-lg-0 mb-3">
        <li className="nav-item">
          <Link href={"/services"} className="nav-link text-danger fw-bold active" aria-current="page">
            Services
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/"} className="nav-link text-danger fw-bold">
            Careers
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/fund-account"} className="nav-link text-danger fw-bold">
            Locations
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/"} className="nav-link text-danger fw-bold">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/login"} className="nav-link text-danger fw-bold">
            Contact Us
          </Link>
        </li>
      </ul>
        </div>
        <div>
            <button className="fw-normal btn btn-danger px-4"> Get Started</button>
        </div>
    </div>
   </nav>
  );
};

export default Navbar;
