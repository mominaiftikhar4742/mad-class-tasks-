// Define Theme
const theme = {
    colors: {
      primary: '#6200ee',
      accent: '#03dac4',
      background: '#f6f6f6',
      text: '#000000',
    },
  };
  
  // Home Screen Function
  function HomeScreen() {
    console.log("\n=== Home Screen ===");
    console.log("Welcome!");
    console.log("Explore React Native UI Libraries.");
    console.log("Styled Box: NativeBase alternative");
    console.log("Press '1' to Go to Profile Screen");
  }
  
  // Profile Screen Function
  function ProfileScreen() {
    console.log("\n=== Profile Screen ===");
    console.log("Lottie Animation Playing... (Simulated)");
  }
  
  // Navigation Logic (Simulating User Interaction)
  function startApp() {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    HomeScreen();
    
    rl.question("\nEnter your choice: ", function(choice) {
      if (choice === '1') {
        ProfileScreen();
      } else {
        console.log("Invalid choice. Exiting...");
      }
      rl.close();
    });
  }
  
  // Start the App
  startApp();