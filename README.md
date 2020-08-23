# TA Placement System

## Basic Overview
The TA Placement System is an application that is used by students to apply to be a computer science teaching assistant, administrators to appoint and place teaching assistants, and teaching assistants to view their placements. 

## Terminology
    - Course: A class.

    - Lab Section: When a student takes a course, they sign up for a corresponding lab section. During a lab section, students work on practice problems in the computer lab.

    - TA: Teaching Assistant, a student who helps an instructor with a course by holding office hours and leading lab sections.

## Angular 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

# In Development

# Current Plan

## Page Overview
<table>
    <tr>
        <th>Page Name</th>
        <th>Users Who Access Page</th>
        <th>Purpose</th>
    </tr>
    <tr>
        <td>Application</td>
        <td>Student</td>
        <td>Students enter information about themselves for the TA Application and submit it to apply</td>
    </tr>
    <tr>
        <td>Status</td>
        <td>Student</td>
        <td>Students view their current application status</td>
    </tr>
     <tr>
        <td>View Applications</td>
        <td>Administrators</td>
        <td>Administrators can view applications that students submit, students' current statuses, and change students' statuses.</td>
    </tr>
    <tr>
        <td>View Appointments</td>
        <td>Administrators</td>
        <td>Administrators can look at TAs who have accepted their appointment and place them with a specific course.</td>
    </tr>
     <tr>
        <td>View Courses</td>
        <td>Administrators</td>
        <td>Administrators can look at the courses and see which TAs are assigned to each.</td>
    </tr>
     <tr>
        <td>View Preferences</td>
        <td>Administrators</td>
        <td>Administrators can see what preferences TAs have submitted for lab sections and assign TAs to lab sections.</td>
    </tr>
    <tr>
        <td>Preferences</td>
        <td>Teaching Assistants</td>
        <td>Teaching Assistants can rank the lab sections of their assigned course</td>
    </tr>
    <tr>
        <td>Assignment</td>
        <td>Teaching Assistants</td>
        <td>Teaching Assistants can view which course they have been assigned to and which corresponding lab section(s)</td>
    </tr>
</table>

## Pages

### Application Page

If a student has not filled out an application yet, they can enter which courses they have taken, what computer science skills they have, their major, graduation date, student ID, and GPA, and they can submit the application. 

If a student has submitted an application, they can view the application they submitted but cannot edit it.

### Status Page

A student can see the status of their application.

Possible Statuses
<table>
    <tr>
        <th>Name</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Waiting</td>
        <td>Application has not been submitted yet</td>
    </tr>
    <tr>
        <td>Pending</td>
        <td>Application is being reviewed</td>
    </tr>
    <tr>
        <td>Interview</td>
        <td>Student is going to the next stage and will be interviewed</td>
    </tr>
    <tr>
        <td>Appointed</td>
        <td>Student has been appointed to be a TA</td>
    </tr>
    <tr>
        <td>Rejected</td>
        <td>Student has not been chosen to be a TA</td>
    </tr>
</table>

After a TA's status has changed to 'Interview' or 'Appointed', the TA must confirm that they accept moving forward in the process, or they can decline.


### View Applications Page

Administrators can view submitted applications and filter by status. They can select a specific application from the list to see more information. They can also change the student's status and appoint TAs.

### View Appointments Page

Once a TA accepts their appointment, administrators can view their appointment on this page and assign them to a specific course.

### View Courses Page

Administrators can view the courses offered and the TAs for each course. 

### View Preferences Page

Administrators can view the preferences of TAs for each course and use this to assigns TAs to lab sections.

### Preferences Page

A teaching assistant is appointed to a specific course. After being appointed, TAs can rank the lab sections of that course and give their desired number of lab sections. Administrators will use that information to match each TA of that course to lab sections, following preferences as best they can.

If a TA has already submitted their preferences, they can view them but cannot edit them.

### Assignment Page

This page informs TAs about the course they are assigned to by showing the instructor, other TAs, and other course info. It will also tell them their lab section placement once that has been determined.

