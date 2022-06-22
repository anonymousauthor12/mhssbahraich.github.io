class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<header>
        <nav class="navbar navbar-expand-sm  navbar-dark" id="mainHeading">
        <div class="container-fluid">
            <img id="logo" src="images/logo.jpg">
            <h3 id="school_name">MONTESSORI HIGHER SECONDARY SCHOOL</h1>
            <h5 id="school_Address">Mewati Pura, Bahraich,<br> UTTAR PRADESH <br> Pin Code : 271801 </h1>
        </div>
        </nav>
        
    </header>`
    }
}

customElements.define('my-header',MyHeader);

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<div class="last">
        <nav class="navbar navbar-expand-sm  navbar-dark" id="mainHeading">
          <div class="container-fluid">
            <div>
              <h3 style="color: white;">Authorised by <b> Mrs. Rita Verma</b></h3>
              <h3 style="color: white;">Principal</h3> 
              <h4 style="color: white;">MONTESSORI HIGHER SECONDARY SCHOOL</h4>
              <br><br>        </div>
              <div>
                <h3 style="color: white;">Important Links*</h3>
                <ul>
                    <a  href="https://ncert.nic.in/" target="_blank">NCERT Books</a><br>
                    <a href="https://upmsp.edu.in/" target="_blank">UP Board</a><br>
                    <a href="https://web.umang.gov.in/landing/" target="_blank">Umang</a><br>
                    <a href="https://bahraich.nic.in/" target="_blank">Bahraich Official</a><br>
                    <a href="https://diksha.gov.in/up/" target="_blank">Diksha</a><br>
                    <a href="http://sarkariresult.com" target="_blank">Sarkari Result</a><br>
                   
                </ul>
              </div>
          </div>
          
          </nav>
          <div class="la">
            <h5 style="color: white;">©Copyright MONTESSORI HIGHER SECONDARY SCHOOL, All Rights Reserved. </h5>
        </div>
      </div>
      `
    }
}

customElements.define('my-footer',MyFooter);


class MyHead extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`<nav class="navbar navbar-expand-sm navbar-dark" id="navBar">
        <div class="container-fluid">
        <div class="top" style="color:white"><img src="images/logo.jpg" style="height: 50px;"><h6 > MONTESSORI HIGHER SECONDARY SCHOOL<h6></div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" id="home" href="Home.html">Home</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" id="about" href="AboutUs.html">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="gallery" href="other.html">Gallery</a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" id="faculty" href="Faculties.html">Faculties</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact" href="ContactUs.html">Contact Us</a>
                    </li>    
                </ul>
            </div>
        </div>
    </nav>`
    }
}

customElements.define('my-head',MyHead);


class MyNav extends HTMLElement{
    connectedCallback(){
        this.innerHTML=``
    }
}

customElements.define('my-nav',MyNav);


class MyGallery extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="head">
        <h1 style="color:black" > GALLERY</h1>

        </div>
        <nav class="navbar navbar-expand-sm navbar-dark" id="galleryHeader">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
            <div class="gBar">
                <ul class="navbar-nav" id="navG">
                <li class="nav-item1">
                    <a  href="Home.html">HOME</a>
                </li>
                    <li class="nav-item1">
                        <a  href="activities.html">Activities</a>
                    </li>
                    <li class="nav-item1">
                    <a href="assembly.html">Assembly</a>
                    </li>
                    <li class="nav-item1">
                    <a href="building.html">Building</a>
                    </li>
                    <li class="nav-item1">
                    <a href="class.html">Class</a>
                    </li>
                    <li class="nav-item1">
                    <a href="maingate.html">Main Gate</a>
                    </li> 
                    <li class="nav-item1">
                    <a href="playarea.html">Play Area</a>
                    </li>
                    <li class="nav-item1">
                    <a href="principal.html">Principal Office</a>
                    </li>
                    <li class="nav-item1">
                    <a href="temple.html">Temple</a>
                    </li>
                    <li class="nav-item1">
                    <a href="other.html">Others</a>
                    
                   
                </ul>
            </div>
        </div>
        </div>
    </nav>`
    }
}

customElements.define('my-gallery',MyGallery);
