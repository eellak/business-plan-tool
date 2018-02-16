/**
     * These are the JSON objects that they are pulling from the backend. 
     * Each object cames from a REST API call that is made from the client side application (bptool).
     * You can see the object sorted by Team features number.
     */

//Team 2.1 
"Identity": { //suports GET,POST,PUT,DELETE
  "Id": 1,
  "BusinessPlanId": 1,
  "Name": "ΑΠΘ",
  "Date": 20180108,
  "LegalForm": "Α.Ε.",
  "OrderOfBusiness": "Πανεπιστημιο",
}
  
"Client":{ //suports GET,POST,PUT,DELETE
    "ID": 1,
    "IdentityId": 1,
    "Name": "client 1"
 }
    
"IdentityClient":  //supports GET
{
    "ID": 2,
    "BusinessPlanId": 2,
    "Name": "identity 2",
    "Date": 312012,
    "LegalForm": "legal form 2",
    "OrderOfBusiness": "order of business 2",
    "Clients": [
        {
            "ID": 2,
            "IdentityId": 2,
            "Name": "client 3"
        },
        {
            "ID": 4,
            "IdentityId": 2,
            "Name": "client 4"
        }
    ]
}

//Team 2.2
"Description": { //suports GET,POST,PUT,DELETE
    "ID": 1,
    "IdentityId": 1,
    "Text": "description 1"
}

//Team 3.1
 "Manager":{ //suports GET,POST,PUT,DELETE
    "ID": 3,
    "BusinessPlanId": 3,
    "Name": "manager 3",
    "Surname": "manager surname 3",
    "Job": "job 3",
    "LinkedIn": "linked 3"
}

//Team 3.2
" Employee":{ //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "Job": "job 1"
}

//Team 3.3
  "Partner": { //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "Name": "partner 1",
    "SurName": "partner surname 1",
    "Expertise": "expertise 1",
    "LinkedIn": "linked 1",
    "From": 1112018,
    "Until": 1012018,
    "Duties": "duty 1"
}

//Team 3.4
"EmployeeSalary":{ //suports GET,POST,PUT,DELETE
    "EmployeeID": 1,
    "Salary": 4321,
    "Bonus": 322,
    "Employment_type": "employ type 1"
}
   

//Team 4.1
"Faculty":{ //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "Adress": "address 1",
    "Usage": "some usage 1",
    "M2": 43214,
    "Ownership_type": "type 1",
    "Start_date": 1012018
}

//Team 4.2
"Equipment": { //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "EquipType": "equipment type 1",
    "Address": "address 1",
    "Division": "div 1",
    "Firsthand": 1, //0=false ,1=true
    "Acquisition_date": 1051967
}

//Team 4.3
"RunningCost": { //supports GET
    "FacultyCosts": [ //each facultyCost supports GET,POST,PUT,DELETE
        {
            "FacultyId": 1,
            "Cost": 55252
        },
        {
            "FacultyId": 2,
            "Cost": 321354
        },
        {
            "FacultyId": 3,
            "Cost": 654321
        }
    ],
    "EquipmentCosts": [ //each equipmentCost supports GET,POST,PUT,DELETE
        {
            "EquipmentId": 1,
            "Cost": 321321
        },
        {
            "EquipmentId": 2,
            "Cost": 123456
        },
        {
            "EquipmentId": 3,
            "Cost": 3321
        }
    ],
    "FacultyExpenses": 1030927,
    "EquipmentExpenses": 448098
}

//Team 5.1, 5.2, 5.3 (for teams wanting only some attributes, appropriate consumers must be made)
"Product": { //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "ProductType": false, //0=false=service ,1=true=product
    "Name": "service 1",
    "Directed_to": "dir1",
    "Innovation_factor": "fac1",
    "Technology": "tec1",
    "License": "lic1",
    "Competition": "comp1",
    "Price": 321,
    "Description": "desc1",
    "Copyright": "cpr1",
    "Certificate": null,
    "ProductCost": 44,
    "NumProduct": 1,
    "PercentageIncome": 50
}

//Team 6.1
"SWOT": { //suports GET,POST,PUT,DELETE
    "Strong": [
            "strong 1",
            "strong 2",
            "strong 3"
        ],
    "Weak": [
        "weak 1",
        "weak 2",
        "weak 3"
    ],
    "Opportunities": [
        "opportunity 1",
        "opportunity 2",
        "opportunity 3"
    ],
    "Threats": [
        "threat 1",
        "threat 2",
        "threat 3"
    ],
    "BusinessPlanId": 1
}

//Team 6.2
"Factor": { //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "Description": "pestel 1",
    "Example": "example 1"
}

//Team 6.3
"Note": { //suports GET,POST,PUT,DELETE
  "BusinessPlanId": 1,
    "Text": "note 1"
}

//Team 7.1
"Strategy":{ //suports GET,POST,PUT,DELETE
    "BusinessPlanId": 1,
    "Promotion": "promo 1",
    "Contribution": "contribution 1",
    "MarketEntry": "entry 1",
    "PublicRelations": "relation 1",
    "Avoid": "avoidance 1"
}

//Team 7.2
"MarketingAction":{ //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "Title": "marketing action 1",
    "ImplementationTime": 12351,
    "Frequency": 32,
    "ImplementationCost": 43214,
    "TotalCost": "904358"
}

//Team 8.1
"StartAction": { //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "Name": "action 1",
    "ActionCost": 3218
}
    

//Team 8.2
"FunctionCost": { //supports GET
  "Functions": [  //each Function supports GET/POST/PUT/DELETE
        {
            "ID": 1,
            "BusinessPlanId": 1,
            "Name": "start function 1",
            "FunctionCost": 59592
        },
        {
            "ID": 2,
            "BusinessPlanId": 3,
            "Name": "start function 2",
            "FunctionCost": 292
        },
        {
            "ID": 3,
            "BusinessPlanId": 2,
            "Name": "start function 3",
            "FunctionCost": 59
        }
    ],
    "FunctionsTotalCost": 59943
}

//Team 8.3
"Deadspot": { //suports GET,POST,PUT,DELETE
   "DeadspotID": 1,
   "ProductID": 1,
   "BusinessPlanId": 1,
   "Spot": "dead1"
}

// Appendix: Upload functionality
"Link": { //suports GET,POST,PUT,DELETE
    "ID": 1,
    "BusinessPlanId": 1,
    "URL": "url 1",
    "Title": "title 1",
    "Section": "section 1"
}

//Team 1.1
"Conclusion": { //suports GET,POST,PUT,DELETE
    "BussinesPlanId": 1,
    "Text": "conclusion 1"
}
