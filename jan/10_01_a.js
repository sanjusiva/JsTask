const data = {
  company: {
    name: "TechCorp",
    location: {
      city: "Silicon Valley",
      country: "USA",
    },
    departments: [
      {
        name: "Research and Development",
        employees: [
          {
            id: 101,
            name: "Alice Johnson",
            position: "Senior Engineer",
            projects: [
              {
                project_id: "P101",
                project_name: "InnovationHub",
                start_date: "2023-03-01",
                end_date: "2024-01-01",
              },
              {
                project_id: "P102",
                project_name: "NextGenTech",
                start_date: "2022-09-15",
                end_date: "2023-05-30",
              },
            ],
          },
          {
            id: 102,
            name: "Bob Smith",
            position: "Software Architect",
            projects: [
              {
                project_id: "P103",
                project_name: "AI Integration",
                start_date: "2023-01-10",
                end_date: "2024-06-30",
              },
              {
                project_id: "P102",
                project_name: "NextGenTech",
                start_date: "2021-09-15",
                end_date: "2022-09-15",
              },
            ],
          },
        ],
      },
      {
        name: "Marketing",
        employees: [
          {
            id: 201,
            name: "Eva Martinez",
            position: "Marketing Manager",
            campaigns: [
              {
                campaign_id: "C201",
                campaign_name: "TechExpo2023",
                start_date: "2023-05-20",
                end_date: "2023-06-15",
              },
            ],
          },
        ],
      },
    ],
  },
  financials: {
    revenue: 7500000,
    expenses: 4500000,
    profit: 3000000,
  },
  partners: [
    {
      name: "InnoTech Solutions",
      type: "Technology",
      contact: {
        name: "Charlie Davis",
        email: "charlie@innotech.com",
        phone: "+1-555-1234",
      },
    },
    {
      name: "MarketBoost Inc.",
      type: "Marketing",
      contact: {
        name: "Sophie Turner",
        email: "sophie@marketboost.com",
        phone: "+1-555-5678",
      },
    },
  ],
};

let emp_id = 102;
let date = "2023-07-01";
let pos = "Senior Engineer";
let proj_id = "P101";

function findName(id) {
  let empMatch = 0;
  data.company.departments.forEach((emp) => {
    // console.log("id: ",id)
    emp.employees.find((ele) => {
      if (id === ele.id) {
        console.log(ele.name);
        empMatch++;
      }
    });
  });
  if (!empMatch) {
    console.log("emp_id doesn't match");
  }
}

function findNameWithPos(id, pos) {
  let empMatch = 0;
  data.company.departments.forEach((emp) => {
    // console.log("id: ",id," pos: ",pos)
    emp.employees.find((ele) => {
      // console.log(ele.id)
      if (id === ele.id && pos === ele.position) {
        console.log(ele.name);
        empMatch++;
      }
    });
  });
  if (!empMatch) {
    console.log("emp_id doesn't match with position");
  }
}

function basedOnDate(date, pos, pro_id) {
  let res;
  let empMatch = 0;
  data.company.departments.forEach((emp) => {
    emp.employees.find((ele) => {
      if (ele.projects && ele.position === pos) {
        empMatch++;
        // console.log("arrr: ",ele.projects)
        res = basedOnProjId(ele.projects, pro_id, date);
        // console.log("res: ",res)
        if (res) {
          // console.log("result: ",res)
          ele.projects.find((val) => {
            if (val == res) {
              console.log(ele.id, ele.name);
            }
          });
        }
      }
    });
  });
  if (!empMatch) {
    console.log("Doesn't match");
  }
}

function basedOnProjId(data, pro_id, date) {
  // console.log(data)
  let res;
  data.find((proj) => {
    // console.log(proj)
    let start_date = new Date(proj.start_date);
    let end_date = new Date(proj.end_date);
    let dt = new Date(date);
    // console.log(start_date,end_date,dt)
    if (proj.project_id === pro_id && dt >= start_date && dt <= end_date) {
      res = proj;
      // console.log(res)
      return res;
    }
  });
  return res;
}

findName(emp_id);
findNameWithPos(emp_id, "Software Architect");
basedOnDate(date, pos, proj_id);
