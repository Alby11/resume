// Configure the AWS SDK
AWS.config.update({
    region: 'eu-central-1', // Your region
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'eu-central-1:22706048-b0a2-46d7-ae01-d20ab46af86d' // Your Cognito Identity Pool ID
    })
});

// Create DynamoDB service object
var dynamodb = new AWS.DynamoDB.DocumentClient();

// Function to update visitor count
function updateVisitorCount() {
    fetch('https://9j3slqhxwe.execute-api.eu-central-1.amazonaws.com/visitor-count')
        .then(response => response.json())
        .then(data => {
            document.getElementById('visitor-count').textContent = data.count;
        })
        .catch(error => {
            console.error("Error fetching visitor count:", error);
        });
}

// Call the function to update the visitor count on page load
updateVisitorCount();
