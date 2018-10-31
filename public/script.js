var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
var i = 1; // iterator
var y =  0; // line 44 ( no. of faily members)
var j = 0; // Integer type of number of family members
var form = document.getElementById("xform"); // the form
var add_tab = document.getElementById("add_tab_div"); // div.cardContent, used to add family member details tab
var mem_details = document.getElementById("mem_details"); // the family members details part
var heading = document.getElementById("fh1"); // the heading that changes
var inputs = document.getElementsByTagName("input");
var counter = 0; // Counter used for changing headings

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
}


function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Hide the current tab:
    x[currentTab].style.display = "none";
    //increment or decrement the counter
    if(n == 1)
        counter++;
    else
        counter--;
    
    // For number of family member details tab, first get the number of family members:
    if(currentTab == 2){
        y = document.getElementById("no_mems").value; // y contains no. of family members
        if (y  == 0){
            // remove the details part if no family member
            add_tab.removeChild(add_tab.childNodes[7]);
        } 
        else if(y >= 2){
            // clone and append the detils part for all family members
            var l = 8; // the node before which family members details tab is added
            while(i <= (y - 1)){
                var cln = mem_details.cloneNode(true);
                add_tab.insertBefore(cln, add_tab.childNodes[l]);
                l++;
                i++;
            }
        }
    }
    
    j = Number(y); // no of family members (used to change headings)
    // Check value of counter for heading changes
    if (counter < (j + 4)){
        heading.innerText = "PERSONAL DETAILS"
    }
    if (counter >= (j + 4)){
        heading.innerText = "CURRENT PERSONAL HEALTH CONDITION";
    }
    if(counter >= (j + 22)){
        heading.innerText = "HOSPITAL/ CLINIC FACILITIES";
    }
    if(counter >= (j + 33)){
        heading.innerText = "HOUSEHOLD/ AREA CONDITIONS";
    }

    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        // the form gets submitted:
        document.getElementById("xform").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

// function disable1(){
//     var dis_obj  = document.getElementsByClassName("dis1");
//     if(document.getElementById("dis1_check").checked == true){
//         for(k = 0; k < dis_obj.length; k++){
//             dis_obj[k].removeAttribute("checked");
//             dis_obj[k].setAttribute("disabled", "true");
//         }
//     }
//     else if(document.getElementById("dis1_check").checked == false){
//         for(k = 0; k < dis_obj.length; k++){
//             dis_obj[k].removeAttribute("disabled");
//         } 
//     }
// }



// console.log(form.childNodes[23].innerText);
//console.log(add_tab);
// console.log(form.childNodes[20]);