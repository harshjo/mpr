var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
// var i = 1; // iterator
// var y =  0; // line 44 ( no. of faily members)
var j = 0; // Integer type of number of family members
var form = document.getElementById("xform"); // the form
var add_tab = document.getElementById("add_tab_div"); // div.cardContent, used to add family member details tab
//var mem_details = document.getElementById("mem_details"); // the family members details part
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
    // if(currentTab == 2){
    //     y = document.getElementById("no_mems").value; // y contains no. of family members
    //     if (y  == 0){
    //         // remove the details part if no family member
    //         add_tab.removeChild(add_tab.childNodes[7]);
    //     } 
    //     else if(y >= 2){
    //         // clone and append the detils part for all family members
    //         var l = 8; // the node before which family members details tab is added
    //         while(i <= (y - 1)){
    //             var cln = mem_details.cloneNode(true);
    //             add_tab.insertBefore(cln, add_tab.childNodes[l]);
    //             l++;
    //             i++;
    //         }
    //     }
    // }
    
    //j = Number(y); // no of family members (used to change headings)
    // Check value of counter for heading changes
    if (counter < (j + 4)){
        heading.innerText = "PERSONAL DETAILS";
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
        // data gets sent to uploads
        sendData();
        // the form gets submitted:
        document.getElementById("xform").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}


function sendData() {
    const userData = {
        first_name: document.querySelector('input[name="first_name"]').value,
        last_name: document.querySelector('input[name="last_name"]').value,
        age: document.querySelector('input[name="age"]').value,
        profession: document.querySelector('input[name="profession"]').value,
        address: document.querySelector('input[name="address"]').value,
        gender: document.querySelector('input[name="gender"]').value,
        height: document.querySelector('input[name="height"]').value,
        weight: document.querySelector('input[name="weight"]').value,
        no_family_members: document.querySelector('input[name="no_family_members"]').value,
        mon_fam_income: document.querySelector('input[name="mon_fam_income"]').value,
        last_class_attended: document.querySelector('input[name="last_class_attended"]').value,
        reason_to_join_school: document.querySelector('input[name="reason_to_join_school"]').value,
        // mem_first_name: document.querySelector('input[name="mem_first_name"]').value,
        // mem_last_name: document.querySelector('input[name="mem_last_name"]').value,
        // mem_relationship: document.querySelector('input[name="mem_relationship"]').value,
        // mem_age: document.querySelector('input[name="mem_age"]').value,
        // mem_gender: document.querySelector('input[name="mem_gender"]').value,
        // marital_status: document.querySelector('input[name="marital_status"]').value,
        // employment_status: document.querySelector('input[name="employment_status"]').value,
        // mem_uidai: document.querySelector('input[name="mem_uidai"]').value,
        overall_health: document.querySelector('input[name="overall_health"]').value,
        genetic_problems: document.querySelector('input[name="genetic_problems"]').value,
        last_health_checkup: document.querySelector('input[name="last_health_checkup"]').value,
        food_type: document.querySelector('input[name="food_type"]').value,
        water_source: document.querySelector('input[name="water_source"]').value,
        usually_faced_problems: document.querySelector('input[name="usually_faced_problems"]').value,
        chronic_conditions: document.querySelector('input[name="chronic_conditions"]').value,
        monthly_expenditure_on_health: document.querySelector('input[name="monthly_expenditure_on_health"]').value,
        willing_daily_expenditure_on_health: document.querySelector('input[name="willing_daily_expenditure_on_health"]').value,
        hospital_visit_freq: document.querySelector('input[name="hospital_visit_freq"]').value,
        hospital_type_prefered: document.querySelector('input[name="hospital_type_prefered"]').value,
        health_awareness: document.querySelector('input[name="health_awareness"]').value,
        children_fully_immunized: document.querySelector('input[name="children_fully_immunized"]').value,
        birth_control_options: document.querySelector('input[name="birth_control_options"]').value,
        smoker: document.querySelector('input[name="smoker"]').value,
        anemic: document.querySelector('input[name="anemic"]').value,
        bp_medicine: document.querySelector('input[name="bp_medicine"]').value,
        local_hospital_rating: document.querySelector('input[name="local_hospital_rating"]').value,
        hospital_equipped: document.querySelector('input[name="hospital_equipped"]').value,
        hospital_travel_time: document.querySelector('input[name="hospital_travel_time"]').value,
        personal_doc: document.querySelector('input[name="personal_doc"]').value,
        primary_healthcare_team_access: document.querySelector('input[name="primary_healthcare_team_access"]').value,
        hospital_wait_time: document.querySelector('input[name="hospital_wait_time"]').value,
        illness_treatment_place: document.querySelector('input[name="illness_treatment_place"]').value,
        why_govt_facility_not_used: document.querySelector('input[name="why_govt_facility_not_used"]').value,
        awareness_towards_insurance: document.querySelector('input[name="awareness_towards_insurance"]').value,
        insurance_type: document.querySelector('input[name="insurance_type"]').value,
        thermometer_at_home: document.querySelector('input[name="thermometer_at_home"]').value,
        filtered_water_access: document.querySelector('input[name="filtered_water_access"]').value,
        first_aid_kit_at_home: document.querySelector('input[name="first_aid_kit_at_home"]').value,
        air_ventilation_quality: document.querySelector('input[name="air_ventilation_quality"]').value,
        is_society_clean: document.querySelector('input[name="is_society_clean"]').value,
        toilet_type_used: document.querySelector('input[name="toilet_type_used"]').value,
        last_checkup_camp_held: document.querySelector('input[name="last_checkup_camp_held"]').value,
        cooking_fuel_type_used: document.querySelector('input[name="cooking_fuel_type_used"]').value,
        is_cooking_done_in_living_room: document.querySelector('input[name="is_cooking_done_in_living_room"]').value,
        bank_account: document.querySelector('input[name="bank_account"]').value,
        bank_type: document.querySelector('input[name="bank_type"]').value,
        govt_policies_availed: document.querySelector('input[name="govt_policies_availed"]').value
    }
    $.ajax({
        async: true,
        crossDomain: true,
        url: "/send-data",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: userData,
        success: function (response) {
            console.log(response);
        },
        error: function (response) {
            console.log("error")
        }
    });
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