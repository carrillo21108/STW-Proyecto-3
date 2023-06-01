import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss'
import App from './App'
import Proyectos from './Proyectos'
import icon from '../public/img/computer.ico'

const linkElement = document.querySelector('link[rel="shortcut icon"]');
linkElement.setAttribute('href',icon)

$(document).ready(function() {
    $(window).scroll(function() {
      $('.animate__animated').each(function() {
        var elemPos = $(this).offset().top;
        var elemHeight = $(this).height();
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
  
        if (elemPos < scrollPos + windowHeight - elemHeight) {
          $(this).addClass('animate__fadeInUp');
        }
      });
    });
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/proyectos" element={<Proyectos />} />
    </Routes>
  </Router>
)
  