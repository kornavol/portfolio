import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo_small.png";

export default function NavBar() {
  return (
<div className="container-fluid">
  <div className="row d-flex d-md-block flex-nowrap wrapper">
    <div className="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
      <div className="list-group border-0 text-center text-md-left">
        <a href="#menu1" className="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i className="fa fa-dashboard" /> <span className="d-none d-md-inline">Dashboard</span> </a>
        <div className="collapse" id="menu1" data-parent="#sidebar">
          <a href="#menu1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 1 </a>
          <div className="collapse" id="menu1sub1" data-parent="#menu1">
            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem a</a>
            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem b</a>
            <a href="#menu1sub1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem c </a>
            <div className="collapse" id="menu1sub1sub1">
              <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem c.1</a>
              <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem c.2</a>
            </div>
            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem d</a>
            <a href="#menu1sub1sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem e </a>
            <div className="collapse" id="menu1sub1sub2">
              <a href="#" className="list-group-item">Subitem e.1</a>
              <a href="#" className="list-group-item">Subitem e.2</a>
            </div>
          </div>
          <a href="#menu1sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 2</a>
          <div className="collapse" id="menu1sub2" data-parent="#menu1">
            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 1 a</a>
            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 2 b</a>
            <a href="#menu1sub1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 3 c </a>
            <div className="collapse" id="menu1sub1sub1">
              <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.1</a>
              <a href="#" className="list-group-item" data-parent="#menu1sub1sub1">Subitem 3 c.2</a>
            </div>
            <a href="#" className="list-group-item" data-parent="#menu1sub1">Subitem 4 d</a>
            <a href="#menu1sub1sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 5 e </a>
            <div className="collapse" id="menu1sub1sub2">
              <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.1</a>
              <a href="#" className="list-group-item" data-parent="#menu1sub1sub2">Subitem 5 e.2</a>
            </div>
          </div>
          <a href="#" className="list-group-item">Subitem 3</a>
        </div>
        <a href="#" className="list-group-item d-inline-block collapsed"><i className="fa fa-film" /> <span className="d-none d-md-inline">Item 2</span></a>
        <a href="#menu3" className="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i className="fa fa-book" /> <span className="d-none d-md-inline">Item 3 </span></a>
        <div className="collapse" id="menu3" data-parent="#sidebar">
          <a href="#" className="list-group-item" data-parent="#menu3">3.1</a>
          <a href="#menu3sub2" className="list-group-item" data-toggle="collapse" aria-expanded="false">3.2 </a>
          <div className="collapse" id="menu3sub2">
            <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 a</a>
            <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 b</a>
            <a href="#" className="list-group-item" data-parent="#menu3sub2">3.2 c</a>
          </div>
          <a href="#" className="list-group-item" data-parent="#menu3">3.3</a>
        </div>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-heart" /> <span className="d-none d-md-inline">Item 4</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-list" /> <span className="d-none d-md-inline">Item 5</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-clock-o" /> <span className="d-none d-md-inline">Link</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-th" /> <span className="d-none d-md-inline">Link</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-gear" /> <span className="d-none d-md-inline">Link</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-calendar" /> <span className="d-none d-md-inline">Link</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-envelope" /> <span className="d-none d-md-inline">Link</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-bar-chart-o" /> <span className="d-none d-md-inline">Link</span></a>
        <a href="#" className="list-group-item d-inline-block collapsed" data-parent="#sidebar"><i className="fa fa-star" /> <span className="d-none d-md-inline">Link</span></a>
      </div>
    </div>
    <main className="col-md-9 float-left col px-5 pl-md-2 pt-2 main">
      <a href="#" data-target="#sidebar" data-toggle="collapse"><i className="text-dark fa fa-navicon fa-lg py-2 p-1" /></a>
      <div className="page-header">
        <h2 className="display-4 font-weight-light">Bootstrap 4 Sidebar</h2>
      </div>
      <p className="lead">A responsive, multi-level vertical accordion menu.</p>
      <hr />
      <p>Responsive sidebar, vertical accordion menu on Bootstrap</p>
    </main>
  </div>
</div>


  );
}
