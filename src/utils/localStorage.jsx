const employees = [
  {
    "id": 1,
    "firstName": "Rahul",
    "email": "1@me.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Complete Report",
        "task_description": "Finish the quarterly financial report.",
        "task_date": "2025-03-26",
        "task_categories": ["Finance", "Report"],
        "taskType": "Finance",
        "failed": false
      },
      {

        "active": true,
        "new_task": false,
        "complete": false,
        "task_title": "Client Meeting",
        "task_description": "Attend the client meeting at 3 PM.",
        "task_date": "2025-03-27",
        "task_categories": ["Meeting", "Client"],
        "taskType": "Meeting",
        "failed": false
      },
      {

        "active": false,
        "new_task": false,
        "complete": true,
        "task_title": "Submit Budget",
        "task_description": "Submit the annual budget to the finance team.",
        "task_date": "2025-03-24",
        "task_categories": ["Finance", "Budget"],
        "taskType": "Finance",
        "failed": false
      }
    ],
    "taskcount": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "priya.verma@example.com",
    "password": "123",
    "tasks": [
      {

        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Prepare Presentation",
        "task_description": "Create the slides for the upcoming presentation.",
        "task_date": "2025-03-28",
        "task_categories": ["Presentation", "Preparation"],
        "taskType": "Presentation",
        "failed": false
      },
      {

        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Team Sync",
        "task_description": "Organize and attend the team synchronization meeting.",
        "task_date": "2025-03-29",
        "task_categories": ["Meeting", "Team"],
        "taskType": "Meeting",
        "failed": false
      }
    ],
    "taskcount": {
      "active": 2,
      "new_task": 2,
      "completed": 0,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Amit",
    "email": "amit.kumar@example.com",
    "password": "123",
    "tasks": [
      {

        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Fix Bugs",
        "task_description": "Resolve bugs reported in the recent version.",
        "task_date": "2025-03-25",
        "task_categories": ["Development", "Bug Fix"],
        "taskType": "Development",
        "failed": false
      },
      {

        "active": true,
        "new_task": false,
        "complete": false,
        "task_title": "Code Review",
        "task_description": "Review code submitted by the development team.",
        "task_date": "2025-03-26",
        "task_categories": ["Development", "Review"],
        "taskType": "Development",
        "failed": false
      },
      {

        "active": false,
        "new_task": false,
        "complete": true,
        "task_title": "Deploy Update",
        "task_description": "Deploy the update to the production server.",
        "task_date": "2025-03-22",
        "task_categories": ["Development", "Deployment"],
        "taskType": "Development",
        "failed": false
      }
    ],
    "taskcount": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "neha.mehta@example.com",
    "password": "123",
    "tasks": [
      {

        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Schedule Interviews",
        "task_description": "Organize and schedule interviews for new candidates.",
        "task_date": "2025-03-30",
        "task_categories": ["HR", "Interviews"],
        "taskType": "HR",
        "failed": false
      },
      {

        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Review Resumes",
        "task_description": "Review resumes and shortlist candidates.",
        "task_date": "2025-03-31",
        "task_categories": ["HR", "Hiring"],
        "taskType": "HR",
        "failed": false
      },
      {

        "active": false,
        "new_task": false,
        "complete": true,
        "task_title": "Onboard New Employee",
        "task_description": "Complete the onboarding process for a new hire.",
        "task_date": "2025-03-20",
        "task_categories": ["HR", "Onboarding"],
        "taskType": "HR",
        "failed": false
      }
    ],
    "taskcount": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Ravi",
    "email": "ravi.singh@example.com",
    "password": "123",
    "tasks": [
      {

        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Product Launch",
        "task_description": "Coordinate the product launch event.",
        "task_date": "2025-04-01",
        "task_categories": ["Marketing", "Product"],
        "taskType": "Marketing",
        "failed": false
      },
      {

        "active": true,
        "new_task": true,
        "complete": false,
        "task_title": "Social Media Campaign",
        "task_description": "Plan and execute a social media campaign.",
        "task_date": "2025-04-02",
        "task_categories": ["Marketing", "Campaign"],
        "taskType": "Marketing",
        "failed": false
      },
      {

        "active": false,
        "new_task": false,
        "complete": true,
        "task_title": "Create Marketing Plan",
        "task_description": "Develop the marketing plan for the next quarter.",
        "task_date": "2025-03-18",
        "task_categories": ["Marketing", "Strategy"],
        "taskType": "Marketing",
        "failed": false
      }
    ],
    "taskcount": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    }
  }
];



    const admin = [
        {
            "id": 1,
            "email": "admin@example.com",
            "password": "123"
          }
    ]

    export const setLocalStorage =() =>{
        localStorage.setItem("employees", JSON.stringify(employees))
        localStorage.setItem("admin", JSON.stringify(admin))
    }
    export const getLocalStorage =() =>{
      const employees = JSON.parse(localStorage.getItem("employees"));
         const admin = JSON.parse(localStorage.getItem("admin"));
       
       return({employees})
    }
