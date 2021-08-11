


var topbar = document.getElementById('headerr')

const content1=`<div class="gridcontainer8" style="">
<h1 style = "color:#fcba03; font-size:54px; margin:auto;margin:auto;font-weight:850;">PITT</h1>
<img src="images/verticalbar.png" alt="verticalbar" style = "max-width:15px; height:53.33px;justify-self:center;align-self:center;"></img>

<h2 style = " font-size:15px; grid-column:3/4; margin:auto; font-weight:bold;">Swanson School of Engineering<br>Engineering Science</h2>


</div>
<div class="block"> </div>
<div id="bugfix"></div>
<div id="fixbar">
    <div class="navstyle" id="Topnavbar">
    
    <a href="index.html" class="active">Home</a>
    <div class="dropdown">
        <button class="dropbtn">Research</button>
        <div class="dropdown-content">
            <a href="EngineeringScience - MCSI.html">Mascaro Center for Sustainable Innovation (MCSI) </a>
            <a href="EngineeringScience - UHC.html">University Honors College</a>
            <a href="https://www.engineering.pitt.edu/Research/">SSOE Research Center</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn" style="justify-items: center;align-self:center;align-items: center">People</button>
        <div class="dropdown-content">
        <a href="EngineeringScience - Aministrative Contacts.html">Administrative Contacts</a>
        <a href="EngineeringScience - Advisory Boards.html">Advisory Boards</a>
        <a href="https://www.engineering.pitt.edu/People/Staff-Listing/">Complete Staff Directory</a>    
        <a href="https://www.engineering.pitt.edu/People/Faculty-Search/">Faculty</a>
            
            
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn" style="justify-items: center;align-self:center;align-items: center">Students</button>
        <div class="dropdown-content">
            <a href="EngineeringScience - Prospective Students.html">Prospective Students</a>
            <a href="EngineeringScience - Current Students.html">Current Students</a>
            <a href="EngineeringScience - Sample schedules - Engineering Mechanics.html">Sample Schedule-<br>Engineering Mechanics</a>
            <a href="EngineeringScience - Sample schedules - Engineering Physics.html">Sample Schedule-<br>Engineering Physics</a>
            <a href="EngineeringScience - Sample schedules - Nano-chembio.html">Sample Schedule-<br>Nanotechnology-ChemBio</a>
            <a href="EngineeringScience - Sample schedules - Nano-MaterialsPhysics.html">Sample Schedule-<br>Nanotechnology-MaterialsPhysics</a>
        </div>
    </div>
    <a href="EngineeringScience - Career.html" class="normicon">Career</a>
    <div class="dropdown">
        <button class="dropbtn" style="justify-items: center;align-self:center;align-items: center">Alumni</button>
        <div class="dropdown-content">
            <a href="EngineeringScience - Alumni spotlight.html">Alumni spotlight</a>
            
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn" style="justify-items: center;align-self:center;align-items: center">Life@ES</button>
        <div class="dropdown-content">
        <a href="EngineeringScience - Current Student Feedbacks.html">Student Feedbacks</a>
            <a href="#">Student Projects</a>
            
        </div>
    </div>
    
    
    <a href="javascript:void(0);" style="font-size:12px;" class="icon" onclick="Trigger()">&#9776;</a>
    
    <div class="gridcontainer16">
    <p style=" font-family: 'Lobster', cursive;, sans-serif;margin-top:0;font-size:26px;margin-bottom:0;text-align:right;-webkit-text-stroke: 0.1px black;color:#fcba03;align-self:center;">Forging Ahead!</p>
    </div>
    </div>
</div>`


topbar.innerHTML= content1;



var bbar = document.getElementById("footerr")

const content2=`<div class="gridcontainer19">
			
				
<img src="images/icon.png" alt="Engineering Science icon" style="margin-right:24px;">

<a href="EngineeringScience - Location.html" style="margin-right:24px;">Maps and Locations</a>
<a href="https://find.pitt.edu/" class="" style="margin-right:24px;">Find People at Pitt</a>
<a href="https://www.join.pitt.edu/" class="" style="margin-right:24px;">Jobs</a>
<a href="https://my.pitt.edu/" class="" style="margin-right:24px;">MyPitt</a>
<a href="EngineeringScience - Acknowledgement.html" class="" style="margin-right:24px;">Acknowledgement</a>
</div>`

bbar.innerHTML= content2;

var b = document.querySelector("main");
var height = screen.availHeight;

document.body.setAttribute("min-height",  height + 'px', false);


