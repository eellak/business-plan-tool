/**
     * These are the JSON objects that they are pulling from the backend. 
     * Each object cames from a REST API call that is made from the client side application (bptool).
     * You can see the object sorted by Team features number.
     */

//Team 2.1 
"Identity": { //suports GET,POST,PUT,DELETE
  "Id": 1,
  "BpID": 1,
  "Name": "ΑΠΘ",
  "Date": 20180108,
  "LegalForm": "Α.Ε.",
  "OrderOfBusiness": "Πανεπιστημιο",
  "Clients": ["Πελατες1", "Πελατες2", "Πελατες3"]
}

//Team 2.2
"Description": { //suports GET,POST,PUT,DELETE
  "Id" : 1,
  "IdentityId" : 1,
  "Text": "Μεγαλο κειμενο για την περιγραφη της επιχειρησης."
}

//Team 3.1
  "Manager":{ //suports GET,POST,PUT,DELETE
    "Id": 1,  
    "BusinessPlanId" : 1,
    "Name": "Manager1",  
    "Surname": "hisSurname1",  
    "Job": "Job1",  
    "LinkedIn": "www1"
}

//Team 3.2
  " Employee":{ //suports GET,POST,PUT,DELETE
    "Id": 1, 
    "Job": "Πωλητής/Λογιστής/Καθαριστής" 
 }

//Team 3.3
  "Partner": { //suports GET,POST,PUT,DELETE
    "Id": 1,
    "BusinessPlanId" : 1,
    "Name": "Partner1", 
    "SurName": "hisSurname1", 
    "Expertise": "Exp1", 
    "LinkedIn": "www1", 
    "From": 20171115, 
    "Until": 20190920, 
    "Duties": "Περιγραφη καθηκοντων 1"
}

//Team 3.4
"EmployeeSalary":{ //suports GET,POST,PUT,DELETE
    "EmployeeID": 2, 
    "Salary": 17900, 
    "Bonus": 400, 
    "Employment_type": "Ημιαπασχοληση"
}
   

//Team 4.1
"facultyList":{ //suports GET,POST,PUT,DELETE
  "Id" : 1,
  "BusinessPlanId" : 1,
  "Adress": "Adress1", 
  "Usage": "Usage1", 
  "M2": 570,
  "Ownership_type": "Type1", 
  "Start_date": 20190823
}

//Team 4.2
"equipmentList": { //suports GET,POST,PUT,DELETE
  "Id" : 1,
  "BusinessPlanId" : 1,
  "EquipType": "Equipment1",
  "Adress": "Adress1", 
  "Division": "Div1", 
  "Firsthand": true, 
  "Acquisition_date": 20160519
}

//Team 4.3
"RunningCost": { //supports GET
  "FacultyCosts": { //this is a list ,and each FacultyCost supports GET,POST,PUT,DELETE
    "FacultyId": 2, 
    "Cost": 8000
   }
  "EquipmentCosts":{ //this is a list ,and each FacultyCost supports GET,POST,PUT,DELETE
    "EquipmentId":1, 
    "Cost": 5400
   }
  "FacultyExpenses": 150000,
  "EquipmentExpenses": 210000
}

//Team 5.1, 5.2, 5.3 (for teams wanting only some attributes, appropriate consumers must be made)
"Product": { //suports GET,POST,PUT,DELETE
  "ID": 1, 
  "BusinessPlanId" 1,
  "ProductType": false, //product:true= product , product:false = service
  "Name": "Prod1", 
  "Directed_to": "Dir1", 
  "Innovation_factor": "Inn1",
  "Technology": "Tech1", 
  "License" : "License1",
  "Competition": "Comp1", 
  "Price": 212331,
  "Description": "Desc1"
  "Copyright": "copyright1",
  "Certificate": "Certificate",
  "ProductCost": 321,
  "NumProduct" : 5,
  "PercentageIncome" : 50  
}

//Team 6.1
"SWOT": { //suports GET,POST,PUT,DELETE
  "BusinessPlanId": 1,
  "Strong": ["Δυνατα1","Δυνατα2","Δυνατα3"]
  "Weak": ["Αδυνατα1","Αδυνατα2","Αδυνατα3"]
  "Opportunities": ["Ευκαιριες1","Ευκαιριες2","Ευκαιριες3"]
  "Threats": ["Απειλες1","Απειλες2","Απειλες3"]
  }
}

//Team 6.2
"Factor": { //suports GET,POST,PUT,DELETE
  "ID": 1,
  "BusinessPlanId": 3,
  "Description": "Περιγραφη1", 
  "Example": "Παραδειγμα1"
}

//Team 6.3
"Note": { //suports GET,POST,PUT,DELETE
  "BusinessPlanId": 1,
  "text": "Κειμενο παρατηρησεων."
}

//Team 7.1
"Strategy":{ //suports GET,POST,PUT,DELETE
  "BusinessPlanId": 1,
  "Promotion": "Καναλια προβολης",
  "Contribution": "Καναλια διανομης",
  "MarketEntry": "Τεχνικες εισαγωγης στην αγορα",
  "PublicRelations": "Δημοσιες Σχεσεις",
  "Avoid": "Κινησεις προς αποφυγειν"
}

//Team 7.2
"MarketingAction":{ //suports GET,POST,PUT,DELETE
  "Id": 1, 
  "BusinessPlanId": 2,
  "Title":"Ενεργεια1", 
  "ImplementationTime": 54, 
  "Frequency": 2, 
  "ImplementationCost": 60, 
  "TotalCost":"Συνολικο Κοστος 1"
}

//Team 8.1
"StartAction": { //suports GET,POST,PUT,DELETE
  "ID": 1 , 
  "Name": "Ενεργεια1", 
  "ActionCost": 56
}

//Team 8.2
"FunctionCost": { //supports GET
  "Functions":{ //this is a list and each Function supports GET,POST,PUT,DELETE
    "ID": 1 , 
    "BusinessPlanId": 1,
    "Name": "Ενεργεια1", 
    "FunctionCost": 56
  }
  "functionsTotalCost": 6000
}

//Team 8.3
"Deadspot": { //suports GET,POST,PUT,DELETE
  "ID": 1 , 
  "BusinessPlanId": 2,
  "Spot":"Νεκρο σημειο1"
}

// Appendix: Upload functionality
"Link": { //suports GET,POST,PUT,DELETE
  "ID":1, 
  "BusinessPlanId": 1,
  "URL":"www1", 
  "Title":"Τιτλος1", 
  "Section": "Section1"
}

//Team 1.1
"Conclusion": { //suports GET,POST,PUT,DELETE
  "BussinesPlanId": 1,
  "Text": "Κειμενο περιληψης"
}
