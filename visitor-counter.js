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
    var params = {
        TableName: 'VisitorCount',
        Key: { Page: 'resume' },
        UpdateExpression: 'SET #c = if_not_exists(#c, :start) + :inc',
        ExpressionAttributeNames: { '#c': 'Count' },
        ExpressionAttributeValues: { ':inc': 1, ':start': 0 },
        ReturnValues: 'UPDATED_NEW'
    };

    dynamodb.update(params, function (err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            document.getElementById('visitor-count').textContent = data.Attributes.Count;
        }
    });
}

// Call the function to update the visitor count on page load
updateVisitorCount();
