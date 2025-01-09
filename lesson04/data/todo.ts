interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }
  
  const todosdata: Todo[] = [
    { id: "1", title: "Learn TypeScript", description: "Complete the TypeScript basics tutorial.", completed: false },
    { id: "2", title: "Build a Todo App", description: "Create a Todo application using React and TypeScript.", completed: false },
    { id: "3", title: "Review PRs", description: "Review pull requests for the open-source project.", completed: true },
    { id: "4", title: "Read a Book", description: "Read 'Clean Code' by Robert C. Martin.", completed: false },
    { id: "5", title: "Exercise", description: "Do a 30-minute workout session.", completed: true },
    { id: "6", title: "Prepare Presentation", description: "Create slides for the team meeting.", completed: false },
    { id: "7", title: "Update Resume", description: "Add recent projects to my resume.", completed: true },
    { id: "8", title: "Write Blog Post", description: "Draft a blog post on TypeScript tips and tricks.", completed: false },
    { id: "9", title: "Learn Docker", description: "Follow a beginner's guide to Docker.", completed: false },
    { id: "10", title: "Plan Vacation", description: "Decide on dates and destinations for the next trip.", completed: true },
    { id: "11", title: "Organize Desk", description: "Clean and organize the workspace for better productivity.", completed: true },
    { id: "12", title: "Cook Dinner", description: "Try a new recipe for dinner tonight.", completed: false },
    { id: "13", title: "Explore GraphQL", description: "Learn the basics of GraphQL and set up a sample API.", completed: false },
    { id: "14", title: "Practice Algorithms", description: "Solve 5 problems on LeetCode.", completed: true },
    { id: "15", title: "Learn Redux", description: "Understand Redux basics and integrate it into a sample project.", completed: false },
    { id: "16", title: "Attend Webinar", description: "Join the webinar on 'Scaling Microservices'.", completed: true },
    { id: "17", title: "Test Application", description: "Run test cases for the recent app update.", completed: false },
    { id: "18", title: "Organize Files", description: "Sort and archive old project files.", completed: true },
    { id: "19", title: "Learn CSS Grid", description: "Practice building layouts using CSS Grid.", completed: false },
    { id: "20", title: "Contribute to Open Source", description: "Find an open-source project and contribute a PR.", completed: false },
  ];
  
  export default todosdata;
  