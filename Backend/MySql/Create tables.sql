CREATE TABLE Permissions (
  permission_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  permission_name VARCHAR(20)  NULL    ,
PRIMARY KEY(permission_id));



CREATE TABLE Roles (
  role_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  role_name VARCHAR(20)  NULL    ,
PRIMARY KEY(role_id));



CREATE TABLE business_plans (
  bpID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plan_name VARCHAR(50)  NULL    ,
PRIMARY KEY(bpID));



CREATE TABLE Users (
  user_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  first_name VARCHAR(40)  NULL  ,
  last_name VARCHAR(40)  NULL  ,
  user_name VARCHAR(40)  NOT NULL  ,
  email VARCHAR(40)  NOT NULL  ,
  password_hash VARCHAR(30)  NULL  ,
  age INTEGER UNSIGNED  NULL  ,
  studies_level VARCHAR(40)  NULL  ,
  is_main_profession BOOL  NULL  ,
  main_profession VARCHAR(40)  NULL    ,
PRIMARY KEY(user_id));



CREATE TABLE Start_Actions (
  actionID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  name VARCHAR(120)  NULL  ,
  actionCost INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(actionID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Products (
  productID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  productType BOOL  NULL  ,
  name VARCHAR(120)  NULL  ,
  directed_to VARCHAR(120)  NULL  ,
  innovation_factor VARCHAR(120)  NULL  ,
  technology VARCHAR(120)  NULL  ,
  license VARCHAR(120)  NULL  ,
  competition VARCHAR(120)  NULL  ,
  price INTEGER UNSIGNED  NULL  ,
  description VARCHAR(120)  NULL  ,
  copyright TEXT  NULL  ,
  productCost INTEGER UNSIGNED  NULL  ,
  numProduct INTEGER UNSIGNED  NULL  ,
  percentageIncome INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(productID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Market_Analysis_Notes (
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  text TEXT  NULL    ,
  PRIMARY KEY(business_plans_bpID),
	  FOREIGN KEY(business_plans_bpID)
		REFERENCES business_plans(bpID)
		  ON DELETE CASCADE
		  ON UPDATE CASCADE);



CREATE TABLE PESTEL (
  factorID INTEGER UNSIGNED  NOT NULL ,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  description VARCHAR(120)  NULL  ,
  example VARCHAR(120)  NULL    ,
PRIMARY KEY(business_plans_bpID,factorID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE team_employees (
  employeeID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  job TEXT  NULL    ,
PRIMARY KEY(employeeID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE team_managers (
  managerID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  name VARCHAR(120)  NULL  ,
  surname VARCHAR(120)  NULL  ,
  job VARCHAR(120)  NULL  ,
  linkedIn VARCHAR(120)  NULL    ,
PRIMARY KEY(managerID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE team_partners (
  partnerID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  name VARCHAR(120)  NULL  ,
  surName VARCHAR(120)  NULL  ,
  expertise VARCHAR(120)  NULL  ,
  linkedIn VARCHAR(120)  NULL  ,
  date_from INTEGER UNSIGNED  NULL  ,
  date_until INTEGER UNSIGNED  NULL  ,
  duties TEXT  NULL    ,
PRIMARY KEY(partnerID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Start_Functions (
  functionID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  name VARCHAR(120)  NULL  ,
  functionCost INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(functionID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Strategy (
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  promotion VARCHAR(120)  NULL  ,
  contribution VARCHAR(120)  NULL  ,
  marketEntry VARCHAR(120)  NULL  ,
  publicRelations VARCHAR(120)  NULL  ,
  avoid VARCHAR(120)  NULL    ,
  PRIMARY KEY(business_plans_bpID),
	  FOREIGN KEY(business_plans_bpID)
		REFERENCES business_plans(bpID)
		  ON DELETE CASCADE
		  ON UPDATE CASCADE);



CREATE TABLE SWOT (
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  swotType INTEGER UNSIGNED  NULL  ,
  text TEXT  NULL    ,
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Marketing (
  marketing_actionID INTEGER UNSIGNED  NOT NULL AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  title VARCHAR(120)  NULL  ,
  implementation INTEGER UNSIGNED  NULL  ,
  frequency INTEGER UNSIGNED  NULL  ,
  implementationCost INTEGER UNSIGNED  NULL  ,
  totalCost INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(marketing_actionID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Faculties (
  facultyID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  address VARCHAR(120)  NULL  ,
  usage_2 VARCHAR(120)  NULL  ,
  ownership_type VARCHAR(120)  NULL  ,
  start_date INTEGER UNSIGNED  NULL  ,
  m2 INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(facultyID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Equipment (
  equipmentID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  equipType VARCHAR(120)  NULL  ,
  address VARCHAR(120)  NULL  ,
  division VARCHAR(120)  NULL  ,
  firsthand BOOL  NULL  ,
  acquisition_date INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(equipmentID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Conclusion (
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  text TEXT  NULL    ,
PRIMARY KEY(business_plans_bpID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE employeesSalary (
  team_employees_employeeID INTEGER UNSIGNED  NOT NULL  ,
  salary INTEGER UNSIGNED  NULL  ,
  bonus INTEGER UNSIGNED  NULL  ,
  employment_type VARCHAR(120)  NULL    ,
PRIMARY KEY(team_employees_employeeID),
  FOREIGN KEY(team_employees_employeeID)
    REFERENCES team_employees(employeeID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Faculties_Cost (
  Faculties_facultyID INTEGER UNSIGNED  NOT NULL  ,
  facCost INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(Faculties_facultyID),
  FOREIGN KEY(Faculties_facultyID)
    REFERENCES Faculties(facultyID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Links (
  linkID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  URL VARCHAR(120)  NULL  ,
  title VARCHAR(120)  NULL  ,
  section VARCHAR(120)  NULL    ,
PRIMARY KEY(linkID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE identity (
  identityID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  name VARCHAR(120)  NULL  ,
  date INTEGER UNSIGNED  NULL  ,
  legalForm VARCHAR(120)  NULL  ,
  orderOfBusiness VARCHAR(120)  NULL    ,
PRIMARY KEY(identityID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Business (
  business_id INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  Users_user_id INTEGER UNSIGNED  NOT NULL  ,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  business_name VARCHAR(40)  NULL  ,
  is_new_business BOOL  NULL  ,
  year_of_creation YEAR  NULL  ,
  staff_number INTEGER UNSIGNED  NULL  ,
  subject VARCHAR(40)  NULL    ,
PRIMARY KEY(business_id, business_plans_bpID),
  FOREIGN KEY(Users_user_id)
    REFERENCES Users(user_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE UserRoles (
  Users_user_id INTEGER UNSIGNED  NOT NULL  ,
  Roles_role_id INTEGER UNSIGNED  NOT NULL    ,
PRIMARY KEY(Users_user_id, Roles_role_id),
  FOREIGN KEY(Users_user_id)
    REFERENCES Users(user_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(Roles_role_id)
    REFERENCES Roles(role_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE BusinessPlan_has_Permissions (
  Permissions_permission_id INTEGER UNSIGNED  NOT NULL  ,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL    ,
PRIMARY KEY(Permissions_permission_id, business_plans_bpID),
  FOREIGN KEY(Permissions_permission_id)
    REFERENCES Permissions(permission_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE RolePermissions (
  Roles_role_id INTEGER UNSIGNED  NOT NULL  ,
  Permissions_permission_id INTEGER UNSIGNED  NOT NULL    ,
PRIMARY KEY(Roles_role_id, Permissions_permission_id),
  FOREIGN KEY(Roles_role_id)
    REFERENCES Roles(role_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(Permissions_permission_id)
    REFERENCES Permissions(permission_id)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE DeadSpots (
  Products_productID INTEGER UNSIGNED  NOT NULL  ,
  business_plans_bpID INTEGER UNSIGNED  NOT NULL  ,
  deadSpot VARCHAR(120)  NULL    ,
PRIMARY KEY(Products_productID, business_plans_bpID),
  FOREIGN KEY(business_plans_bpID)
    REFERENCES business_plans(bpID)
      ON DELETE CASCADE
      ON UPDATE CASCADE,
  FOREIGN KEY(Products_productID)
    REFERENCES Products(productID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE Equipment_Cost (
  Equipment_equipmentID INTEGER UNSIGNED  NOT NULL  ,
  equipCost INTEGER UNSIGNED  NULL    ,
PRIMARY KEY(Equipment_equipmentID),
  FOREIGN KEY(Equipment_equipmentID)
    REFERENCES Equipment(equipmentID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE identity_descriptions (
  identityID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  identity_identityID INTEGER UNSIGNED  NOT NULL  ,
  description_text TEXT  NULL    ,
PRIMARY KEY(identityID, identity_identityID),
  FOREIGN KEY(identity_identityID)
    REFERENCES identity(identityID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);



CREATE TABLE identity_clients (
  clientID INTEGER UNSIGNED  NOT NULL   AUTO_INCREMENT,
  identity_identityID INTEGER UNSIGNED  NOT NULL  ,
  name TEXT  NULL    ,
PRIMARY KEY(clientID, identity_identityID),
  FOREIGN KEY(identity_identityID)
    REFERENCES identity(identityID)
      ON DELETE CASCADE
      ON UPDATE CASCADE);
