document.addEventListener("DOMContentLoaded", function () {
  // Function to get the current day of the week
  function getCurrentDayOfWeek() {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const currentDate = new Date();
      return daysOfWeek[currentDate.getUTCDay()];
  }

  // Function to update the current UTC time
  function updateCurrentUTCTime() {
      const currentTimeInMillis = Date.now();
      const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
      timeElement.textContent = currentTimeInMillis.toString();
  }

  // Function to fetch and update the Slack username and track
  async function fetchAndDisplayUserInfo() {
      try {
          // Replace 'your-api-endpoint' with the actual endpoint to fetch user info
          const response = await fetch('your-api-endpoint');
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const userData = await response.json();

          // Update Slack username and track
          const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');
          slackUserNameElement.textContent = userData.slackUserName;

          const myTrackElement = document.querySelector('[data-testid="myTrack"]');
          myTrackElement.textContent = userData.track;
      } catch (error) {
          console.error('Error fetching user data:', error);
      }
  }

  // Update the current day of the week and UTC time initially
  const currentDayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  currentDayOfWeekElement.textContent = getCurrentDayOfWeek();
  updateCurrentUTCTime();

  // Fetch and display user info
  fetchAndDisplayUserInfo();

  // Update the current UTC time every second
  setInterval(updateCurrentUTCTime, 1000);
});
